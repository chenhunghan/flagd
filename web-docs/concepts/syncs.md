# Syncs

Syncs are a core part of flagd; they are the abstraction that enables different sources for feature flag definitions.
flagd can connect to one or more sync sources to 

## Available syncs

### Filepath sync

The file path sync provider reads and watch the source file for updates(ex: changes and deletions).

```shell
flagd start --uri file:etc/featureflags.json
```

In this example, `etc/featureflags.json` is a valid feature flag configuration file accessible by the flagd process.
See [sync source](../reference/sync-configuration.md#source-configuration) configuration for details.

---

### HTTP sync

The HTTP sync provider fetch flags from a remote source and periodically poll the source for flag configuration updates.

```shell
flagd start --uri https://my-flag-source.json
```

In this example, `https://my-flag-source.json` is a remote endpoint responding valid feature flag configurations when
invoked with **HTTP GET** request.
The polling interval, port, TLS settings, and authentication information can be configured.
See [sync source](../reference/sync-configuration.md#source-configuration) configuration for details.

---

### gRPC sync

The gRPC sync provider streams flag configurations from a gRPC sync provider implementation. This stream connection is ruled
by
the [sync service protobuf definition](https://github.com/open-feature/schemas/blob/main/protobuf/sync/v1/sync_service.proto).

```shell
flagd start --uri grpc://grpc-sync-source
```

In this example, `grpc-sync-source` is a grpc target implementing [sync.proto](../reference/flag-sync-protocol.md) definition.
See [sync source](../reference/sync-configuration.md#source-configuration) configuration for details.

---

### Kubernetes sync

The Kubernetes sync provider allows flagd to connect to a Kubernetes cluster and evaluate flags against a specified
FeatureFlagConfiguration resource as defined within
the [open-feature-operator](https://github.com/open-feature/open-feature-operator/blob/main/apis/core/v1alpha1/featureflagconfiguration_types.go)
spec.
This configuration is best used in conjunction with the [OpenFeature Operator](https://github.com/open-feature/open-feature-operator).

To use an existing FeatureFlagConfiguration custom resource, start flagD with the following command:

```shell
flagd start --uri core.openfeature.dev/default/my_example
```

In this example, `default/my_example` expected to be a valid FeatureFlagConfiguration resource, where `default` is the
namespace and `my_example` being the resource name.
See [sync source](../reference/sync-configuration.md#source-configuration) configuration for details.

## Merging

Flagd can be configured to read from multiple sources at once, when this is the case flagd will merge all flag configurations into a single
merged state.

For example:

![flag merge 1](../images/flag-merge-1.svg)

In this example, `source-A` and `source-B` provide a single flag configuration, the `foo` flag and the `bar` flag respectively.
The merge logic for this configuration is simple, both flag configurations are added to the `store`.

In most scenarios, these flag sources will be supplying `n` number of configurations, using a unique flag key for each configuration.

However, as multiple sources are being used, there is the opportunity for keys to be duplicated, intentionally or not, between flag sources.
In these situations `flagd` uses a merge priority order to ensure that its behavior is consistent.

Merge order is dictated by the order that `sync-providers` and `uris` are defined, with the latest defined source taking precedence over those defined before it, as an example:

```sh
./bin/flagd start --uri file:source-A.json --uri file:source-B.json --uri file:source-C.json
```

When `flagd` is started with the command defined above, `source-B` takes priority over `source-A`, whilst `source-C` takes priority over both `source-B` and `source-A`.

Using the above example, if a flag key is duplicated across all 3 sources, then the configuration from `source-C` would be the only one stored in the merged state.

![flag merge 2](../images/flag-merge-2.svg)

### State Resync Events

Given the above example, the `source-A` and `source-B` 'versions' of flag configuration the `foo` have been discarded, so if a delete event in `source-C` results in the removal of the `foo`flag, there will no longer be any reference of `foo` in flagd's store.

As a result of this flagd will return `FLAG_NOT_FOUND` errors, and the OpenFeature SDK will always return the default value.

To prevent flagd falling out of sync with its flag sources during delete events, resync events are used.
When a delete event results in a flag configuration being removed from the merged state, the full set of configurations is requested from all flag sources, and the merged state is rebuilt.
As a result, the value of the `foo` flag from `source-B` will be stored in the merged state, preventing flagd from returning `FLAG_NOT_FOUND` errors.

![flag merge 3](../images/flag-merge-3.svg)

In the example above, a delete event results in a resync event being fired, as `source-C` has deleted its 'version' of the `foo`, this results in a new merge state being formed from the remaining configurations.

![flag merge 4](../images/flag-merge-4.svg)

Resync events may lead to further resync events if the returned flag configurations result in further delete events, however the state will eventually be resolved correctly.