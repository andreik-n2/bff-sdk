# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.11.0 (2025-04-08)

### Features

* add golang client ([#170](https://github.com/andreik-n2/bff-sdk/issues/170)) ([a26bc32](https://github.com/andreik-n2/bff-sdk/commit/a26bc32d4a178134f893012ca4e2648460b4e7f8)) (@jensneuse)
* add graphql enums to generated typescript model ([#1015](https://github.com/andreik-n2/bff-sdk/issues/1015)) ([845f036](https://github.com/andreik-n2/bff-sdk/commit/845f03608d13bc86e19c21769cb67a157232c3bf)) (@thisisnithin)
* add rust client ([#1266](https://github.com/andreik-n2/bff-sdk/issues/1266)) ([569a752](https://github.com/andreik-n2/bff-sdk/commit/569a7528fd68213e1b87feafa0d3e5ba40acb982)) (@fiam)
* align logging format hooks server and ([#240](https://github.com/andreik-n2/bff-sdk/issues/240)) ([e601d4c](https://github.com/andreik-n2/bff-sdk/commit/e601d4c1597a949c2c564a5b953b4424dae5ee7c)) (@)
* custom error support for typescript operations ([#759](https://github.com/andreik-n2/bff-sdk/issues/759)) ([7cfa815](https://github.com/andreik-n2/bff-sdk/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@StarpTech)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@Pagebakers)
* provide a default baseURL in the Go client ([#680](https://github.com/andreik-n2/bff-sdk/issues/680)) ([0ac7144](https://github.com/andreik-n2/bff-sdk/commit/0ac7144b8c2b71d2489ea82be506c66bd9dcfdd4)) (@fiam)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)

### Bug Fixes

* avoid feeding paths into applicationHash calculation ([#636](https://github.com/andreik-n2/bff-sdk/issues/636)) ([8542cf6](https://github.com/andreik-n2/bff-sdk/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@fiam)
* dont use workspace protocol in peer deps ([8e340b9](https://github.com/andreik-n2/bff-sdk/commit/8e340b915c5e5b692e047e796e1bc277c1442eb7)) (@StarpTech)
* incorrect go code generated from JSON models ([#249](https://github.com/andreik-n2/bff-sdk/issues/249)) ([0c17fce](https://github.com/andreik-n2/bff-sdk/commit/0c17fce4e7c0c8d431438bb43acd9011dc50a750)) (@fiam)
* move codegen template helpers out of internal ([#1136](https://github.com/andreik-n2/bff-sdk/issues/1136)) ([3fd393f](https://github.com/andreik-n2/bff-sdk/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@Pagebakers)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/andreik-n2/bff-sdk/issues/1294)) ([7a88489](https://github.com/andreik-n2/bff-sdk/commit/7a884893f2e6055200275aa58957b089a8707798)) (@fiam)

## 0.10.0 (2025-04-08)

### Features

* add golang client ([#170](https://github.com/andreik-n2/bff-sdk/issues/170)) ([a26bc32](https://github.com/andreik-n2/bff-sdk/commit/a26bc32d4a178134f893012ca4e2648460b4e7f8)) (@)
* add graphql enums to generated typescript model ([#1015](https://github.com/andreik-n2/bff-sdk/issues/1015)) ([845f036](https://github.com/andreik-n2/bff-sdk/commit/845f03608d13bc86e19c21769cb67a157232c3bf)) (@)
* add rust client ([#1266](https://github.com/andreik-n2/bff-sdk/issues/1266)) ([569a752](https://github.com/andreik-n2/bff-sdk/commit/569a7528fd68213e1b87feafa0d3e5ba40acb982)) (@)
* align logging format hooks server and ([#240](https://github.com/andreik-n2/bff-sdk/issues/240)) ([e601d4c](https://github.com/andreik-n2/bff-sdk/commit/e601d4c1597a949c2c564a5b953b4424dae5ee7c)) (@)
* custom error support for typescript operations ([#759](https://github.com/andreik-n2/bff-sdk/issues/759)) ([7cfa815](https://github.com/andreik-n2/bff-sdk/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@)
* provide a default baseURL in the Go client ([#680](https://github.com/andreik-n2/bff-sdk/issues/680)) ([0ac7144](https://github.com/andreik-n2/bff-sdk/commit/0ac7144b8c2b71d2489ea82be506c66bd9dcfdd4)) (@)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)

### Bug Fixes

* avoid feeding paths into applicationHash calculation ([#636](https://github.com/andreik-n2/bff-sdk/issues/636)) ([8542cf6](https://github.com/andreik-n2/bff-sdk/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@)
* dont use workspace protocol in peer deps ([8e340b9](https://github.com/andreik-n2/bff-sdk/commit/8e340b915c5e5b692e047e796e1bc277c1442eb7)) (@)
* incorrect go code generated from JSON models ([#249](https://github.com/andreik-n2/bff-sdk/issues/249)) ([0c17fce](https://github.com/andreik-n2/bff-sdk/commit/0c17fce4e7c0c8d431438bb43acd9011dc50a750)) (@)
* move codegen template helpers out of internal ([#1136](https://github.com/andreik-n2/bff-sdk/issues/1136)) ([3fd393f](https://github.com/andreik-n2/bff-sdk/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/andreik-n2/bff-sdk/issues/1294)) ([7a88489](https://github.com/andreik-n2/bff-sdk/commit/7a884893f2e6055200275aa58957b089a8707798)) (@)

## 0.9.0 (2025-04-07)

### Features

* add golang client ([#170](https://github.com/andreik-n2/bff-sdk/issues/170)) ([a26bc32](https://github.com/andreik-n2/bff-sdk/commit/a26bc32d4a178134f893012ca4e2648460b4e7f8)) (@)
* add graphql enums to generated typescript model ([#1015](https://github.com/andreik-n2/bff-sdk/issues/1015)) ([845f036](https://github.com/andreik-n2/bff-sdk/commit/845f03608d13bc86e19c21769cb67a157232c3bf)) (@)
* add rust client ([#1266](https://github.com/andreik-n2/bff-sdk/issues/1266)) ([569a752](https://github.com/andreik-n2/bff-sdk/commit/569a7528fd68213e1b87feafa0d3e5ba40acb982)) (@)
* align logging format hooks server and ([#240](https://github.com/andreik-n2/bff-sdk/issues/240)) ([e601d4c](https://github.com/andreik-n2/bff-sdk/commit/e601d4c1597a949c2c564a5b953b4424dae5ee7c)) (@)
* custom error support for typescript operations ([#759](https://github.com/andreik-n2/bff-sdk/issues/759)) ([7cfa815](https://github.com/andreik-n2/bff-sdk/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@)
* provide a default baseURL in the Go client ([#680](https://github.com/andreik-n2/bff-sdk/issues/680)) ([0ac7144](https://github.com/andreik-n2/bff-sdk/commit/0ac7144b8c2b71d2489ea82be506c66bd9dcfdd4)) (@)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)

### Bug Fixes

* avoid feeding paths into applicationHash calculation ([#636](https://github.com/andreik-n2/bff-sdk/issues/636)) ([8542cf6](https://github.com/andreik-n2/bff-sdk/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@)
* dont use workspace protocol in peer deps ([8e340b9](https://github.com/andreik-n2/bff-sdk/commit/8e340b915c5e5b692e047e796e1bc277c1442eb7)) (@)
* incorrect go code generated from JSON models ([#249](https://github.com/andreik-n2/bff-sdk/issues/249)) ([0c17fce](https://github.com/andreik-n2/bff-sdk/commit/0c17fce4e7c0c8d431438bb43acd9011dc50a750)) (@)
* move codegen template helpers out of internal ([#1136](https://github.com/andreik-n2/bff-sdk/issues/1136)) ([3fd393f](https://github.com/andreik-n2/bff-sdk/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/andreik-n2/bff-sdk/issues/1294)) ([7a88489](https://github.com/andreik-n2/bff-sdk/commit/7a884893f2e6055200275aa58957b089a8707798)) (@)

## [0.8.20](https://github.com/andreik-n2/bff-sdk/compare/@virgograph/golang-client@0.8.19...@virgograph/golang-client@0.8.20) (2025-04-07)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.18...@virgograph/golang-client@0.8.19) (2024-05-15)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.17...@virgograph/golang-client@0.8.18) (2024-04-19)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.16...@virgograph/golang-client@0.8.17) (2024-03-08)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.15...@virgograph/golang-client@0.8.16) (2024-02-28)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.14...@virgograph/golang-client@0.8.15) (2024-01-12)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.13...@virgograph/golang-client@0.8.14) (2024-01-05)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.12...@virgograph/golang-client@0.8.13) (2023-12-13)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.11...@virgograph/golang-client@0.8.12) (2023-12-07)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.10...@virgograph/golang-client@0.8.11) (2023-12-01)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.9...@virgograph/golang-client@0.8.10) (2023-11-24)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.8...@virgograph/golang-client@0.8.9) (2023-11-06)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.7...@virgograph/golang-client@0.8.8) (2023-10-30)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.6...@virgograph/golang-client@0.8.7) (2023-10-26)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.5...@virgograph/golang-client@0.8.6) (2023-10-25)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.4...@virgograph/golang-client@0.8.5) (2023-10-18)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.3...@virgograph/golang-client@0.8.4) (2023-10-12)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.2...@virgograph/golang-client@0.8.3) (2023-10-10)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.1...@virgograph/golang-client@0.8.2) (2023-10-04)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/wundergraph/wundergraph/issues/1294)) ([7a88489](https://github.com/wundergraph/wundergraph/commit/7a884893f2e6055200275aa58957b089a8707798)) (@fiam)

## [0.8.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.8.0...@virgograph/golang-client@0.8.1) (2023-09-22)

**Note:** Version bump only for package @virgograph/golang-client

## [0.8.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.13...@virgograph/golang-client@0.8.0) (2023-09-15)

### Features

* add rust client ([#1266](https://github.com/wundergraph/wundergraph/issues/1266)) ([569a752](https://github.com/wundergraph/wundergraph/commit/569a7528fd68213e1b87feafa0d3e5ba40acb982)) (@fiam)

## [0.7.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.12...@virgograph/golang-client@0.7.13) (2023-09-05)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.11...@virgograph/golang-client@0.7.12) (2023-09-01)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.10...@virgograph/golang-client@0.7.11) (2023-08-24)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.9...@virgograph/golang-client@0.7.10) (2023-08-21)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.8...@virgograph/golang-client@0.7.9) (2023-08-17)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.7...@virgograph/golang-client@0.7.8) (2023-08-14)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.6...@virgograph/golang-client@0.7.7) (2023-08-13)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.5...@virgograph/golang-client@0.7.6) (2023-08-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.4...@virgograph/golang-client@0.7.5) (2023-08-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.3...@virgograph/golang-client@0.7.4) (2023-08-02)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.2...@virgograph/golang-client@0.7.3) (2023-08-01)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.1...@virgograph/golang-client@0.7.2) (2023-07-28)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.7.0...@virgograph/golang-client@0.7.1) (2023-07-24)

**Note:** Version bump only for package @virgograph/golang-client

## [0.7.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.14...@virgograph/golang-client@0.7.0) (2023-07-24)

### Features

* upgrade to typescript 5 ([#1135](https://github.com/wundergraph/wundergraph/issues/1135)) ([74cee5d](https://github.com/wundergraph/wundergraph/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)

### Bug Fixes

* move codegen template helpers out of internal ([#1136](https://github.com/wundergraph/wundergraph/issues/1136)) ([3fd393f](https://github.com/wundergraph/wundergraph/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@Pagebakers)

## [0.6.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.13...@virgograph/golang-client@0.6.14) (2023-07-14)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.12...@virgograph/golang-client@0.6.13) (2023-07-13)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.11...@virgograph/golang-client@0.6.12) (2023-07-06)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.10...@virgograph/golang-client@0.6.11) (2023-07-05)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.9...@virgograph/golang-client@0.6.10) (2023-06-22)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.8...@virgograph/golang-client@0.6.9) (2023-06-21)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.7...@virgograph/golang-client@0.6.8) (2023-06-09)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.6...@virgograph/golang-client@0.6.7) (2023-06-06)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.5...@virgograph/golang-client@0.6.6) (2023-06-05)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.4...@virgograph/golang-client@0.6.5) (2023-06-04)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.3...@virgograph/golang-client@0.6.4) (2023-06-02)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.2...@virgograph/golang-client@0.6.3) (2023-06-02)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.1...@virgograph/golang-client@0.6.2) (2023-06-01)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.6.0...@virgograph/golang-client@0.6.1) (2023-05-31)

**Note:** Version bump only for package @virgograph/golang-client

## [0.6.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.35...@virgograph/golang-client@0.6.0) (2023-05-31)

### Features

* add graphql enums to generated typescript model ([#1015](https://github.com/wundergraph/wundergraph/issues/1015)) ([845f036](https://github.com/wundergraph/wundergraph/commit/845f03608d13bc86e19c21769cb67a157232c3bf)) (@thisisnithin)

## [0.5.35](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.34...@virgograph/golang-client@0.5.35) (2023-05-26)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.34](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.33...@virgograph/golang-client@0.5.34) (2023-05-25)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.33](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.32...@virgograph/golang-client@0.5.33) (2023-05-16)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.32](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.31...@virgograph/golang-client@0.5.32) (2023-05-15)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.31](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.30...@virgograph/golang-client@0.5.31) (2023-05-12)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.30](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.29...@virgograph/golang-client@0.5.30) (2023-05-12)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.29](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.28...@virgograph/golang-client@0.5.29) (2023-05-09)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.28](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.27...@virgograph/golang-client@0.5.28) (2023-05-09)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.27](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.26...@virgograph/golang-client@0.5.27) (2023-05-08)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.26](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.25...@virgograph/golang-client@0.5.26) (2023-05-05)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.25](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.24...@virgograph/golang-client@0.5.25) (2023-05-04)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.24](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.23...@virgograph/golang-client@0.5.24) (2023-05-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.23](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.22...@virgograph/golang-client@0.5.23) (2023-05-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.22](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.21...@virgograph/golang-client@0.5.22) (2023-04-27)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.21](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.20...@virgograph/golang-client@0.5.21) (2023-04-27)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.20](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.19...@virgograph/golang-client@0.5.20) (2023-04-27)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.18...@virgograph/golang-client@0.5.19) (2023-04-26)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.17...@virgograph/golang-client@0.5.18) (2023-04-26)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.16...@virgograph/golang-client@0.5.17) (2023-04-25)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.15...@virgograph/golang-client@0.5.16) (2023-04-24)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.14...@virgograph/golang-client@0.5.15) (2023-04-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.13...@virgograph/golang-client@0.5.14) (2023-04-19)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.12...@virgograph/golang-client@0.5.13) (2023-04-19)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.11...@virgograph/golang-client@0.5.12) (2023-04-19)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.10...@virgograph/golang-client@0.5.11) (2023-04-17)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.9...@virgograph/golang-client@0.5.10) (2023-04-15)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.8...@virgograph/golang-client@0.5.9) (2023-04-14)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.7...@virgograph/golang-client@0.5.8) (2023-04-14)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.6...@virgograph/golang-client@0.5.7) (2023-04-13)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.5...@virgograph/golang-client@0.5.6) (2023-04-12)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.4...@virgograph/golang-client@0.5.5) (2023-04-12)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.3...@virgograph/golang-client@0.5.4) (2023-04-04)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.2...@virgograph/golang-client@0.5.3) (2023-03-31)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.1...@virgograph/golang-client@0.5.2) (2023-03-30)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.5.0...@virgograph/golang-client@0.5.1) (2023-03-29)

**Note:** Version bump only for package @virgograph/golang-client

## [0.5.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.9...@virgograph/golang-client@0.5.0) (2023-03-28)

### Features

* custom error support for typescript operations ([#759](https://github.com/wundergraph/wundergraph/issues/759)) ([7cfa815](https://github.com/wundergraph/wundergraph/commit/7cfa815a44b0b2a1184c2c50d0c4ea7cbb8066a7)) (@StarpTech)

## [0.4.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.8...@virgograph/golang-client@0.4.9) (2023-03-27)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.7...@virgograph/golang-client@0.4.8) (2023-03-23)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.6...@virgograph/golang-client@0.4.7) (2023-03-16)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.5...@virgograph/golang-client@0.4.6) (2023-03-06)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.4...@virgograph/golang-client@0.4.5) (2023-03-01)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.3...@virgograph/golang-client@0.4.4) (2023-03-01)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.2...@virgograph/golang-client@0.4.3) (2023-02-28)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.1...@virgograph/golang-client@0.4.2) (2023-02-26)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.4.0...@virgograph/golang-client@0.4.1) (2023-02-23)

**Note:** Version bump only for package @virgograph/golang-client

## [0.4.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.33...@virgograph/golang-client@0.4.0) (2023-02-21)

### Features

* provide a default baseURL in the Go client ([#680](https://github.com/wundergraph/wundergraph/issues/680)) ([0ac7144](https://github.com/wundergraph/wundergraph/commit/0ac7144b8c2b71d2489ea82be506c66bd9dcfdd4)) (@fiam)

## [0.3.33](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.32...@virgograph/golang-client@0.3.33) (2023-02-10)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.32](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.31...@virgograph/golang-client@0.3.32) (2023-02-03)

### Bug Fixes

* avoid feeding paths into applicationHash calculation ([#636](https://github.com/wundergraph/wundergraph/issues/636)) ([8542cf6](https://github.com/wundergraph/wundergraph/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@fiam)

## [0.3.31](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.30...@virgograph/golang-client@0.3.31) (2023-02-01)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.30](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.29...@virgograph/golang-client@0.3.30) (2023-01-30)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.29](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.28...@virgograph/golang-client@0.3.29) (2023-01-23)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.28](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.27...@virgograph/golang-client@0.3.28) (2023-01-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.27](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.26...@virgograph/golang-client@0.3.27) (2023-01-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.26](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.25...@virgograph/golang-client@0.3.26) (2023-01-19)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.25](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.24...@virgograph/golang-client@0.3.25) (2023-01-17)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.24](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.23...@virgograph/golang-client@0.3.24) (2022-12-31)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.23](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.22...@virgograph/golang-client@0.3.23) (2022-12-31)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.22](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.21...@virgograph/golang-client@0.3.22) (2022-12-29)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.21](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.20...@virgograph/golang-client@0.3.21) (2022-12-28)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.20](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.19...@virgograph/golang-client@0.3.20) (2022-12-21)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.18...@virgograph/golang-client@0.3.19) (2022-12-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.17...@virgograph/golang-client@0.3.18) (2022-12-15)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.16...@virgograph/golang-client@0.3.17) (2022-12-14)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.15...@virgograph/golang-client@0.3.16) (2022-12-08)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.14...@virgograph/golang-client@0.3.15) (2022-12-06)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.12...@virgograph/golang-client@0.3.14) (2022-11-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.12...@virgograph/golang-client@0.3.13) (2022-11-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.11...@virgograph/golang-client@0.3.12) (2022-11-18)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.10...@virgograph/golang-client@0.3.11) (2022-11-17)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.9...@virgograph/golang-client@0.3.10) (2022-11-11)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.8...@virgograph/golang-client@0.3.9) (2022-11-08)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.7...@virgograph/golang-client@0.3.8) (2022-11-04)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.6...@virgograph/golang-client@0.3.7) (2022-11-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.5...@virgograph/golang-client@0.3.6) (2022-11-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.4...@virgograph/golang-client@0.3.5) (2022-11-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.3...@virgograph/golang-client@0.3.4) (2022-11-03)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.2...@virgograph/golang-client@0.3.3) (2022-10-23)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.1...@virgograph/golang-client@0.3.2) (2022-10-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.3.0...@virgograph/golang-client@0.3.1) (2022-10-18)

**Note:** Version bump only for package @virgograph/golang-client

## [0.3.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.13...@virgograph/golang-client@0.3.0) (2022-10-18)

### Features

* align logging format hooks server and ([#240](https://github.com/wundergraph/wundergraph/issues/240)) ([e601d4c](https://github.com/wundergraph/wundergraph/commit/e601d4c1597a949c2c564a5b953b4424dae5ee7c)) (@spetrunin)

## [0.2.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.12...@virgograph/golang-client@0.2.13) (2022-10-12)

### Bug Fixes

* incorrect go code generated from JSON models ([#249](https://github.com/wundergraph/wundergraph/issues/249)) ([0c17fce](https://github.com/wundergraph/wundergraph/commit/0c17fce4e7c0c8d431438bb43acd9011dc50a750)) (@fiam)

## [0.2.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.11...@virgograph/golang-client@0.2.12) (2022-10-10)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.10...@virgograph/golang-client@0.2.11) (2022-10-07)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.9...@virgograph/golang-client@0.2.10) (2022-10-07)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.8...@virgograph/golang-client@0.2.9) (2022-10-04)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.7...@virgograph/golang-client@0.2.8) (2022-09-30)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.6...@virgograph/golang-client@0.2.7) (2022-09-29)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.5...@virgograph/golang-client@0.2.6) (2022-09-29)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.4...@virgograph/golang-client@0.2.5) (2022-09-26)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.3...@virgograph/golang-client@0.2.4) (2022-09-22)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.2...@virgograph/golang-client@0.2.3) (2022-09-21)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.1...@virgograph/golang-client@0.2.2) (2022-09-21)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.2.0...@virgograph/golang-client@0.2.1) (2022-09-20)

**Note:** Version bump only for package @virgograph/golang-client

## [0.2.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.1.5...@virgograph/golang-client@0.2.0) (2022-09-19)

### Features

* make typescript client typesafe ([#179](https://github.com/wundergraph/wundergraph/issues/179)) ([942b278](https://github.com/wundergraph/wundergraph/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/wundergraph/wundergraph/issues/188) (@Pagebakers)

## [0.1.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.1.4...@virgograph/golang-client@0.1.5) (2022-09-19)

**Note:** Version bump only for package @virgograph/golang-client

## [0.1.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.1.3...@virgograph/golang-client@0.1.4) (2022-09-15)

**Note:** Version bump only for package @virgograph/golang-client

## [0.1.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.1.2...@virgograph/golang-client@0.1.3) (2022-09-15)

**Note:** Version bump only for package @virgograph/golang-client

## [0.1.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.1.1...@virgograph/golang-client@0.1.2) (2022-09-14)

**Note:** Version bump only for package @virgograph/golang-client

## [0.1.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/golang-client@0.1.0...@virgograph/golang-client@0.1.1) (2022-09-09)

### Bug Fixes

* dont use workspace protocol in peer deps ([8e340b9](https://github.com/wundergraph/wundergraph/commit/8e340b915c5e5b692e047e796e1bc277c1442eb7)) (@StarpTech)

## 0.1.0 (2022-09-09)

### Features

* add golang client ([#170](https://github.com/wundergraph/wundergraph/issues/170)) ([a26bc32](https://github.com/wundergraph/wundergraph/commit/a26bc32d4a178134f893012ca4e2648460b4e7f8)) (@jensneuse)
