# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.18.0 (2025-04-08)

### Features

* add auth middleware hook to nextjs client ([#795](https://github.com/andreik-n2/bff-sdk/issues/795)) ([77f92e3](https://github.com/andreik-n2/bff-sdk/commit/77f92e328028f15b6eede6084dae9318dca1a008)) (@Pagebakers)
* add json patch support, response zod schema for ts operations ([#689](https://github.com/andreik-n2/bff-sdk/issues/689)) ([02f40dc](https://github.com/andreik-n2/bff-sdk/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@jensneuse)
* add tsup to build nextjs and swr packages ([#993](https://github.com/andreik-n2/bff-sdk/issues/993)) ([2685e03](https://github.com/andreik-n2/bff-sdk/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@Pagebakers)
* allow base url ([#13](https://github.com/andreik-n2/bff-sdk/issues/13)) ([901fc5f](https://github.com/andreik-n2/bff-sdk/commit/901fc5f75f73ceaa447eac76014b0e8f99ea0961)) (@StarpTech)
* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/andreik-n2/bff-sdk/issues/319)) ([020cd74](https://github.com/andreik-n2/bff-sdk/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@Pagebakers)
* extract typescript client from nextjs ([#72](https://github.com/andreik-n2/bff-sdk/issues/72)) ([282797d](https://github.com/andreik-n2/bff-sdk/commit/282797dd4d28dce922cca8a3d5092d68c508f5bd)) (@Pagebakers)
* implement all core integrations ([#1215](https://github.com/andreik-n2/bff-sdk/issues/1215)) ([9d191df](https://github.com/andreik-n2/bff-sdk/commit/9d191df094bd218cdf59dc9bdda7f48d5fafd9eb)) (@Pagebakers)
* implement config first approach ([#151](https://github.com/andreik-n2/bff-sdk/issues/151)) ([803da0e](https://github.com/andreik-n2/bff-sdk/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/andreik-n2/bff-sdk/issues/190) (@)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@Pagebakers)
* nextjs 14 support ([#1338](https://github.com/andreik-n2/bff-sdk/issues/1338)) ([a8cd3c6](https://github.com/andreik-n2/bff-sdk/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@Pagebakers)
* react query client ([#340](https://github.com/andreik-n2/bff-sdk/issues/340)) ([c5769a4](https://github.com/andreik-n2/bff-sdk/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@Pagebakers)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@fiam)
* update SWR to v2 🥳 ([#446](https://github.com/andreik-n2/bff-sdk/issues/446)) ([8af6b99](https://github.com/andreik-n2/bff-sdk/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@Pagebakers)
* updated SWR to 2.2.0 ([#1109](https://github.com/andreik-n2/bff-sdk/issues/1109)) ([09ef6ef](https://github.com/andreik-n2/bff-sdk/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@Pagebakers)
* upgrade to nextjs 13 ([#504](https://github.com/andreik-n2/bff-sdk/issues/504)) ([45bc431](https://github.com/andreik-n2/bff-sdk/commit/45bc431243cc61765c2712b03e89818a1bb3d14a)) (@Pagebakers)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)

### Bug Fixes

* add missing dependency to our nextjs package ([#432](https://github.com/andreik-n2/bff-sdk/issues/432)) ([d646d93](https://github.com/andreik-n2/bff-sdk/commit/d646d933bcc1a67301446fa44b4d27c934ab94da)) (@fiam)
* allow TS operations to override a requiredAuthentication with false ([#1151](https://github.com/andreik-n2/bff-sdk/issues/1151)) ([a6017cd](https://github.com/andreik-n2/bff-sdk/commit/a6017cd39f3c62ed0d658ac44495a0078be28691)) (@fiam)
* avoid feeding paths into applicationHash calculation ([#636](https://github.com/andreik-n2/bff-sdk/issues/636)) ([8542cf6](https://github.com/andreik-n2/bff-sdk/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@fiam)
* **codegen:** auth / s3 code generation ([75a3a61](https://github.com/andreik-n2/bff-sdk/commit/75a3a61916617d1d62460225c9d179ec7c8e4798)) (@StarpTech)
* don't (re-)fetch user server & client-side when authentication is disabled ([#56](https://github.com/andreik-n2/bff-sdk/issues/56)) ([2d4bc4a](https://github.com/andreik-n2/bff-sdk/commit/2d4bc4a7e1823652f047703435282f12ace5ce7e)) (@jensneuse)
* ensure all hooks are called for live queries ([#67](https://github.com/andreik-n2/bff-sdk/issues/67)) ([e58dea4](https://github.com/andreik-n2/bff-sdk/commit/e58dea4d12ff51ea1ef5c338ef9f105343b09694)) (@StarpTech)
* fixed issue where createWunderGraphNext would not return correct… ([#1307](https://github.com/andreik-n2/bff-sdk/issues/1307)) ([62f54b1](https://github.com/andreik-n2/bff-sdk/commit/62f54b1a7fbfe23dc944b1c4ea0ee5332071208f)) (@Pagebakers)
* generate all required templates ([#360](https://github.com/andreik-n2/bff-sdk/issues/360)) ([ce2f130](https://github.com/andreik-n2/bff-sdk/commit/ce2f130829dfc4e4c7e468fcdc364bc7adef00d2)) (@JivusAyrus)
* missing ts generator in nextjs package ([#1021](https://github.com/andreik-n2/bff-sdk/issues/1021)) ([06d6107](https://github.com/andreik-n2/bff-sdk/commit/06d610726d8096508dcd779913c7b1da9559c656)) (@thisisnithin)
* move codegen template helpers out of internal ([#1136](https://github.com/andreik-n2/bff-sdk/issues/1136)) ([3fd393f](https://github.com/andreik-n2/bff-sdk/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@Pagebakers)
* nextjs client fails hard when a page misses "withWunderGraph" ([#73](https://github.com/andreik-n2/bff-sdk/issues/73)) ([719ad5c](https://github.com/andreik-n2/bff-sdk/commit/719ad5ce9c3fe68dcf039528a0863fbf5adbdb38)) (@Pagebakers)
* nextjs ssr ([fa95e4d](https://github.com/andreik-n2/bff-sdk/commit/fa95e4ddfdcee1c537aface4e0f976250dee22af)) (@jensneuse)
* **nextjs:** ssr ([7242584](https://github.com/andreik-n2/bff-sdk/commit/72425845ef9d74f832c557875b0936442e64bd67)) (@jensneuse)
* remove conditional export, update typescript ([e1bb2ec](https://github.com/andreik-n2/bff-sdk/commit/e1bb2ecfff2e684c0caa370ea9aee021804e42c1)) (@StarpTech)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/andreik-n2/bff-sdk/issues/1294)) ([7a88489](https://github.com/andreik-n2/bff-sdk/commit/7a884893f2e6055200275aa58957b089a8707798)) (@fiam)

## 0.17.0 (2025-04-08)

### Features

* add auth middleware hook to nextjs client ([#795](https://github.com/andreik-n2/bff-sdk/issues/795)) ([77f92e3](https://github.com/andreik-n2/bff-sdk/commit/77f92e328028f15b6eede6084dae9318dca1a008)) (@)
* add json patch support, response zod schema for ts operations ([#689](https://github.com/andreik-n2/bff-sdk/issues/689)) ([02f40dc](https://github.com/andreik-n2/bff-sdk/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@)
* add tsup to build nextjs and swr packages ([#993](https://github.com/andreik-n2/bff-sdk/issues/993)) ([2685e03](https://github.com/andreik-n2/bff-sdk/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@)
* allow base url ([#13](https://github.com/andreik-n2/bff-sdk/issues/13)) ([901fc5f](https://github.com/andreik-n2/bff-sdk/commit/901fc5f75f73ceaa447eac76014b0e8f99ea0961)) (@)
* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/andreik-n2/bff-sdk/issues/319)) ([020cd74](https://github.com/andreik-n2/bff-sdk/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@)
* extract typescript client from nextjs ([#72](https://github.com/andreik-n2/bff-sdk/issues/72)) ([282797d](https://github.com/andreik-n2/bff-sdk/commit/282797dd4d28dce922cca8a3d5092d68c508f5bd)) (@)
* implement all core integrations ([#1215](https://github.com/andreik-n2/bff-sdk/issues/1215)) ([9d191df](https://github.com/andreik-n2/bff-sdk/commit/9d191df094bd218cdf59dc9bdda7f48d5fafd9eb)) (@)
* implement config first approach ([#151](https://github.com/andreik-n2/bff-sdk/issues/151)) ([803da0e](https://github.com/andreik-n2/bff-sdk/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/andreik-n2/bff-sdk/issues/190) (@)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@)
* nextjs 14 support ([#1338](https://github.com/andreik-n2/bff-sdk/issues/1338)) ([a8cd3c6](https://github.com/andreik-n2/bff-sdk/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@)
* react query client ([#340](https://github.com/andreik-n2/bff-sdk/issues/340)) ([c5769a4](https://github.com/andreik-n2/bff-sdk/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@)
* update SWR to v2 🥳 ([#446](https://github.com/andreik-n2/bff-sdk/issues/446)) ([8af6b99](https://github.com/andreik-n2/bff-sdk/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@)
* updated SWR to 2.2.0 ([#1109](https://github.com/andreik-n2/bff-sdk/issues/1109)) ([09ef6ef](https://github.com/andreik-n2/bff-sdk/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@)
* upgrade to nextjs 13 ([#504](https://github.com/andreik-n2/bff-sdk/issues/504)) ([45bc431](https://github.com/andreik-n2/bff-sdk/commit/45bc431243cc61765c2712b03e89818a1bb3d14a)) (@)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)

### Bug Fixes

* add missing dependency to our nextjs package ([#432](https://github.com/andreik-n2/bff-sdk/issues/432)) ([d646d93](https://github.com/andreik-n2/bff-sdk/commit/d646d933bcc1a67301446fa44b4d27c934ab94da)) (@)
* allow TS operations to override a requiredAuthentication with false ([#1151](https://github.com/andreik-n2/bff-sdk/issues/1151)) ([a6017cd](https://github.com/andreik-n2/bff-sdk/commit/a6017cd39f3c62ed0d658ac44495a0078be28691)) (@)
* avoid feeding paths into applicationHash calculation ([#636](https://github.com/andreik-n2/bff-sdk/issues/636)) ([8542cf6](https://github.com/andreik-n2/bff-sdk/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@)
* **codegen:** auth / s3 code generation ([75a3a61](https://github.com/andreik-n2/bff-sdk/commit/75a3a61916617d1d62460225c9d179ec7c8e4798)) (@)
* don't (re-)fetch user server & client-side when authentication is disabled ([#56](https://github.com/andreik-n2/bff-sdk/issues/56)) ([2d4bc4a](https://github.com/andreik-n2/bff-sdk/commit/2d4bc4a7e1823652f047703435282f12ace5ce7e)) (@)
* ensure all hooks are called for live queries ([#67](https://github.com/andreik-n2/bff-sdk/issues/67)) ([e58dea4](https://github.com/andreik-n2/bff-sdk/commit/e58dea4d12ff51ea1ef5c338ef9f105343b09694)) (@)
* fixed issue where createWunderGraphNext would not return correct… ([#1307](https://github.com/andreik-n2/bff-sdk/issues/1307)) ([62f54b1](https://github.com/andreik-n2/bff-sdk/commit/62f54b1a7fbfe23dc944b1c4ea0ee5332071208f)) (@)
* generate all required templates ([#360](https://github.com/andreik-n2/bff-sdk/issues/360)) ([ce2f130](https://github.com/andreik-n2/bff-sdk/commit/ce2f130829dfc4e4c7e468fcdc364bc7adef00d2)) (@)
* missing ts generator in nextjs package ([#1021](https://github.com/andreik-n2/bff-sdk/issues/1021)) ([06d6107](https://github.com/andreik-n2/bff-sdk/commit/06d610726d8096508dcd779913c7b1da9559c656)) (@)
* move codegen template helpers out of internal ([#1136](https://github.com/andreik-n2/bff-sdk/issues/1136)) ([3fd393f](https://github.com/andreik-n2/bff-sdk/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@)
* nextjs client fails hard when a page misses "withWunderGraph" ([#73](https://github.com/andreik-n2/bff-sdk/issues/73)) ([719ad5c](https://github.com/andreik-n2/bff-sdk/commit/719ad5ce9c3fe68dcf039528a0863fbf5adbdb38)) (@)
* nextjs ssr ([fa95e4d](https://github.com/andreik-n2/bff-sdk/commit/fa95e4ddfdcee1c537aface4e0f976250dee22af)) (@)
* **nextjs:** ssr ([7242584](https://github.com/andreik-n2/bff-sdk/commit/72425845ef9d74f832c557875b0936442e64bd67)) (@)
* remove conditional export, update typescript ([e1bb2ec](https://github.com/andreik-n2/bff-sdk/commit/e1bb2ecfff2e684c0caa370ea9aee021804e42c1)) (@)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/andreik-n2/bff-sdk/issues/1294)) ([7a88489](https://github.com/andreik-n2/bff-sdk/commit/7a884893f2e6055200275aa58957b089a8707798)) (@)

## 0.16.0 (2025-04-07)

### Features

* add auth middleware hook to nextjs client ([#795](https://github.com/andreik-n2/bff-sdk/issues/795)) ([77f92e3](https://github.com/andreik-n2/bff-sdk/commit/77f92e328028f15b6eede6084dae9318dca1a008)) (@)
* add json patch support, response zod schema for ts operations ([#689](https://github.com/andreik-n2/bff-sdk/issues/689)) ([02f40dc](https://github.com/andreik-n2/bff-sdk/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@)
* add tsup to build nextjs and swr packages ([#993](https://github.com/andreik-n2/bff-sdk/issues/993)) ([2685e03](https://github.com/andreik-n2/bff-sdk/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@)
* allow base url ([#13](https://github.com/andreik-n2/bff-sdk/issues/13)) ([901fc5f](https://github.com/andreik-n2/bff-sdk/commit/901fc5f75f73ceaa447eac76014b0e8f99ea0961)) (@)
* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/andreik-n2/bff-sdk/issues/319)) ([020cd74](https://github.com/andreik-n2/bff-sdk/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@)
* extract typescript client from nextjs ([#72](https://github.com/andreik-n2/bff-sdk/issues/72)) ([282797d](https://github.com/andreik-n2/bff-sdk/commit/282797dd4d28dce922cca8a3d5092d68c508f5bd)) (@)
* implement all core integrations ([#1215](https://github.com/andreik-n2/bff-sdk/issues/1215)) ([9d191df](https://github.com/andreik-n2/bff-sdk/commit/9d191df094bd218cdf59dc9bdda7f48d5fafd9eb)) (@)
* implement config first approach ([#151](https://github.com/andreik-n2/bff-sdk/issues/151)) ([803da0e](https://github.com/andreik-n2/bff-sdk/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/andreik-n2/bff-sdk/issues/190) (@)
* make typescript client typesafe ([#179](https://github.com/andreik-n2/bff-sdk/issues/179)) ([942b278](https://github.com/andreik-n2/bff-sdk/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/andreik-n2/bff-sdk/issues/188) (@)
* nextjs 14 support ([#1338](https://github.com/andreik-n2/bff-sdk/issues/1338)) ([a8cd3c6](https://github.com/andreik-n2/bff-sdk/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@)
* react query client ([#340](https://github.com/andreik-n2/bff-sdk/issues/340)) ([c5769a4](https://github.com/andreik-n2/bff-sdk/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@)
* update SWR to v2 🥳 ([#446](https://github.com/andreik-n2/bff-sdk/issues/446)) ([8af6b99](https://github.com/andreik-n2/bff-sdk/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@)
* updated SWR to 2.2.0 ([#1109](https://github.com/andreik-n2/bff-sdk/issues/1109)) ([09ef6ef](https://github.com/andreik-n2/bff-sdk/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@)
* upgrade to nextjs 13 ([#504](https://github.com/andreik-n2/bff-sdk/issues/504)) ([45bc431](https://github.com/andreik-n2/bff-sdk/commit/45bc431243cc61765c2712b03e89818a1bb3d14a)) (@)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)

### Bug Fixes

* add missing dependency to our nextjs package ([#432](https://github.com/andreik-n2/bff-sdk/issues/432)) ([d646d93](https://github.com/andreik-n2/bff-sdk/commit/d646d933bcc1a67301446fa44b4d27c934ab94da)) (@)
* allow TS operations to override a requiredAuthentication with false ([#1151](https://github.com/andreik-n2/bff-sdk/issues/1151)) ([a6017cd](https://github.com/andreik-n2/bff-sdk/commit/a6017cd39f3c62ed0d658ac44495a0078be28691)) (@)
* avoid feeding paths into applicationHash calculation ([#636](https://github.com/andreik-n2/bff-sdk/issues/636)) ([8542cf6](https://github.com/andreik-n2/bff-sdk/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@)
* **codegen:** auth / s3 code generation ([75a3a61](https://github.com/andreik-n2/bff-sdk/commit/75a3a61916617d1d62460225c9d179ec7c8e4798)) (@)
* don't (re-)fetch user server & client-side when authentication is disabled ([#56](https://github.com/andreik-n2/bff-sdk/issues/56)) ([2d4bc4a](https://github.com/andreik-n2/bff-sdk/commit/2d4bc4a7e1823652f047703435282f12ace5ce7e)) (@)
* ensure all hooks are called for live queries ([#67](https://github.com/andreik-n2/bff-sdk/issues/67)) ([e58dea4](https://github.com/andreik-n2/bff-sdk/commit/e58dea4d12ff51ea1ef5c338ef9f105343b09694)) (@)
* fixed issue where createWunderGraphNext would not return correct… ([#1307](https://github.com/andreik-n2/bff-sdk/issues/1307)) ([62f54b1](https://github.com/andreik-n2/bff-sdk/commit/62f54b1a7fbfe23dc944b1c4ea0ee5332071208f)) (@)
* generate all required templates ([#360](https://github.com/andreik-n2/bff-sdk/issues/360)) ([ce2f130](https://github.com/andreik-n2/bff-sdk/commit/ce2f130829dfc4e4c7e468fcdc364bc7adef00d2)) (@)
* missing ts generator in nextjs package ([#1021](https://github.com/andreik-n2/bff-sdk/issues/1021)) ([06d6107](https://github.com/andreik-n2/bff-sdk/commit/06d610726d8096508dcd779913c7b1da9559c656)) (@)
* move codegen template helpers out of internal ([#1136](https://github.com/andreik-n2/bff-sdk/issues/1136)) ([3fd393f](https://github.com/andreik-n2/bff-sdk/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@)
* nextjs client fails hard when a page misses "withWunderGraph" ([#73](https://github.com/andreik-n2/bff-sdk/issues/73)) ([719ad5c](https://github.com/andreik-n2/bff-sdk/commit/719ad5ce9c3fe68dcf039528a0863fbf5adbdb38)) (@)
* nextjs ssr ([fa95e4d](https://github.com/andreik-n2/bff-sdk/commit/fa95e4ddfdcee1c537aface4e0f976250dee22af)) (@)
* **nextjs:** ssr ([7242584](https://github.com/andreik-n2/bff-sdk/commit/72425845ef9d74f832c557875b0936442e64bd67)) (@)
* remove conditional export, update typescript ([e1bb2ec](https://github.com/andreik-n2/bff-sdk/commit/e1bb2ecfff2e684c0caa370ea9aee021804e42c1)) (@)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/andreik-n2/bff-sdk/issues/1294)) ([7a88489](https://github.com/andreik-n2/bff-sdk/commit/7a884893f2e6055200275aa58957b089a8707798)) (@)

## [0.15.10](https://github.com/andreik-n2/bff-sdk/compare/@virgograph/nextjs@0.15.9...@virgograph/nextjs@0.15.10) (2025-04-07)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.8...@virgograph/nextjs@0.15.9) (2024-05-15)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.7...@virgograph/nextjs@0.15.8) (2024-04-19)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.6...@virgograph/nextjs@0.15.7) (2024-03-08)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.5...@virgograph/nextjs@0.15.6) (2024-02-28)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.4...@virgograph/nextjs@0.15.5) (2024-01-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.3...@virgograph/nextjs@0.15.4) (2024-01-05)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.2...@virgograph/nextjs@0.15.3) (2023-12-13)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.1...@virgograph/nextjs@0.15.2) (2023-12-07)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.15.0...@virgograph/nextjs@0.15.1) (2023-12-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.15.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.12...@virgograph/nextjs@0.15.0) (2023-11-24)

### Features

* nextjs 14 support ([#1338](https://github.com/wundergraph/wundergraph/issues/1338)) ([a8cd3c6](https://github.com/wundergraph/wundergraph/commit/a8cd3c69c4394e6581c07d731957f51f10215f79)) (@Pagebakers)

## [0.14.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.11...@virgograph/nextjs@0.14.12) (2023-11-06)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.10...@virgograph/nextjs@0.14.11) (2023-10-30)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.9...@virgograph/nextjs@0.14.10) (2023-10-26)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.8...@virgograph/nextjs@0.14.9) (2023-10-25)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.7...@virgograph/nextjs@0.14.8) (2023-10-18)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.6...@virgograph/nextjs@0.14.7) (2023-10-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.5...@virgograph/nextjs@0.14.6) (2023-10-10)

### Bug Fixes

* fixed issue where createWunderGraphNext would not return correct… ([#1307](https://github.com/wundergraph/wundergraph/issues/1307)) ([62f54b1](https://github.com/wundergraph/wundergraph/commit/62f54b1a7fbfe23dc944b1c4ea0ee5332071208f)) (@Pagebakers)

## [0.14.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.4...@virgograph/nextjs@0.14.5) (2023-10-04)

### Performance Improvements

* make wunderctl generate faster, add a few more trace log messages ([#1294](https://github.com/wundergraph/wundergraph/issues/1294)) ([7a88489](https://github.com/wundergraph/wundergraph/commit/7a884893f2e6055200275aa58957b089a8707798)) (@fiam)

## [0.14.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.3...@virgograph/nextjs@0.14.4) (2023-09-22)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.2...@virgograph/nextjs@0.14.3) (2023-09-15)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.1...@virgograph/nextjs@0.14.2) (2023-09-05)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.14.0...@virgograph/nextjs@0.14.1) (2023-09-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.14.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.10...@virgograph/nextjs@0.14.0) (2023-08-24)

### Features

* implement all core integrations ([#1215](https://github.com/wundergraph/wundergraph/issues/1215)) ([9d191df](https://github.com/wundergraph/wundergraph/commit/9d191df094bd218cdf59dc9bdda7f48d5fafd9eb)) (@Pagebakers)

## [0.13.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.9...@virgograph/nextjs@0.13.10) (2023-08-21)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.8...@virgograph/nextjs@0.13.9) (2023-08-17)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.7...@virgograph/nextjs@0.13.8) (2023-08-14)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.6...@virgograph/nextjs@0.13.7) (2023-08-13)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.5...@virgograph/nextjs@0.13.6) (2023-08-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.4...@virgograph/nextjs@0.13.5) (2023-08-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.3...@virgograph/nextjs@0.13.4) (2023-08-02)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.2...@virgograph/nextjs@0.13.3) (2023-08-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.1...@virgograph/nextjs@0.13.2) (2023-07-28)

### Bug Fixes

* allow TS operations to override a requiredAuthentication with false ([#1151](https://github.com/wundergraph/wundergraph/issues/1151)) ([a6017cd](https://github.com/wundergraph/wundergraph/commit/a6017cd39f3c62ed0d658ac44495a0078be28691)) (@fiam)

## [0.13.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.13.0...@virgograph/nextjs@0.13.1) (2023-07-24)

**Note:** Version bump only for package @virgograph/nextjs

## [0.13.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.12.2...@virgograph/nextjs@0.13.0) (2023-07-24)

### Features

* upgrade to typescript 5 ([#1135](https://github.com/wundergraph/wundergraph/issues/1135)) ([74cee5d](https://github.com/wundergraph/wundergraph/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)

### Bug Fixes

* move codegen template helpers out of internal ([#1136](https://github.com/wundergraph/wundergraph/issues/1136)) ([3fd393f](https://github.com/wundergraph/wundergraph/commit/3fd393f777ea92ba69b48a1a8502aca5b2e6ed48)) (@Pagebakers)

## [0.12.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.12.1...@virgograph/nextjs@0.12.2) (2023-07-14)

**Note:** Version bump only for package @virgograph/nextjs

## [0.12.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.12.0...@virgograph/nextjs@0.12.1) (2023-07-13)

**Note:** Version bump only for package @virgograph/nextjs

## [0.12.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.13...@virgograph/nextjs@0.12.0) (2023-07-06)

### Features

* updated SWR to 2.2.0 ([#1109](https://github.com/wundergraph/wundergraph/issues/1109)) ([09ef6ef](https://github.com/wundergraph/wundergraph/commit/09ef6efa2d386598d94f8d0a3a22ec351e93ef16)) (@Pagebakers)

## [0.11.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.12...@virgograph/nextjs@0.11.13) (2023-07-05)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.11...@virgograph/nextjs@0.11.12) (2023-06-22)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.10...@virgograph/nextjs@0.11.11) (2023-06-21)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.9...@virgograph/nextjs@0.11.10) (2023-06-09)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.8...@virgograph/nextjs@0.11.9) (2023-06-06)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.7...@virgograph/nextjs@0.11.8) (2023-06-05)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.6...@virgograph/nextjs@0.11.7) (2023-06-04)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.5...@virgograph/nextjs@0.11.6) (2023-06-02)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.4...@virgograph/nextjs@0.11.5) (2023-06-02)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.3...@virgograph/nextjs@0.11.4) (2023-06-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.2...@virgograph/nextjs@0.11.3) (2023-05-31)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.1...@virgograph/nextjs@0.11.2) (2023-05-31)

### Bug Fixes

* missing ts generator in nextjs package ([#1021](https://github.com/wundergraph/wundergraph/issues/1021)) ([06d6107](https://github.com/wundergraph/wundergraph/commit/06d610726d8096508dcd779913c7b1da9559c656)) (@thisisnithin)

## [0.11.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.11.0...@virgograph/nextjs@0.11.1) (2023-05-26)

**Note:** Version bump only for package @virgograph/nextjs

## [0.11.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.29...@virgograph/nextjs@0.11.0) (2023-05-25)

### Features

* add tsup to build nextjs and swr packages ([#993](https://github.com/wundergraph/wundergraph/issues/993)) ([2685e03](https://github.com/wundergraph/wundergraph/commit/2685e03cf7e103ed634fc98963ce622cf700b398)) (@Pagebakers)

## [0.10.29](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.28...@virgograph/nextjs@0.10.29) (2023-05-16)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.28](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.27...@virgograph/nextjs@0.10.28) (2023-05-15)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.27](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.26...@virgograph/nextjs@0.10.27) (2023-05-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.26](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.25...@virgograph/nextjs@0.10.26) (2023-05-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.25](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.24...@virgograph/nextjs@0.10.25) (2023-05-09)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.24](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.23...@virgograph/nextjs@0.10.24) (2023-05-09)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.23](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.22...@virgograph/nextjs@0.10.23) (2023-05-08)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.22](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.21...@virgograph/nextjs@0.10.22) (2023-05-05)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.21](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.20...@virgograph/nextjs@0.10.21) (2023-05-04)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.20](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.19...@virgograph/nextjs@0.10.20) (2023-05-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.18...@virgograph/nextjs@0.10.19) (2023-05-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.17...@virgograph/nextjs@0.10.18) (2023-04-27)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.16...@virgograph/nextjs@0.10.17) (2023-04-27)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.15...@virgograph/nextjs@0.10.16) (2023-04-27)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.14...@virgograph/nextjs@0.10.15) (2023-04-26)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.13...@virgograph/nextjs@0.10.14) (2023-04-26)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.12...@virgograph/nextjs@0.10.13) (2023-04-25)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.11...@virgograph/nextjs@0.10.12) (2023-04-24)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.10...@virgograph/nextjs@0.10.11) (2023-04-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.9...@virgograph/nextjs@0.10.10) (2023-04-19)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.8...@virgograph/nextjs@0.10.9) (2023-04-19)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.7...@virgograph/nextjs@0.10.8) (2023-04-19)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.6...@virgograph/nextjs@0.10.7) (2023-04-17)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.5...@virgograph/nextjs@0.10.6) (2023-04-15)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.4...@virgograph/nextjs@0.10.5) (2023-04-14)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.3...@virgograph/nextjs@0.10.4) (2023-04-14)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.2...@virgograph/nextjs@0.10.3) (2023-04-13)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.1...@virgograph/nextjs@0.10.2) (2023-04-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.10.0...@virgograph/nextjs@0.10.1) (2023-04-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.10.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.13...@virgograph/nextjs@0.10.0) (2023-04-04)

### Features

* add auth middleware hook to nextjs client ([#795](https://github.com/wundergraph/wundergraph/issues/795)) ([77f92e3](https://github.com/wundergraph/wundergraph/commit/77f92e328028f15b6eede6084dae9318dca1a008)) (@Pagebakers)

## [0.9.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.12...@virgograph/nextjs@0.9.13) (2023-04-04)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.11...@virgograph/nextjs@0.9.12) (2023-03-31)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.10...@virgograph/nextjs@0.9.11) (2023-03-30)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.9...@virgograph/nextjs@0.9.10) (2023-03-29)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.8...@virgograph/nextjs@0.9.9) (2023-03-28)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.7...@virgograph/nextjs@0.9.8) (2023-03-27)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.6...@virgograph/nextjs@0.9.7) (2023-03-23)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.5...@virgograph/nextjs@0.9.6) (2023-03-16)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.4...@virgograph/nextjs@0.9.5) (2023-03-06)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.3...@virgograph/nextjs@0.9.4) (2023-03-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.2...@virgograph/nextjs@0.9.3) (2023-03-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.1...@virgograph/nextjs@0.9.2) (2023-02-28)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.9.0...@virgograph/nextjs@0.9.1) (2023-02-26)

**Note:** Version bump only for package @virgograph/nextjs

## [0.9.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.9...@virgograph/nextjs@0.9.0) (2023-02-23)

### Features

* add json patch support, response zod schema for ts operations ([#689](https://github.com/wundergraph/wundergraph/issues/689)) ([02f40dc](https://github.com/wundergraph/wundergraph/commit/02f40dc21e63c1771ee7b002c94a396a52f85187)) (@jensneuse)

## [0.8.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.8...@virgograph/nextjs@0.8.9) (2023-02-21)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.7...@virgograph/nextjs@0.8.8) (2023-02-10)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.6...@virgograph/nextjs@0.8.7) (2023-02-03)

### Bug Fixes

* avoid feeding paths into applicationHash calculation ([#636](https://github.com/wundergraph/wundergraph/issues/636)) ([8542cf6](https://github.com/wundergraph/wundergraph/commit/8542cf6789de51711b05b0fbc4bb78d895e0e099)) (@fiam)

## [0.8.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.5...@virgograph/nextjs@0.8.6) (2023-02-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.4...@virgograph/nextjs@0.8.5) (2023-01-30)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.3...@virgograph/nextjs@0.8.4) (2023-01-23)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.2...@virgograph/nextjs@0.8.3) (2023-01-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.1...@virgograph/nextjs@0.8.2) (2023-01-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.8.0...@virgograph/nextjs@0.8.1) (2023-01-19)

**Note:** Version bump only for package @virgograph/nextjs

## [0.8.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.7...@virgograph/nextjs@0.8.0) (2023-01-17)

### Features

* upgrade to nextjs 13 ([#504](https://github.com/wundergraph/wundergraph/issues/504)) ([45bc431](https://github.com/wundergraph/wundergraph/commit/45bc431243cc61765c2712b03e89818a1bb3d14a)) (@Pagebakers)

## [0.7.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.6...@virgograph/nextjs@0.7.7) (2022-12-31)

**Note:** Version bump only for package @virgograph/nextjs

## [0.7.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.5...@virgograph/nextjs@0.7.6) (2022-12-31)

**Note:** Version bump only for package @virgograph/nextjs

## [0.7.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.4...@virgograph/nextjs@0.7.5) (2022-12-29)

**Note:** Version bump only for package @virgograph/nextjs

## [0.7.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.3...@virgograph/nextjs@0.7.4) (2022-12-28)

**Note:** Version bump only for package @virgograph/nextjs

## [0.7.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.2...@virgograph/nextjs@0.7.3) (2022-12-21)

**Note:** Version bump only for package @virgograph/nextjs

## [0.7.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.1...@virgograph/nextjs@0.7.2) (2022-12-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.7.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.7.0...@virgograph/nextjs@0.7.1) (2022-12-15)

**Note:** Version bump only for package @virgograph/nextjs

## [0.7.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.6.1...@virgograph/nextjs@0.7.0) (2022-12-14)

### Features

* update SWR to v2 🥳 ([#446](https://github.com/wundergraph/wundergraph/issues/446)) ([8af6b99](https://github.com/wundergraph/wundergraph/commit/8af6b99f9e0e9da84586782ad5b9ad8e1072c987)) (@Pagebakers)

### Bug Fixes

* add missing dependency to our nextjs package ([#432](https://github.com/wundergraph/wundergraph/issues/432)) ([d646d93](https://github.com/wundergraph/wundergraph/commit/d646d933bcc1a67301446fa44b4d27c934ab94da)) (@fiam)

## [0.6.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.6.0...@virgograph/nextjs@0.6.1) (2022-12-08)

**Note:** Version bump only for package @virgograph/nextjs

## [0.6.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.5.2...@virgograph/nextjs@0.6.0) (2022-12-06)

### Features

* react query client ([#340](https://github.com/wundergraph/wundergraph/issues/340)) ([c5769a4](https://github.com/wundergraph/wundergraph/commit/c5769a422970e8eaf626dd767cf09252789bcd1f)) (@Pagebakers)

### Bug Fixes

* generate all required templates ([#360](https://github.com/wundergraph/wundergraph/issues/360)) ([ce2f130](https://github.com/wundergraph/wundergraph/commit/ce2f130829dfc4e4c7e468fcdc364bc7adef00d2)) (@JivusAyrus)

## [0.5.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.5.0...@virgograph/nextjs@0.5.2) (2022-11-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.5.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.5.0...@virgograph/nextjs@0.5.1) (2022-11-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.5.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.4.0...@virgograph/nextjs@0.5.0) (2022-11-18)

### Features

* remove app/main from URL structure ([#335](https://github.com/wundergraph/wundergraph/issues/335)) ([e49e585](https://github.com/wundergraph/wundergraph/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/wundergraph/wundergraph/issues/333) (@fiam)

## [0.4.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.24...@virgograph/nextjs@0.4.0) (2022-11-17)

### Features

* **breaking:** the Next.js client now uses SWR ([#319](https://github.com/wundergraph/wundergraph/issues/319)) ([020cd74](https://github.com/wundergraph/wundergraph/commit/020cd74091517faedcd97071d48a19395cbcd9bf)) (@Pagebakers)

## [0.3.24](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.23...@virgograph/nextjs@0.3.24) (2022-11-11)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.23](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.22...@virgograph/nextjs@0.3.23) (2022-11-08)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.22](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.21...@virgograph/nextjs@0.3.22) (2022-11-04)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.21](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.20...@virgograph/nextjs@0.3.21) (2022-11-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.20](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.19...@virgograph/nextjs@0.3.20) (2022-11-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.18...@virgograph/nextjs@0.3.19) (2022-11-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.17...@virgograph/nextjs@0.3.18) (2022-11-03)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.16...@virgograph/nextjs@0.3.17) (2022-10-23)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.15...@virgograph/nextjs@0.3.16) (2022-10-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.14...@virgograph/nextjs@0.3.15) (2022-10-18)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.13...@virgograph/nextjs@0.3.14) (2022-10-18)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.12...@virgograph/nextjs@0.3.13) (2022-10-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.11...@virgograph/nextjs@0.3.12) (2022-10-10)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.10...@virgograph/nextjs@0.3.11) (2022-10-07)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.9...@virgograph/nextjs@0.3.10) (2022-10-07)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.8...@virgograph/nextjs@0.3.9) (2022-10-04)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.7...@virgograph/nextjs@0.3.8) (2022-09-30)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.6...@virgograph/nextjs@0.3.7) (2022-09-29)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.5...@virgograph/nextjs@0.3.6) (2022-09-29)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.4...@virgograph/nextjs@0.3.5) (2022-09-26)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.3...@virgograph/nextjs@0.3.4) (2022-09-22)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.2...@virgograph/nextjs@0.3.3) (2022-09-21)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.1...@virgograph/nextjs@0.3.2) (2022-09-21)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.3.0...@virgograph/nextjs@0.3.1) (2022-09-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.3.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.2.0...@virgograph/nextjs@0.3.0) (2022-09-19)

### Features

* make typescript client typesafe ([#179](https://github.com/wundergraph/wundergraph/issues/179)) ([942b278](https://github.com/wundergraph/wundergraph/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/wundergraph/wundergraph/issues/188) (@Pagebakers)

## [0.2.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.17...@virgograph/nextjs@0.2.0) (2022-09-19)

### Features

* implement config first approach ([#151](https://github.com/wundergraph/wundergraph/issues/151)) ([803da0e](https://github.com/wundergraph/wundergraph/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/wundergraph/wundergraph/issues/190) (@spetrunin)

## [0.1.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.16...@virgograph/nextjs@0.1.17) (2022-09-15)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.15...@virgograph/nextjs@0.1.16) (2022-09-15)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.14...@virgograph/nextjs@0.1.15) (2022-09-14)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.14](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.13...@virgograph/nextjs@0.1.14) (2022-09-09)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.13](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.12...@virgograph/nextjs@0.1.13) (2022-09-08)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.12](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.11...@virgograph/nextjs@0.1.12) (2022-09-08)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.11](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.10...@virgograph/nextjs@0.1.11) (2022-09-06)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.10](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.9...@virgograph/nextjs@0.1.10) (2022-09-05)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.9](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.8...@virgograph/nextjs@0.1.9) (2022-09-04)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.8](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.7...@virgograph/nextjs@0.1.8) (2022-09-02)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.7](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.6...@virgograph/nextjs@0.1.7) (2022-09-01)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.6](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.5...@virgograph/nextjs@0.1.6) (2022-08-30)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.5](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.4...@virgograph/nextjs@0.1.5) (2022-08-29)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.4](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.3...@virgograph/nextjs@0.1.4) (2022-08-25)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.2...@virgograph/nextjs@0.1.3) (2022-08-25)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.1...@virgograph/nextjs@0.1.2) (2022-08-18)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.1.0...@virgograph/nextjs@0.1.1) (2022-08-18)

**Note:** Version bump only for package @virgograph/nextjs

## [0.1.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.35...@virgograph/nextjs@0.1.0) (2022-08-09)

### Features

* extract typescript client from nextjs ([#72](https://github.com/wundergraph/wundergraph/issues/72)) ([282797d](https://github.com/wundergraph/wundergraph/commit/282797dd4d28dce922cca8a3d5092d68c508f5bd))

### Bug Fixes

* nextjs client fails hard when a page misses "withWunderGraph" ([#73](https://github.com/wundergraph/wundergraph/issues/73)) ([719ad5c](https://github.com/wundergraph/wundergraph/commit/719ad5ce9c3fe68dcf039528a0863fbf5adbdb38))

## [0.0.35](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.34...@virgograph/nextjs@0.0.35) (2022-07-18)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.34](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.33...@virgograph/nextjs@0.0.34) (2022-07-13)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.33](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.32...@virgograph/nextjs@0.0.33) (2022-07-07)

### Bug Fixes

- **codegen:** auth / s3 code generation ([75a3a61](https://github.com/wundergraph/wundergraph/commit/75a3a61916617d1d62460225c9d179ec7c8e4798))

## [0.0.32](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.31...@virgograph/nextjs@0.0.32) (2022-07-07)

### Bug Fixes

- ensure all hooks are called for live queries ([#67](https://github.com/wundergraph/wundergraph/issues/67)) ([e58dea4](https://github.com/wundergraph/wundergraph/commit/e58dea4d12ff51ea1ef5c338ef9f105343b09694))

## [0.0.31](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.30...@virgograph/nextjs@0.0.31) (2022-07-05)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.30](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.29...@virgograph/nextjs@0.0.30) (2022-06-30)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.29](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.28...@virgograph/nextjs@0.0.29) (2022-06-30)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.28](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.27...@virgograph/nextjs@0.0.28) (2022-06-30)

### Bug Fixes

- don't (re-)fetch user server & client-side when authentication is disabled ([#56](https://github.com/wundergraph/wundergraph/issues/56)) ([2d4bc4a](https://github.com/wundergraph/wundergraph/commit/2d4bc4a7e1823652f047703435282f12ace5ce7e))

## [0.0.27](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.26...@virgograph/nextjs@0.0.27) (2022-06-29)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.26](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.25...@virgograph/nextjs@0.0.26) (2022-06-29)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.25](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.24...@virgograph/nextjs@0.0.25) (2022-06-23)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.24](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.23...@virgograph/nextjs@0.0.24) (2022-06-20)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.23](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.22...@virgograph/nextjs@0.0.23) (2022-06-12)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.22](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.21...@virgograph/nextjs@0.0.22) (2022-06-11)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.21](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.20...@virgograph/nextjs@0.0.21) (2022-06-11)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.20](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.19...@virgograph/nextjs@0.0.20) (2022-06-11)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.19](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.18...@virgograph/nextjs@0.0.19) (2022-06-11)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.18](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.17...@virgograph/nextjs@0.0.18) (2022-06-10)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.17](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.16...@virgograph/nextjs@0.0.17) (2022-06-10)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.16](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.15...@virgograph/nextjs@0.0.16) (2022-06-04)

**Note:** Version bump only for package @virgograph/nextjs

## [0.0.15](https://github.com/wundergraph/wundergraph/compare/@virgograph/nextjs@0.0.14...@virgograph/nextjs@0.0.15) (2022-06-02)

**Note:** Version bump only for package @virgograph/nextjs

## 0.0.14

### Patch Changes

- Updated dependencies [[`afea237`](https://github.com/wundergraph/wundergraph/commit/afea23771191e049aab5ce56ce775775389e8770), [`93cf9e1`](https://github.com/wundergraph/wundergraph/commit/93cf9e1cd3b2a30ad79d434f13f84596dd0b3607)]:
  - @virgograph/protobuf@0.91.0
  - @virgograph/sdk@0.91.0

## 0.0.12

### Patch Changes

- [`91847b5`](https://github.com/wundergraph/wundergraph/commit/91847b5c8f529a0e94f3f0c8bd00c327ed70ffe0) Thanks [@jensneuse](https://github.com/jensneuse)! - fix server side rendering

## 0.0.11

### Patch Changes

- [#13](https://github.com/wundergraph/wundergraph/pull/13) [`901fc5f`](https://github.com/wundergraph/wundergraph/commit/901fc5f75f73ceaa447eac76014b0e8f99ea0961) Thanks [@StarpTech](https://github.com/StarpTech)! - allow custom baseUrl

## 0.0.10

### Patch Changes

- [`e1bb2ec`](https://github.com/wundergraph/wundergraph/commit/e1bb2ecfff2e684c0caa370ea9aee021804e42c1) Thanks [@StarpTech](https://github.com/StarpTech)! - Remove conditional export

## 0.0.9

### Patch Changes

- Updated dependencies [[`ad2e3a6`](https://github.com/wundergraph/wundergraph/commit/ad2e3a6fa97441b49ab477e47463a9ce2d561049)]:
  - @virgograph/sdk@0.90.6

## 0.0.8

### Patch Changes

- Updated dependencies [[`e68d101`](https://github.com/wundergraph/wundergraph/commit/e68d101f5af39918fc810c68ec0cde606009d40c)]:
  - @virgograph/sdk@0.90.5

## 0.0.7

### Patch Changes

- Updated dependencies [[`a53fc56`](https://github.com/wundergraph/wundergraph/commit/a53fc56a054d4b4dc68de53a8d178e3d5341ef58)]:
  - @virgograph/sdk@0.90.4

## 0.0.6

### Patch Changes

- Updated dependencies [[`a27e9f5`](https://github.com/wundergraph/wundergraph/commit/a27e9f50093f7b4775f4d6a1d2f03a56398bc169)]:
  - @virgograph/sdk@0.90.3

## 0.0.5

### Patch Changes

- Updated dependencies [[`7c6b3ae`](https://github.com/wundergraph/wundergraph/commit/7c6b3ae3f86bbe7ee3402556668ce81052f192f4)]:
  - @virgograph/sdk@0.90.2

## 0.0.4

### Patch Changes

- Updated dependencies [[`0857db3`](https://github.com/wundergraph/wundergraph/commit/0857db3d55209fb878fe6326629b125c6f2d2315)]:
  - @virgograph/protobuf@0.90.1
  - @virgograph/sdk@0.90.1
