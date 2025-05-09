# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.22.0 (2025-04-08)

### Features

* add auth example for swr ([#200](https://github.com/andreik-n2/bff-sdk/issues/200)) ([7a5f34e](https://github.com/andreik-n2/bff-sdk/commit/7a5f34e8c80141f400a9b6ed195d04a22a86c92b)) (@StarpTech)
* add json patch support, response zod schema for ts operations ([#689](https://github.com/andreik-n2/bff-sdk/issues/689)) ([02f40dc](https://github.com/andreik-n2/bff-sdk/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@jensneuse)
* add swr hooks for auth and file upload ([#195](https://github.com/andreik-n2/bff-sdk/issues/195)) ([a0b1bae](https://github.com/andreik-n2/bff-sdk/commit/a0b1bae6a18e30fcefc35bdde2f72326f3de1392)) (@StarpTech)
* add tsup to build nextjs and swr packages ([#993](https://github.com/andreik-n2/bff-sdk/issues/993)) ([2685e03](https://github.com/andreik-n2/bff-sdk/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@Pagebakers)
* add upload profiles for S3 providers ([#476](https://github.com/andreik-n2/bff-sdk/issues/476)) ([6144545](https://github.com/andreik-n2/bff-sdk/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@fiam)
* allow forwarding query params on login ([#1370](https://github.com/andreik-n2/bff-sdk/issues/1370)) ([660a8d0](https://github.com/andreik-n2/bff-sdk/commit/660a8d0416b20a92f29fce3010e9e8f37dc50354)) (@jensneuse)
* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/andreik-n2/bff-sdk/issues/319)) ([020cd74](https://github.com/andreik-n2/bff-sdk/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@Pagebakers)
* custom error support for typescript operations ([#759](https://github.com/andreik-n2/bff-sdk/issues/759)) ([7cfa815](https://github.com/andreik-n2/bff-sdk/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@StarpTech)
* fix infinite loop when callbacks are not memoized ([#555](https://github.com/andreik-n2/bff-sdk/issues/555)) ([f9ed75f](https://github.com/andreik-n2/bff-sdk/commit/f9ed75fef9323c8cf49557e8c8017ddba2f41886)) (@Pagebakers)
* improved SWR hooks api, useMutation result no longer cached and updated to SWR 2.0 ([#305](https://github.com/andreik-n2/bff-sdk/issues/305)) ([fc4848b](https://github.com/andreik-n2/bff-sdk/commit/fc4848b3f15b447a487b31bd3d152f134c6f3aeb)) (@Pagebakers)
* make input required if there are required variables ([#551](https://github.com/andreik-n2/bff-sdk/issues/551)) ([00256bf](https://github.com/andreik-n2/bff-sdk/commit/00256bf456f0c733beb45a5cdbc258f84631975e)) (@Pagebakers)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@Pagebakers)
* nextjs 14 support ([#1338](https://github.com/andreik-n2/bff-sdk/issues/1338)) ([a8cd3c6](https://github.com/andreik-n2/bff-sdk/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@Pagebakers)
* re-export SWR to prevent context issues ([#264](https://github.com/andreik-n2/bff-sdk/issues/264)) ([c05b341](https://github.com/andreik-n2/bff-sdk/commit/c05b341f64123d828caec4c95560163ce868ccd4)) (@Pagebakers)
* react query client ([#340](https://github.com/andreik-n2/bff-sdk/issues/340)) ([c5769a4](https://github.com/andreik-n2/bff-sdk/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@Pagebakers)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@fiam)
* update SWR to v2 🥳 ([#446](https://github.com/andreik-n2/bff-sdk/issues/446)) ([8af6b99](https://github.com/andreik-n2/bff-sdk/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@Pagebakers)
* updated SWR to 2.2.0 ([#1109](https://github.com/andreik-n2/bff-sdk/issues/1109)) ([09ef6ef](https://github.com/andreik-n2/bff-sdk/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@Pagebakers)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)

### Bug Fixes

* peer dependency warnings ([#1143](https://github.com/andreik-n2/bff-sdk/issues/1143)) ([1f9bec2](https://github.com/andreik-n2/bff-sdk/commit/1f9bec236179322697c20124e53615c8976d96e5)) (@Pagebakers)
* prevent swallowing of input validation errors ([#529](https://github.com/andreik-n2/bff-sdk/issues/529)) ([39ea3fc](https://github.com/andreik-n2/bff-sdk/commit/39ea3fc3fbf96916f1165228194b8c915882b133)) (@Aenimus)
* produce JSONPatch patches with removals in the right order ([#1060](https://github.com/andreik-n2/bff-sdk/issues/1060)) ([461b6a4](https://github.com/andreik-n2/bff-sdk/commit/461b6a446a59f3b81e01a1840f151f716e138416)) (@fiam)
* **swr:** reset user cache after logout ([#197](https://github.com/andreik-n2/bff-sdk/issues/197)) ([48fdaa1](https://github.com/andreik-n2/bff-sdk/commit/48fdaa1966bf26519026bcfc59e5fc07cf6a9887)) (@StarpTech)
* upload types ([#723](https://github.com/andreik-n2/bff-sdk/issues/723)) ([5077a7d](https://github.com/andreik-n2/bff-sdk/commit/5077a7d2ab363d3bbbb1df35423e5ad799b1800f)) (@Pagebakers)

## 0.21.0 (2025-04-08)

### Features

* add auth example for swr ([#200](https://github.com/andreik-n2/bff-sdk/issues/200)) ([7a5f34e](https://github.com/andreik-n2/bff-sdk/commit/7a5f34e8c80141f400a9b6ed195d04a22a86c92b)) (@)
* add json patch support, response zod schema for ts operations ([#689](https://github.com/andreik-n2/bff-sdk/issues/689)) ([02f40dc](https://github.com/andreik-n2/bff-sdk/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@)
* add swr hooks for auth and file upload ([#195](https://github.com/andreik-n2/bff-sdk/issues/195)) ([a0b1bae](https://github.com/andreik-n2/bff-sdk/commit/a0b1bae6a18e30fcefc35bdde2f72326f3de1392)) (@)
* add tsup to build nextjs and swr packages ([#993](https://github.com/andreik-n2/bff-sdk/issues/993)) ([2685e03](https://github.com/andreik-n2/bff-sdk/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@)
* add upload profiles for S3 providers ([#476](https://github.com/andreik-n2/bff-sdk/issues/476)) ([6144545](https://github.com/andreik-n2/bff-sdk/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@)
* allow forwarding query params on login ([#1370](https://github.com/andreik-n2/bff-sdk/issues/1370)) ([660a8d0](https://github.com/andreik-n2/bff-sdk/commit/660a8d0416b20a92f29fce3010e9e8f37dc50354)) (@)
* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/andreik-n2/bff-sdk/issues/319)) ([020cd74](https://github.com/andreik-n2/bff-sdk/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@)
* custom error support for typescript operations ([#759](https://github.com/andreik-n2/bff-sdk/issues/759)) ([7cfa815](https://github.com/andreik-n2/bff-sdk/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@)
* fix infinite loop when callbacks are not memoized ([#555](https://github.com/andreik-n2/bff-sdk/issues/555)) ([f9ed75f](https://github.com/andreik-n2/bff-sdk/commit/f9ed75fef9323c8cf49557e8c8017ddba2f41886)) (@)
* improved SWR hooks api, useMutation result no longer cached and updated to SWR 2.0 ([#305](https://github.com/andreik-n2/bff-sdk/issues/305)) ([fc4848b](https://github.com/andreik-n2/bff-sdk/commit/fc4848b3f15b447a487b31bd3d152f134c6f3aeb)) (@)
* make input required if there are required variables ([#551](https://github.com/andreik-n2/bff-sdk/issues/551)) ([00256bf](https://github.com/andreik-n2/bff-sdk/commit/00256bf456f0c733beb45a5cdbc258f84631975e)) (@)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@)
* nextjs 14 support ([#1338](https://github.com/andreik-n2/bff-sdk/issues/1338)) ([a8cd3c6](https://github.com/andreik-n2/bff-sdk/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@)
* re-export SWR to prevent context issues ([#264](https://github.com/andreik-n2/bff-sdk/issues/264)) ([c05b341](https://github.com/andreik-n2/bff-sdk/commit/c05b341f64123d828caec4c95560163ce868ccd4)) (@)
* react query client ([#340](https://github.com/andreik-n2/bff-sdk/issues/340)) ([c5769a4](https://github.com/andreik-n2/bff-sdk/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@)
* update SWR to v2 🥳 ([#446](https://github.com/andreik-n2/bff-sdk/issues/446)) ([8af6b99](https://github.com/andreik-n2/bff-sdk/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@)
* updated SWR to 2.2.0 ([#1109](https://github.com/andreik-n2/bff-sdk/issues/1109)) ([09ef6ef](https://github.com/andreik-n2/bff-sdk/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)

### Bug Fixes

* peer dependency warnings ([#1143](https://github.com/andreik-n2/bff-sdk/issues/1143)) ([1f9bec2](https://github.com/andreik-n2/bff-sdk/commit/1f9bec236179322697c20124e53615c8976d96e5)) (@)
* prevent swallowing of input validation errors ([#529](https://github.com/andreik-n2/bff-sdk/issues/529)) ([39ea3fc](https://github.com/andreik-n2/bff-sdk/commit/39ea3fc3fbf96916f1165228194b8c915882b133)) (@)
* produce JSONPatch patches with removals in the right order ([#1060](https://github.com/andreik-n2/bff-sdk/issues/1060)) ([461b6a4](https://github.com/andreik-n2/bff-sdk/commit/461b6a446a59f3b81e01a1840f151f716e138416)) (@)
* **swr:** reset user cache after logout ([#197](https://github.com/andreik-n2/bff-sdk/issues/197)) ([48fdaa1](https://github.com/andreik-n2/bff-sdk/commit/48fdaa1966bf26519026bcfc59e5fc07cf6a9887)) (@)
* upload types ([#723](https://github.com/andreik-n2/bff-sdk/issues/723)) ([5077a7d](https://github.com/andreik-n2/bff-sdk/commit/5077a7d2ab363d3bbbb1df35423e5ad799b1800f)) (@)

## 0.20.0 (2025-04-07)

### Features

* add auth example for swr ([#200](https://github.com/andreik-n2/bff-sdk/issues/200)) ([7a5f34e](https://github.com/andreik-n2/bff-sdk/commit/7a5f34e8c80141f400a9b6ed195d04a22a86c92b)) (@)
* add json patch support, response zod schema for ts operations ([#689](https://github.com/andreik-n2/bff-sdk/issues/689)) ([02f40dc](https://github.com/andreik-n2/bff-sdk/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@)
* add swr hooks for auth and file upload ([#195](https://github.com/andreik-n2/bff-sdk/issues/195)) ([a0b1bae](https://github.com/andreik-n2/bff-sdk/commit/a0b1bae6a18e30fcefc35bdde2f72326f3de1392)) (@)
* add tsup to build nextjs and swr packages ([#993](https://github.com/andreik-n2/bff-sdk/issues/993)) ([2685e03](https://github.com/andreik-n2/bff-sdk/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@)
* add upload profiles for S3 providers ([#476](https://github.com/andreik-n2/bff-sdk/issues/476)) ([6144545](https://github.com/andreik-n2/bff-sdk/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@)
* allow forwarding query params on login ([#1370](https://github.com/andreik-n2/bff-sdk/issues/1370)) ([660a8d0](https://github.com/andreik-n2/bff-sdk/commit/660a8d0416b20a92f29fce3010e9e8f37dc50354)) (@)
* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/andreik-n2/bff-sdk/issues/319)) ([020cd74](https://github.com/andreik-n2/bff-sdk/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@)
* custom error support for typescript operations ([#759](https://github.com/andreik-n2/bff-sdk/issues/759)) ([7cfa815](https://github.com/andreik-n2/bff-sdk/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@)
* fix infinite loop when callbacks are not memoized ([#555](https://github.com/andreik-n2/bff-sdk/issues/555)) ([f9ed75f](https://github.com/andreik-n2/bff-sdk/commit/f9ed75fef9323c8cf49557e8c8017ddba2f41886)) (@)
* improved SWR hooks api, useMutation result no longer cached and updated to SWR 2.0 ([#305](https://github.com/andreik-n2/bff-sdk/issues/305)) ([fc4848b](https://github.com/andreik-n2/bff-sdk/commit/fc4848b3f15b447a487b31bd3d152f134c6f3aeb)) (@)
* make input required if there are required variables ([#551](https://github.com/andreik-n2/bff-sdk/issues/551)) ([00256bf](https://github.com/andreik-n2/bff-sdk/commit/00256bf456f0c733beb45a5cdbc258f84631975e)) (@)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@)
* nextjs 14 support ([#1338](https://github.com/andreik-n2/bff-sdk/issues/1338)) ([a8cd3c6](https://github.com/andreik-n2/bff-sdk/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@)
* re-export SWR to prevent context issues ([#264](https://github.com/andreik-n2/bff-sdk/issues/264)) ([c05b341](https://github.com/andreik-n2/bff-sdk/commit/c05b341f64123d828caec4c95560163ce868ccd4)) (@)
* react query client ([#340](https://github.com/andreik-n2/bff-sdk/issues/340)) ([c5769a4](https://github.com/andreik-n2/bff-sdk/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@)
* update SWR to v2 🥳 ([#446](https://github.com/andreik-n2/bff-sdk/issues/446)) ([8af6b99](https://github.com/andreik-n2/bff-sdk/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@)
* updated SWR to 2.2.0 ([#1109](https://github.com/andreik-n2/bff-sdk/issues/1109)) ([09ef6ef](https://github.com/andreik-n2/bff-sdk/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)

### Bug Fixes

* peer dependency warnings ([#1143](https://github.com/andreik-n2/bff-sdk/issues/1143)) ([1f9bec2](https://github.com/andreik-n2/bff-sdk/commit/1f9bec236179322697c20124e53615c8976d96e5)) (@)
* prevent swallowing of input validation errors ([#529](https://github.com/andreik-n2/bff-sdk/issues/529)) ([39ea3fc](https://github.com/andreik-n2/bff-sdk/commit/39ea3fc3fbf96916f1165228194b8c915882b133)) (@)
* produce JSONPatch patches with removals in the right order ([#1060](https://github.com/andreik-n2/bff-sdk/issues/1060)) ([461b6a4](https://github.com/andreik-n2/bff-sdk/commit/461b6a446a59f3b81e01a1840f151f716e138416)) (@)
* **swr:** reset user cache after logout ([#197](https://github.com/andreik-n2/bff-sdk/issues/197)) ([48fdaa1](https://github.com/andreik-n2/bff-sdk/commit/48fdaa1966bf26519026bcfc59e5fc07cf6a9887)) (@)
* upload types ([#723](https://github.com/andreik-n2/bff-sdk/issues/723)) ([5077a7d](https://github.com/andreik-n2/bff-sdk/commit/5077a7d2ab363d3bbbb1df35423e5ad799b1800f)) (@)

## [0.19.4](https://github.com/andreik-n2/bff-sdk/compare/@virgograph/swr@0.19.3...@virgograph/swr@0.19.4) (2025-04-07)

**Note:** Version bump only for package @virgograph/swr

## [0.19.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.19.2...@virgograph/swr@0.19.3) (2024-05-15)

**Note:** Version bump only for package @virgograph/swr

## [0.19.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.19.1...@virgograph/swr@0.19.2) (2024-04-19)

**Note:** Version bump only for package @virgograph/swr

## [0.19.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.19.0...@virgograph/swr@0.19.1) (2024-03-08)

**Note:** Version bump only for package @virgograph/swr

## [0.19.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.18.5...@virgograph/swr@0.19.0) (2024-02-28)

### Features

* allow forwarding query params on login ([#1370](https://github.com/wundergraph/wundergraph/issues/1370)) ([660a8d0](https://github.com/wundergraph/wundergraph/commit/660a8d0416b20a92f29fce3010e9e8f37dc50354)) (@jensneuse)

## [0.18.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.18.4...@virgograph/swr@0.18.5) (2024-01-12)

**Note:** Version bump only for package @virgograph/swr

## [0.18.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.18.3...@virgograph/swr@0.18.4) (2024-01-05)

**Note:** Version bump only for package @virgograph/swr

## [0.18.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.18.2...@virgograph/swr@0.18.3) (2023-12-13)

**Note:** Version bump only for package @virgograph/swr

## [0.18.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.18.1...@virgograph/swr@0.18.2) (2023-12-07)

**Note:** Version bump only for package @virgograph/swr

## [0.18.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.18.0...@virgograph/swr@0.18.1) (2023-12-01)

**Note:** Version bump only for package @virgograph/swr

## [0.18.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.23...@virgograph/swr@0.18.0) (2023-11-24)

### Features

* nextjs 14 support ([#1338](https://github.com/wundergraph/wundergraph/issues/1338)) ([a8cd3c6](https://github.com/wundergraph/wundergraph/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@Pagebakers)

## [0.17.23](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.22...@virgograph/swr@0.17.23) (2023-11-06)

**Note:** Version bump only for package @virgograph/swr

## [0.17.22](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.21...@virgograph/swr@0.17.22) (2023-10-30)

**Note:** Version bump only for package @virgograph/swr

## [0.17.21](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.20...@virgograph/swr@0.17.21) (2023-10-26)

**Note:** Version bump only for package @virgograph/swr

## [0.17.20](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.19...@virgograph/swr@0.17.20) (2023-10-25)

**Note:** Version bump only for package @virgograph/swr

## [0.17.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.18...@virgograph/swr@0.17.19) (2023-10-18)

**Note:** Version bump only for package @virgograph/swr

## [0.17.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.17...@virgograph/swr@0.17.18) (2023-10-12)

**Note:** Version bump only for package @virgograph/swr

## [0.17.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.16...@virgograph/swr@0.17.17) (2023-10-10)

**Note:** Version bump only for package @virgograph/swr

## [0.17.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.15...@virgograph/swr@0.17.16) (2023-10-04)

**Note:** Version bump only for package @virgograph/swr

## [0.17.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.14...@virgograph/swr@0.17.15) (2023-09-22)

**Note:** Version bump only for package @virgograph/swr

## [0.17.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.13...@virgograph/swr@0.17.14) (2023-09-15)

**Note:** Version bump only for package @virgograph/swr

## [0.17.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.12...@virgograph/swr@0.17.13) (2023-09-05)

**Note:** Version bump only for package @virgograph/swr

## [0.17.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.11...@virgograph/swr@0.17.12) (2023-09-01)

**Note:** Version bump only for package @virgograph/swr

## [0.17.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.10...@virgograph/swr@0.17.11) (2023-08-24)

**Note:** Version bump only for package @virgograph/swr

## [0.17.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.9...@virgograph/swr@0.17.10) (2023-08-21)

**Note:** Version bump only for package @virgograph/swr

## [0.17.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.8...@virgograph/swr@0.17.9) (2023-08-17)

**Note:** Version bump only for package @virgograph/swr

## [0.17.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.7...@virgograph/swr@0.17.8) (2023-08-14)

**Note:** Version bump only for package @virgograph/swr

## [0.17.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.6...@virgograph/swr@0.17.7) (2023-08-13)

**Note:** Version bump only for package @virgograph/swr

## [0.17.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.5...@virgograph/swr@0.17.6) (2023-08-03)

**Note:** Version bump only for package @virgograph/swr

## [0.17.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.4...@virgograph/swr@0.17.5) (2023-08-03)

**Note:** Version bump only for package @virgograph/swr

## [0.17.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.3...@virgograph/swr@0.17.4) (2023-08-02)

**Note:** Version bump only for package @virgograph/swr

## [0.17.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.2...@virgograph/swr@0.17.3) (2023-08-01)

**Note:** Version bump only for package @virgograph/swr

## [0.17.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.1...@virgograph/swr@0.17.2) (2023-07-28)

**Note:** Version bump only for package @virgograph/swr

## [0.17.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.17.0...@virgograph/swr@0.17.1) (2023-07-24)

### Bug Fixes

* peer dependency warnings ([#1143](https://github.com/wundergraph/wundergraph/issues/1143)) ([1f9bec2](https://github.com/wundergraph/wundergraph/commit/1f9bec236179322697c20124e53615c8976d96e5)) (@Pagebakers)

## [0.17.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.16.2...@virgograph/swr@0.17.0) (2023-07-24)

### Features

* upgrade to typescript 5 ([#1135](https://github.com/wundergraph/wundergraph/issues/1135)) ([74cee5d](https://github.com/wundergraph/wundergraph/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)

## [0.16.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.16.1...@virgograph/swr@0.16.2) (2023-07-14)

**Note:** Version bump only for package @virgograph/swr

## [0.16.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.16.0...@virgograph/swr@0.16.1) (2023-07-13)

**Note:** Version bump only for package @virgograph/swr

## [0.16.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.13...@virgograph/swr@0.16.0) (2023-07-06)

### Features

* updated SWR to 2.2.0 ([#1109](https://github.com/wundergraph/wundergraph/issues/1109)) ([09ef6ef](https://github.com/wundergraph/wundergraph/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@Pagebakers)

## [0.15.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.12...@virgograph/swr@0.15.13) (2023-07-05)

**Note:** Version bump only for package @virgograph/swr

## [0.15.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.11...@virgograph/swr@0.15.12) (2023-06-22)

**Note:** Version bump only for package @virgograph/swr

## [0.15.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.10...@virgograph/swr@0.15.11) (2023-06-21)

### Bug Fixes

* produce JSONPatch patches with removals in the right order ([#1060](https://github.com/wundergraph/wundergraph/issues/1060)) ([461b6a4](https://github.com/wundergraph/wundergraph/commit/461b6a446a59f3b81e01a1840f151f716e138416)) (@fiam)

## [0.15.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.9...@virgograph/swr@0.15.10) (2023-06-09)

**Note:** Version bump only for package @virgograph/swr

## [0.15.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.8...@virgograph/swr@0.15.9) (2023-06-06)

**Note:** Version bump only for package @virgograph/swr

## [0.15.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.7...@virgograph/swr@0.15.8) (2023-06-05)

**Note:** Version bump only for package @virgograph/swr

## [0.15.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.6...@virgograph/swr@0.15.7) (2023-06-04)

**Note:** Version bump only for package @virgograph/swr

## [0.15.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.5...@virgograph/swr@0.15.6) (2023-06-02)

**Note:** Version bump only for package @virgograph/swr

## [0.15.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.4...@virgograph/swr@0.15.5) (2023-06-02)

**Note:** Version bump only for package @virgograph/swr

## [0.15.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.3...@virgograph/swr@0.15.4) (2023-06-01)

**Note:** Version bump only for package @virgograph/swr

## [0.15.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.2...@virgograph/swr@0.15.3) (2023-05-31)

**Note:** Version bump only for package @virgograph/swr

## [0.15.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.1...@virgograph/swr@0.15.2) (2023-05-31)

**Note:** Version bump only for package @virgograph/swr

## [0.15.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.15.0...@virgograph/swr@0.15.1) (2023-05-26)

**Note:** Version bump only for package @virgograph/swr

## [0.15.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.33...@virgograph/swr@0.15.0) (2023-05-25)

### Features

* add tsup to build nextjs and swr packages ([#993](https://github.com/wundergraph/wundergraph/issues/993)) ([2685e03](https://github.com/wundergraph/wundergraph/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@Pagebakers)

## [0.14.33](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.32...@virgograph/swr@0.14.33) (2023-05-16)

**Note:** Version bump only for package @virgograph/swr

## [0.14.32](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.31...@virgograph/swr@0.14.32) (2023-05-15)

**Note:** Version bump only for package @virgograph/swr

## [0.14.31](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.30...@virgograph/swr@0.14.31) (2023-05-12)

**Note:** Version bump only for package @virgograph/swr

## [0.14.30](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.29...@virgograph/swr@0.14.30) (2023-05-12)

**Note:** Version bump only for package @virgograph/swr

## [0.14.29](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.28...@virgograph/swr@0.14.29) (2023-05-09)

**Note:** Version bump only for package @virgograph/swr

## [0.14.28](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.27...@virgograph/swr@0.14.28) (2023-05-09)

**Note:** Version bump only for package @virgograph/swr

## [0.14.27](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.26...@virgograph/swr@0.14.27) (2023-05-08)

**Note:** Version bump only for package @virgograph/swr

## [0.14.26](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.25...@virgograph/swr@0.14.26) (2023-05-05)

**Note:** Version bump only for package @virgograph/swr

## [0.14.25](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.24...@virgograph/swr@0.14.25) (2023-05-04)

**Note:** Version bump only for package @virgograph/swr

## [0.14.24](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.23...@virgograph/swr@0.14.24) (2023-05-03)

**Note:** Version bump only for package @virgograph/swr

## [0.14.23](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.22...@virgograph/swr@0.14.23) (2023-05-03)

**Note:** Version bump only for package @virgograph/swr

## [0.14.22](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.21...@virgograph/swr@0.14.22) (2023-04-27)

**Note:** Version bump only for package @virgograph/swr

## [0.14.21](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.20...@virgograph/swr@0.14.21) (2023-04-27)

**Note:** Version bump only for package @virgograph/swr

## [0.14.20](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.19...@virgograph/swr@0.14.20) (2023-04-27)

**Note:** Version bump only for package @virgograph/swr

## [0.14.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.18...@virgograph/swr@0.14.19) (2023-04-26)

**Note:** Version bump only for package @virgograph/swr

## [0.14.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.17...@virgograph/swr@0.14.18) (2023-04-26)

**Note:** Version bump only for package @virgograph/swr

## [0.14.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.16...@virgograph/swr@0.14.17) (2023-04-25)

**Note:** Version bump only for package @virgograph/swr

## [0.14.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.15...@virgograph/swr@0.14.16) (2023-04-24)

**Note:** Version bump only for package @virgograph/swr

## [0.14.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.14...@virgograph/swr@0.14.15) (2023-04-20)

**Note:** Version bump only for package @virgograph/swr

## [0.14.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.13...@virgograph/swr@0.14.14) (2023-04-19)

**Note:** Version bump only for package @virgograph/swr

## [0.14.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.12...@virgograph/swr@0.14.13) (2023-04-19)

**Note:** Version bump only for package @virgograph/swr

## [0.14.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.11...@virgograph/swr@0.14.12) (2023-04-19)

**Note:** Version bump only for package @virgograph/swr

## [0.14.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.10...@virgograph/swr@0.14.11) (2023-04-17)

**Note:** Version bump only for package @virgograph/swr

## [0.14.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.9...@virgograph/swr@0.14.10) (2023-04-15)

**Note:** Version bump only for package @virgograph/swr

## [0.14.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.8...@virgograph/swr@0.14.9) (2023-04-14)

**Note:** Version bump only for package @virgograph/swr

## [0.14.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.7...@virgograph/swr@0.14.8) (2023-04-14)

**Note:** Version bump only for package @virgograph/swr

## [0.14.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.6...@virgograph/swr@0.14.7) (2023-04-13)

**Note:** Version bump only for package @virgograph/swr

## [0.14.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.5...@virgograph/swr@0.14.6) (2023-04-12)

**Note:** Version bump only for package @virgograph/swr

## [0.14.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.4...@virgograph/swr@0.14.5) (2023-04-12)

**Note:** Version bump only for package @virgograph/swr

## [0.14.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.3...@virgograph/swr@0.14.4) (2023-04-04)

**Note:** Version bump only for package @virgograph/swr

## [0.14.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.2...@virgograph/swr@0.14.3) (2023-03-31)

**Note:** Version bump only for package @virgograph/swr

## [0.14.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.1...@virgograph/swr@0.14.2) (2023-03-30)

**Note:** Version bump only for package @virgograph/swr

## [0.14.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.14.0...@virgograph/swr@0.14.1) (2023-03-29)

**Note:** Version bump only for package @virgograph/swr

## [0.14.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.8...@virgograph/swr@0.14.0) (2023-03-28)

### Features

* custom error support for typescript operations ([#759](https://github.com/wundergraph/wundergraph/issues/759)) ([7cfa815](https://github.com/wundergraph/wundergraph/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@StarpTech)

## [0.13.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.7...@virgograph/swr@0.13.8) (2023-03-27)

**Note:** Version bump only for package @virgograph/swr

## [0.13.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.6...@virgograph/swr@0.13.7) (2023-03-23)

**Note:** Version bump only for package @virgograph/swr

## [0.13.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.5...@virgograph/swr@0.13.6) (2023-03-16)

**Note:** Version bump only for package @virgograph/swr

## [0.13.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.4...@virgograph/swr@0.13.5) (2023-03-06)

### Bug Fixes

* upload types ([#723](https://github.com/wundergraph/wundergraph/issues/723)) ([5077a7d](https://github.com/wundergraph/wundergraph/commit/5077a7d2ab363d3bbbb1df35423e5ad799b1800f)) (@Pagebakers)

## [0.13.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.3...@virgograph/swr@0.13.4) (2023-03-01)

**Note:** Version bump only for package @virgograph/swr

## [0.13.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.2...@virgograph/swr@0.13.3) (2023-03-01)

**Note:** Version bump only for package @virgograph/swr

## [0.13.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.1...@virgograph/swr@0.13.2) (2023-02-28)

**Note:** Version bump only for package @virgograph/swr

## [0.13.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.13.0...@virgograph/swr@0.13.1) (2023-02-26)

**Note:** Version bump only for package @virgograph/swr

## [0.13.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.12.6...@virgograph/swr@0.13.0) (2023-02-23)

### Features

* add json patch support, response zod schema for ts operations ([#689](https://github.com/wundergraph/wundergraph/issues/689)) ([02f40dc](https://github.com/wundergraph/wundergraph/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@jensneuse)

## [0.12.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.12.5...@virgograph/swr@0.12.6) (2023-02-21)

**Note:** Version bump only for package @virgograph/swr

## [0.12.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.12.4...@virgograph/swr@0.12.5) (2023-02-10)

**Note:** Version bump only for package @virgograph/swr

## [0.12.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.12.3...@virgograph/swr@0.12.4) (2023-02-03)

**Note:** Version bump only for package @virgograph/swr

## [0.12.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.12.2...@virgograph/swr@0.12.3) (2023-02-01)

**Note:** Version bump only for package @virgograph/swr

## [0.12.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.12.1...@virgograph/swr@0.12.2) (2023-01-30)

**Note:** Version bump only for package @virgograph/swr

## [0.12.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.12.0...@virgograph/swr@0.12.1) (2023-01-23)

**Note:** Version bump only for package @virgograph/swr

## [0.12.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.11.1...@virgograph/swr@0.12.0) (2023-01-20)

### Features

* add upload profiles for S3 providers ([#476](https://github.com/wundergraph/wundergraph/issues/476)) ([6144545](https://github.com/wundergraph/wundergraph/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@fiam)

## [0.11.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.11.0...@virgograph/swr@0.11.1) (2023-01-20)

**Note:** Version bump only for package @virgograph/swr

## [0.11.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.10.0...@virgograph/swr@0.11.0) (2023-01-19)

### Features

* fix infinite loop when callbacks are not memoized ([#555](https://github.com/wundergraph/wundergraph/issues/555)) ([f9ed75f](https://github.com/wundergraph/wundergraph/commit/f9ed75fef9323c8cf49557e8c8017ddba2f41886)) (@Pagebakers)

## [0.10.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.7...@virgograph/swr@0.10.0) (2023-01-17)

### Features

* make input required if there are required variables ([#551](https://github.com/wundergraph/wundergraph/issues/551)) ([00256bf](https://github.com/wundergraph/wundergraph/commit/00256bf456f0c733beb45a5cdbc258f84631975e)) (@Pagebakers)

### Bug Fixes

* prevent swallowing of input validation errors ([#529](https://github.com/wundergraph/wundergraph/issues/529)) ([39ea3fc](https://github.com/wundergraph/wundergraph/commit/39ea3fc3fbf96916f1165228194b8c915882b133)) (@Aenimus)

## [0.9.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.6...@virgograph/swr@0.9.7) (2022-12-31)

**Note:** Version bump only for package @virgograph/swr

## [0.9.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.5...@virgograph/swr@0.9.6) (2022-12-31)

**Note:** Version bump only for package @virgograph/swr

## [0.9.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.4...@virgograph/swr@0.9.5) (2022-12-29)

**Note:** Version bump only for package @virgograph/swr

## [0.9.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.3...@virgograph/swr@0.9.4) (2022-12-28)

**Note:** Version bump only for package @virgograph/swr

## [0.9.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.2...@virgograph/swr@0.9.3) (2022-12-21)

**Note:** Version bump only for package @virgograph/swr

## [0.9.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.1...@virgograph/swr@0.9.2) (2022-12-20)

**Note:** Version bump only for package @virgograph/swr

## [0.9.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.9.0...@virgograph/swr@0.9.1) (2022-12-15)

**Note:** Version bump only for package @virgograph/swr

## [0.9.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.8.1...@virgograph/swr@0.9.0) (2022-12-14)

### Features

* update SWR to v2 🥳 ([#446](https://github.com/wundergraph/wundergraph/issues/446)) ([8af6b99](https://github.com/wundergraph/wundergraph/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@Pagebakers)

## [0.8.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.8.0...@virgograph/swr@0.8.1) (2022-12-08)

**Note:** Version bump only for package @virgograph/swr

## [0.8.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.7.2...@virgograph/swr@0.8.0) (2022-12-06)

### Features

* react query client ([#340](https://github.com/wundergraph/wundergraph/issues/340)) ([c5769a4](https://github.com/wundergraph/wundergraph/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@Pagebakers)

## [0.7.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.7.0...@virgograph/swr@0.7.2) (2022-11-20)

**Note:** Version bump only for package @virgograph/swr

## [0.7.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.7.0...@virgograph/swr@0.7.1) (2022-11-20)

**Note:** Version bump only for package @virgograph/swr

## [0.7.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.6.0...@virgograph/swr@0.7.0) (2022-11-18)

### Features

* remove app/main from URL structure ([#335](https://github.com/wundergraph/wundergraph/issues/335)) ([e49e585](https://github.com/wundergraph/wundergraph/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/wundergraph/wundergraph/issues/333) (@fiam)

## [0.6.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.5.0...@virgograph/swr@0.6.0) (2022-11-17)

### Features

* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/wundergraph/wundergraph/issues/319)) ([020cd74](https://github.com/wundergraph/wundergraph/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@Pagebakers)

## [0.5.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.9...@virgograph/swr@0.5.0) (2022-11-11)

### Features

* improved SWR hooks api, useMutation result no longer cached and updated to SWR 2.0 ([#305](https://github.com/wundergraph/wundergraph/issues/305)) ([fc4848b](https://github.com/wundergraph/wundergraph/commit/fc4848b3f15b447a487b31bd3d152f134c6f3aeb)) (@Pagebakers)

## [0.4.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.8...@virgograph/swr@0.4.9) (2022-11-08)

**Note:** Version bump only for package @virgograph/swr

## [0.4.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.7...@virgograph/swr@0.4.8) (2022-11-04)

**Note:** Version bump only for package @virgograph/swr

## [0.4.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.6...@virgograph/swr@0.4.7) (2022-11-03)

**Note:** Version bump only for package @virgograph/swr

## [0.4.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.5...@virgograph/swr@0.4.6) (2022-11-03)

**Note:** Version bump only for package @virgograph/swr

## [0.4.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.4...@virgograph/swr@0.4.5) (2022-11-03)

**Note:** Version bump only for package @virgograph/swr

## [0.4.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.3...@virgograph/swr@0.4.4) (2022-11-03)

**Note:** Version bump only for package @virgograph/swr

## [0.4.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.2...@virgograph/swr@0.4.3) (2022-10-23)

**Note:** Version bump only for package @virgograph/swr

## [0.4.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.1...@virgograph/swr@0.4.2) (2022-10-20)

**Note:** Version bump only for package @virgograph/swr

## [0.4.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.4.0...@virgograph/swr@0.4.1) (2022-10-18)

**Note:** Version bump only for package @virgograph/swr

## [0.4.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.10...@virgograph/swr@0.4.0) (2022-10-18)

### Features

* re-export SWR to prevent context issues ([#264](https://github.com/wundergraph/wundergraph/issues/264)) ([c05b341](https://github.com/wundergraph/wundergraph/commit/c05b341f64123d828caec4c95560163ce868ccd4)) (@Pagebakers)

## [0.3.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.9...@virgograph/swr@0.3.10) (2022-10-12)

**Note:** Version bump only for package @virgograph/swr

## [0.3.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.8...@virgograph/swr@0.3.9) (2022-10-10)

**Note:** Version bump only for package @virgograph/swr

## [0.3.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.7...@virgograph/swr@0.3.8) (2022-10-07)

**Note:** Version bump only for package @virgograph/swr

## [0.3.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.6...@virgograph/swr@0.3.7) (2022-10-07)

**Note:** Version bump only for package @virgograph/swr

## [0.3.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.5...@virgograph/swr@0.3.6) (2022-10-04)

**Note:** Version bump only for package @virgograph/swr

## [0.3.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.4...@virgograph/swr@0.3.5) (2022-09-30)

**Note:** Version bump only for package @virgograph/swr

## [0.3.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.3...@virgograph/swr@0.3.4) (2022-09-29)

**Note:** Version bump only for package @virgograph/swr

## [0.3.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.2...@virgograph/swr@0.3.3) (2022-09-29)

**Note:** Version bump only for package @virgograph/swr

## [0.3.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.1...@virgograph/swr@0.3.2) (2022-09-26)

**Note:** Version bump only for package @virgograph/swr

## [0.3.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.3.0...@virgograph/swr@0.3.1) (2022-09-22)

**Note:** Version bump only for package @virgograph/swr

## [0.3.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.2.2...@virgograph/swr@0.3.0) (2022-09-21)

### Features

* add auth example for swr ([#200](https://github.com/wundergraph/wundergraph/issues/200)) ([7a5f34e](https://github.com/wundergraph/wundergraph/commit/7a5f34e8c80141f400a9b6ed195d04a22a86c92b)) (@StarpTech)

## [0.2.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.2.1...@virgograph/swr@0.2.2) (2022-09-21)

**Note:** Version bump only for package @virgograph/swr

## [0.2.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.2.0...@virgograph/swr@0.2.1) (2022-09-20)

### Bug Fixes

* **swr:** reset user cache after logout ([#197](https://github.com/wundergraph/wundergraph/issues/197)) ([48fdaa1](https://github.com/wundergraph/wundergraph/commit/48fdaa1966bf26519026bcfc59e5fc07cf6a9887)) (@StarpTech)

## [0.2.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.1.1...@virgograph/swr@0.2.0) (2022-09-20)

### Features

* add swr hooks for auth and file upload ([#195](https://github.com/wundergraph/wundergraph/issues/195)) ([a0b1bae](https://github.com/wundergraph/wundergraph/commit/a0b1bae6a18e30fcefc35bdde2f72326f3de1392)) (@StarpTech)

## [0.1.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/swr@0.1.0...@virgograph/swr@0.1.1) (2022-09-19)

**Note:** Version bump only for package @virgograph/swr

## 0.1.0 (2022-09-19)

### Features

* make typescript client typesafe ([#179](https://github.com/wundergraph/wundergraph/issues/179)) ([942b278](https://github.com/wundergraph/wundergraph/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/wundergraph/wundergraph/issues/188) (@Pagebakers)
