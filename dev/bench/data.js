window.BENCHMARK_DATA = {
  "lastUpdate": 1661655185423,
  "repoUrl": "https://github.com/open-feature/flagd",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Alex Jones",
            "username": "AlexsJones",
            "email": "alexsimonjones@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5201f6b753c7e663c29343e76df96767511c78e6",
          "message": "chore: fixing multi-arch build failure (#153)\n\nSigned-off-by: Alex Jones <alexsimonjones@gmail.com>",
          "timestamp": "2022-08-22T18:03:24Z",
          "url": "https://github.com/open-feature/flagd/commit/5201f6b753c7e663c29343e76df96767511c78e6"
        },
        "date": 1661223171368,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/happy_path",
            "value": 2217,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "517521 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/eval_returns_error",
            "value": 6460,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "178453 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/happy_path",
            "value": 2214,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "522806 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/eval_returns_error",
            "value": 6546,
            "unit": "ns/op\t    1208 B/op\t      37 allocs/op",
            "extra": "181520 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/eval_returns_error",
            "value": 6488,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "179304 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/happy_path",
            "value": 2218,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "521745 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/happy_path",
            "value": 2229,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "518455 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/eval_returns_error",
            "value": 6525,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "178917 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/happy_path",
            "value": 3592,
            "unit": "ns/op\t    1400 B/op\t      20 allocs/op",
            "extra": "301960 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/eval_returns_error",
            "value": 6275,
            "unit": "ns/op\t    1288 B/op\t      39 allocs/op",
            "extra": "184858 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "James Milligan",
            "username": "james-milligan",
            "email": "75740990+james-milligan@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c72323eb5a3f371a64301fe4c10a368705d6e8e9",
          "message": "ci: Benchmark threshold update (#154)\n\nSigned-off-by: James-Milligan <james@omnant.co.uk>",
          "timestamp": "2022-08-24T00:58:01Z",
          "url": "https://github.com/open-feature/flagd/commit/c72323eb5a3f371a64301fe4c10a368705d6e8e9"
        },
        "date": 1661309425536,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/happy_path",
            "value": 2144,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "530707 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/eval_returns_error",
            "value": 6271,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "183297 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/happy_path",
            "value": 2160,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "523810 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/eval_returns_error",
            "value": 6270,
            "unit": "ns/op\t    1208 B/op\t      37 allocs/op",
            "extra": "180550 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/happy_path",
            "value": 2161,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "545985 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/eval_returns_error",
            "value": 6268,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "184628 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/happy_path",
            "value": 2151,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "541696 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/eval_returns_error",
            "value": 6354,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "187074 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/happy_path",
            "value": 3464,
            "unit": "ns/op\t    1400 B/op\t      20 allocs/op",
            "extra": "341629 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/eval_returns_error",
            "value": 6223,
            "unit": "ns/op\t    1288 B/op\t      39 allocs/op",
            "extra": "172928 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "James Milligan",
            "username": "james-milligan",
            "email": "75740990+james-milligan@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c72323eb5a3f371a64301fe4c10a368705d6e8e9",
          "message": "ci: Benchmark threshold update (#154)\n\nSigned-off-by: James-Milligan <james@omnant.co.uk>",
          "timestamp": "2022-08-24T00:58:01Z",
          "url": "https://github.com/open-feature/flagd/commit/c72323eb5a3f371a64301fe4c10a368705d6e8e9"
        },
        "date": 1661395918957,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/happy_path",
            "value": 2145,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "536017 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/eval_returns_error",
            "value": 6257,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "181125 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/happy_path",
            "value": 2144,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "541554 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/eval_returns_error",
            "value": 6227,
            "unit": "ns/op\t    1208 B/op\t      37 allocs/op",
            "extra": "188649 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/happy_path",
            "value": 2164,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "548763 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/eval_returns_error",
            "value": 6253,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "187670 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/happy_path",
            "value": 2143,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "547308 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/eval_returns_error",
            "value": 6259,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "189404 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/happy_path",
            "value": 3726,
            "unit": "ns/op\t    1400 B/op\t      20 allocs/op",
            "extra": "342313 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/eval_returns_error",
            "value": 6144,
            "unit": "ns/op\t    1288 B/op\t      39 allocs/op",
            "extra": "185961 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alex Jones",
            "username": "AlexsJones",
            "email": "alexsimonjones@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "17ef4c69bbe1b4b4acb43481d0461ecead57bbb2",
          "message": "fix: bug in the logger setup (#156)\n\nSigned-off-by: Alex Jones <alexsimonjones@gmail.com>\r\n\r\nSigned-off-by: Alex Jones <alexsimonjones@gmail.com>",
          "timestamp": "2022-08-25T16:28:13Z",
          "url": "https://github.com/open-feature/flagd/commit/17ef4c69bbe1b4b4acb43481d0461ecead57bbb2"
        },
        "date": 1661482480579,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/happy_path",
            "value": 1616,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "718870 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/eval_returns_error",
            "value": 4792,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "244371 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/happy_path",
            "value": 1619,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "730627 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/eval_returns_error",
            "value": 4868,
            "unit": "ns/op\t    1208 B/op\t      37 allocs/op",
            "extra": "238924 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/happy_path",
            "value": 1623,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "735466 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/eval_returns_error",
            "value": 5615,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "239529 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/happy_path",
            "value": 1673,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "600645 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/eval_returns_error",
            "value": 4874,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "240303 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/happy_path",
            "value": 2614,
            "unit": "ns/op\t    1400 B/op\t      20 allocs/op",
            "extra": "416019 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/eval_returns_error",
            "value": 4668,
            "unit": "ns/op\t    1288 B/op\t      39 allocs/op",
            "extra": "248421 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alex Jones",
            "username": "AlexsJones",
            "email": "alexsimonjones@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "17ef4c69bbe1b4b4acb43481d0461ecead57bbb2",
          "message": "fix: bug in the logger setup (#156)\n\nSigned-off-by: Alex Jones <alexsimonjones@gmail.com>\r\n\r\nSigned-off-by: Alex Jones <alexsimonjones@gmail.com>",
          "timestamp": "2022-08-25T16:28:13Z",
          "url": "https://github.com/open-feature/flagd/commit/17ef4c69bbe1b4b4acb43481d0461ecead57bbb2"
        },
        "date": 1661568681467,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/happy_path",
            "value": 2603,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "433876 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/eval_returns_error",
            "value": 8470,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "133934 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/happy_path",
            "value": 2725,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "437341 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/eval_returns_error",
            "value": 8908,
            "unit": "ns/op\t    1208 B/op\t      37 allocs/op",
            "extra": "142506 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/happy_path",
            "value": 2935,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "383500 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/eval_returns_error",
            "value": 8658,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "140103 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/happy_path",
            "value": 2838,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "378596 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/eval_returns_error",
            "value": 8492,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "152095 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/happy_path",
            "value": 4465,
            "unit": "ns/op\t    1400 B/op\t      20 allocs/op",
            "extra": "284115 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/eval_returns_error",
            "value": 9099,
            "unit": "ns/op\t    1288 B/op\t      39 allocs/op",
            "extra": "145290 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alex Jones",
            "username": "AlexsJones",
            "email": "alexsimonjones@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "17ef4c69bbe1b4b4acb43481d0461ecead57bbb2",
          "message": "fix: bug in the logger setup (#156)\n\nSigned-off-by: Alex Jones <alexsimonjones@gmail.com>\r\n\r\nSigned-off-by: Alex Jones <alexsimonjones@gmail.com>",
          "timestamp": "2022-08-25T16:28:13Z",
          "url": "https://github.com/open-feature/flagd/commit/17ef4c69bbe1b4b4acb43481d0461ecead57bbb2"
        },
        "date": 1661655184587,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/happy_path",
            "value": 2653,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "431786 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveBoolean/eval_returns_error",
            "value": 7549,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "160660 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/happy_path",
            "value": 2777,
            "unit": "ns/op\t     256 B/op\t       5 allocs/op",
            "extra": "447568 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveString/eval_returns_error",
            "value": 7860,
            "unit": "ns/op\t    1208 B/op\t      37 allocs/op",
            "extra": "143872 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/happy_path",
            "value": 2676,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "454460 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveFloat/eval_returns_error",
            "value": 7642,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "142744 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/happy_path",
            "value": 2673,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "451774 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveInt/eval_returns_error",
            "value": 7788,
            "unit": "ns/op\t    1192 B/op\t      37 allocs/op",
            "extra": "132781 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/happy_path",
            "value": 4248,
            "unit": "ns/op\t    1400 B/op\t      20 allocs/op",
            "extra": "265743 times\n2 procs"
          },
          {
            "name": "BenchmarkGRPCService_ResolveObject/eval_returns_error",
            "value": 7468,
            "unit": "ns/op\t    1288 B/op\t      39 allocs/op",
            "extra": "157278 times\n2 procs"
          }
        ]
      }
    ]
  }
}