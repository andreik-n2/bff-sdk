# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.123.0 (2025-04-08)

### Features

* add configurable per-source timeouts ([#232](https://github.com/andreik-n2/bff-sdk/issues/232)) ([bb3b6bd](https://github.com/andreik-n2/bff-sdk/commit/bb3b6bd31250b402fe0c9a099b0dad993976cf39)) (@fiam)
* add post logout hook ([#196](https://github.com/andreik-n2/bff-sdk/issues/196)) ([6870130](https://github.com/andreik-n2/bff-sdk/commit/6870130b0c4e6fc269d81160994384c1d1cf6e59)) (@jensneuse)
* add prisma datasource ([#605](https://github.com/andreik-n2/bff-sdk/issues/605)) ([2f0cfa5](https://github.com/andreik-n2/bff-sdk/commit/2f0cfa5e420080772a6552f4a256c7d71906f84a)) (@jensneuse)
* add support for caching in function handlers ([#932](https://github.com/andreik-n2/bff-sdk/issues/932)) ([ce31c4c](https://github.com/andreik-n2/bff-sdk/commit/ce31c4c02cbfd121886cf4c8a0fe354ac19ed340)) (@fiam)
* add support for custom claims ([#648](https://github.com/andreik-n2/bff-sdk/issues/648) ([682b88c](https://github.com/andreik-n2/bff-sdk/commit/682b88c115512878aa22b57d4ed67c07fd88726b)) (@fiam)
* add support for custom claims of any type ([#911](https://github.com/andreik-n2/bff-sdk/issues/911)) ([c6f14f8](https://github.com/andreik-n2/bff-sdk/commit/c6f14f8d91db8bc908a85b20c6ef8f8561698078)) (@fiam)
* add support for declaring a list of public claims ([#706](https://github.com/andreik-n2/bff-sdk/issues/706)) ([2223d5c](https://github.com/andreik-n2/bff-sdk/commit/2223d5c02f1eadaad7ecb6ac863bb2f9e34c926c)) (@fiam)
* add support for disconnecting from Auth0 ([#525](https://github.com/andreik-n2/bff-sdk/issues/525)) ([7465fb2](https://github.com/andreik-n2/bff-sdk/commit/7465fb21a3618924c7dfb59a6a2f94c7d740f0f8)) (@fiam)
* add support for feature usage telemetry ([#1096](https://github.com/andreik-n2/bff-sdk/issues/1096)) ([30a0b12](https://github.com/andreik-n2/bff-sdk/commit/30a0b129899d8296aa6a027d1ecafde469a0ead2)) (@fiam)
* add support for injecting variables into nested paths ([#678](https://github.com/andreik-n2/bff-sdk/issues/678)) ([ce0a0a0](https://github.com/andreik-n2/bff-sdk/commit/ce0a0a09b4e739767b17f1ad391074f6ba597253)) (@fiam)
* add support for uploads from anonymous users ([#632](https://github.com/andreik-n2/bff-sdk/issues/632)) ([485975b](https://github.com/andreik-n2/bff-sdk/commit/485975be55a8c1c82a4610431c7514d3c3c2dfe0)) (@fiam)
* add support for using proxies in data sources ([#854](https://github.com/andreik-n2/bff-sdk/issues/854)) ([a472c46](https://github.com/andreik-n2/bff-sdk/commit/a472c463d6dbcb20b48444fdd4ce9c797c16feb2)) (@fiam)
* add upload profiles for S3 providers ([#476](https://github.com/andreik-n2/bff-sdk/issues/476)) ([6144545](https://github.com/andreik-n2/bff-sdk/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@fiam)
* advanced hooks - dynamicTransport ([#1124](https://github.com/andreik-n2/bff-sdk/issues/1124)) ([6cbdeba](https://github.com/andreik-n2/bff-sdk/commit/6cbdebac0a775b638beeae8457d07dce829379bc)) (@Pagebakers)
* eng 640 compose subgraphs without apollo dependencies ([#315](https://github.com/andreik-n2/bff-sdk/issues/315)) ([628a183](https://github.com/andreik-n2/bff-sdk/commit/628a18303acb47df5a10118b17a4e88916b2903a)) (@jensneuse)
* implement config first approach ([#151](https://github.com/andreik-n2/bff-sdk/issues/151)) ([803da0e](https://github.com/andreik-n2/bff-sdk/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/andreik-n2/bff-sdk/issues/190) (@)
* implement internal graphql handler ([#853](https://github.com/andreik-n2/bff-sdk/issues/853)) ([ad42f5f](https://github.com/andreik-n2/bff-sdk/commit/ad42f5f9f23a0e6ec968a1c5fefb226f2b46254a)) (@thisisnithin)
* implement userId for fromClaim directive ([#152](https://github.com/andreik-n2/bff-sdk/issues/152)) ([51df6e5](https://github.com/andreik-n2/bff-sdk/commit/51df6e50244bee9f5f8d579ff6f604e1a1c853d9)) (@jensneuse)
* improve Cache-Control support ([#959](https://github.com/andreik-n2/bff-sdk/issues/959)) ([1b330d5](https://github.com/andreik-n2/bff-sdk/commit/1b330d5c0207264ae0f3868276011ff9a8d83a67)) (@fiam)
* initial impl of nats kv ([#1057](https://github.com/andreik-n2/bff-sdk/issues/1057)) ([961f1f0](https://github.com/andreik-n2/bff-sdk/commit/961f1f0d14b95fc69a9a99ef637d6cd544750c08)) (@jensneuse)
* make detecting invalid operations easier ([#374](https://github.com/andreik-n2/bff-sdk/issues/374)) ([45639db](https://github.com/andreik-n2/bff-sdk/commit/45639db0ae3adb8cac4f62b623b04061118f7bf7)) (@fiam)
* make timeout during authentication configurable ([#1018](https://github.com/andreik-n2/bff-sdk/issues/1018)) ([b5f6b74](https://github.com/andreik-n2/bff-sdk/commit/b5f6b744cd4efef456b9004b4109f7624e467f41)) (@fiam)
* oidc,  allow passing additional query parameters to the IDP ([#178](https://github.com/andreik-n2/bff-sdk/issues/178)) ([d015bb1](https://github.com/andreik-n2/bff-sdk/commit/d015bb150762cba7a46865e66f3de633e731de07)) (@YuriBuerov)
* orm ([#963](https://github.com/andreik-n2/bff-sdk/issues/963)) ([8cd45a3](https://github.com/andreik-n2/bff-sdk/commit/8cd45a37f139e592f579c40e266ce128b8be1b5d)) (@Pagebakers)
* otel instrumentation of wundernode and server ([#1004](https://github.com/andreik-n2/bff-sdk/issues/1004)) ([7b45975](https://github.com/andreik-n2/bff-sdk/commit/7b45975ca8fb41ff03cbcc84c42ec3536ad6db13)) (@StarpTech)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@fiam)
* sdk, schema extension fields config ([#336](https://github.com/andreik-n2/bff-sdk/issues/336)) ([ca09b3c](https://github.com/andreik-n2/bff-sdk/commit/ca09b3cf2002763b7ea53a7d50f6dce50d08c120)) (@YuriBuerov)
* **sdk:** ship compatible wunderctl in SDK ([#18](https://github.com/andreik-n2/bff-sdk/issues/18)) ([afea237](https://github.com/andreik-n2/bff-sdk/commit/afea23771191e049aab5ce56ce775775389e8770)) (@StarpTech)
* sse subscriptions configuration ([#217](https://github.com/andreik-n2/bff-sdk/issues/217)) ([7bf72ef](https://github.com/andreik-n2/bff-sdk/commit/7bf72efd16a8bac422db32fe957e102395d7357c)) (@YuriBuerov)
* subscriptions, ws connection init hook ([#243](https://github.com/andreik-n2/bff-sdk/issues/243)) ([2e4ae85](https://github.com/andreik-n2/bff-sdk/commit/2e4ae8506558165a9bf3ada4b8f45cee55a9f18d)) (@YuriBuerov)
* tui + log handling ([#813](https://github.com/andreik-n2/bff-sdk/issues/813)) ([6bf7498](https://github.com/andreik-n2/bff-sdk/commit/6bf74980c69def43e4af8bdfdcc0fb5645a1025b)) (@StarpTech)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)
* use Prometheus to track and expose operation and API request counts ([#991](https://github.com/andreik-n2/bff-sdk/issues/991)) ([f949398](https://github.com/andreik-n2/bff-sdk/commit/f94939864c9ce7c3a9623fd5141fa486c4c9a55c)) (@fiam)

### Bug Fixes

* allow setting logging levels from command line ([#1141](https://github.com/andreik-n2/bff-sdk/issues/1141)) ([01100b7](https://github.com/andreik-n2/bff-sdk/commit/01100b7a508eaa9c8ceb6cac5998c9f0365e5fde)) (@fiam)
* allow to configure internal and public node urls separately ([#207](https://github.com/andreik-n2/bff-sdk/issues/207)) ([c01bd9a](https://github.com/andreik-n2/bff-sdk/commit/c01bd9a1cedefbb5fd0ecde83f3b96b3dfee6f41)) (@)
* custom int/float scalars usage in arguments ([#427](https://github.com/andreik-n2/bff-sdk/issues/427))Co-authored-by: Alberto García Hierro <alberto@garciahierro.com> Co-authored-by: Sergiy <818351+devsergiy@users.noreply.github.com> Co-authored-by: spetrunin <neyasut@gmail.com> ([2b424f3](https://github.com/andreik-n2/bff-sdk/commit/2b424f3daaabea25abb4a23139751ff0ab2adefe)) (@OLingard)
* remove conditional export, update typescript ([e1bb2ec](https://github.com/andreik-n2/bff-sdk/commit/e1bb2ecfff2e684c0caa370ea9aee021804e42c1)) (@StarpTech)

### Performance Improvements

* improve config generation/loading performance ([#1070](https://github.com/andreik-n2/bff-sdk/issues/1070)) ([5ba5a7a](https://github.com/andreik-n2/bff-sdk/commit/5ba5a7a5c9302fdb73e9a6d15a82fcaf28db62fa)), closes [#1020](https://github.com/andreik-n2/bff-sdk/issues/1020) (@fiam)

## 0.122.0 (2025-04-08)

### Features

* add configurable per-source timeouts ([#232](https://github.com/andreik-n2/bff-sdk/issues/232)) ([bb3b6bd](https://github.com/andreik-n2/bff-sdk/commit/bb3b6bd31250b402fe0c9a099b0dad993976cf39)) (@)
* add post logout hook ([#196](https://github.com/andreik-n2/bff-sdk/issues/196)) ([6870130](https://github.com/andreik-n2/bff-sdk/commit/6870130b0c4e6fc269d81160994384c1d1cf6e59)) (@)
* add prisma datasource ([#605](https://github.com/andreik-n2/bff-sdk/issues/605)) ([2f0cfa5](https://github.com/andreik-n2/bff-sdk/commit/2f0cfa5e420080772a6552f4a256c7d71906f84a)) (@)
* add support for caching in function handlers ([#932](https://github.com/andreik-n2/bff-sdk/issues/932)) ([ce31c4c](https://github.com/andreik-n2/bff-sdk/commit/ce31c4c02cbfd121886cf4c8a0fe354ac19ed340)) (@)
* add support for custom claims ([#648](https://github.com/andreik-n2/bff-sdk/issues/648) ([682b88c](https://github.com/andreik-n2/bff-sdk/commit/682b88c115512878aa22b57d4ed67c07fd88726b)) (@)
* add support for custom claims of any type ([#911](https://github.com/andreik-n2/bff-sdk/issues/911)) ([c6f14f8](https://github.com/andreik-n2/bff-sdk/commit/c6f14f8d91db8bc908a85b20c6ef8f8561698078)) (@)
* add support for declaring a list of public claims ([#706](https://github.com/andreik-n2/bff-sdk/issues/706)) ([2223d5c](https://github.com/andreik-n2/bff-sdk/commit/2223d5c02f1eadaad7ecb6ac863bb2f9e34c926c)) (@)
* add support for disconnecting from Auth0 ([#525](https://github.com/andreik-n2/bff-sdk/issues/525)) ([7465fb2](https://github.com/andreik-n2/bff-sdk/commit/7465fb21a3618924c7dfb59a6a2f94c7d740f0f8)) (@)
* add support for feature usage telemetry ([#1096](https://github.com/andreik-n2/bff-sdk/issues/1096)) ([30a0b12](https://github.com/andreik-n2/bff-sdk/commit/30a0b129899d8296aa6a027d1ecafde469a0ead2)) (@)
* add support for injecting variables into nested paths ([#678](https://github.com/andreik-n2/bff-sdk/issues/678)) ([ce0a0a0](https://github.com/andreik-n2/bff-sdk/commit/ce0a0a09b4e739767b17f1ad391074f6ba597253)) (@)
* add support for uploads from anonymous users ([#632](https://github.com/andreik-n2/bff-sdk/issues/632)) ([485975b](https://github.com/andreik-n2/bff-sdk/commit/485975be55a8c1c82a4610431c7514d3c3c2dfe0)) (@)
* add support for using proxies in data sources ([#854](https://github.com/andreik-n2/bff-sdk/issues/854)) ([a472c46](https://github.com/andreik-n2/bff-sdk/commit/a472c463d6dbcb20b48444fdd4ce9c797c16feb2)) (@)
* add upload profiles for S3 providers ([#476](https://github.com/andreik-n2/bff-sdk/issues/476)) ([6144545](https://github.com/andreik-n2/bff-sdk/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@)
* advanced hooks - dynamicTransport ([#1124](https://github.com/andreik-n2/bff-sdk/issues/1124)) ([6cbdeba](https://github.com/andreik-n2/bff-sdk/commit/6cbdebac0a775b638beeae8457d07dce829379bc)) (@)
* eng 640 compose subgraphs without apollo dependencies ([#315](https://github.com/andreik-n2/bff-sdk/issues/315)) ([628a183](https://github.com/andreik-n2/bff-sdk/commit/628a18303acb47df5a10118b17a4e88916b2903a)) (@)
* implement config first approach ([#151](https://github.com/andreik-n2/bff-sdk/issues/151)) ([803da0e](https://github.com/andreik-n2/bff-sdk/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/andreik-n2/bff-sdk/issues/190) (@)
* implement internal graphql handler ([#853](https://github.com/andreik-n2/bff-sdk/issues/853)) ([ad42f5f](https://github.com/andreik-n2/bff-sdk/commit/ad42f5f9f23a0e6ec968a1c5fefb226f2b46254a)) (@)
* implement userId for fromClaim directive ([#152](https://github.com/andreik-n2/bff-sdk/issues/152)) ([51df6e5](https://github.com/andreik-n2/bff-sdk/commit/51df6e50244bee9f5f8d579ff6f604e1a1c853d9)) (@)
* improve Cache-Control support ([#959](https://github.com/andreik-n2/bff-sdk/issues/959)) ([1b330d5](https://github.com/andreik-n2/bff-sdk/commit/1b330d5c0207264ae0f3868276011ff9a8d83a67)) (@)
* initial impl of nats kv ([#1057](https://github.com/andreik-n2/bff-sdk/issues/1057)) ([961f1f0](https://github.com/andreik-n2/bff-sdk/commit/961f1f0d14b95fc69a9a99ef637d6cd544750c08)) (@)
* make detecting invalid operations easier ([#374](https://github.com/andreik-n2/bff-sdk/issues/374)) ([45639db](https://github.com/andreik-n2/bff-sdk/commit/45639db0ae3adb8cac4f62b623b04061118f7bf7)) (@)
* make timeout during authentication configurable ([#1018](https://github.com/andreik-n2/bff-sdk/issues/1018)) ([b5f6b74](https://github.com/andreik-n2/bff-sdk/commit/b5f6b744cd4efef456b9004b4109f7624e467f41)) (@)
* oidc,  allow passing additional query parameters to the IDP ([#178](https://github.com/andreik-n2/bff-sdk/issues/178)) ([d015bb1](https://github.com/andreik-n2/bff-sdk/commit/d015bb150762cba7a46865e66f3de633e731de07)) (@)
* orm ([#963](https://github.com/andreik-n2/bff-sdk/issues/963)) ([8cd45a3](https://github.com/andreik-n2/bff-sdk/commit/8cd45a37f139e592f579c40e266ce128b8be1b5d)) (@)
* otel instrumentation of wundernode and server ([#1004](https://github.com/andreik-n2/bff-sdk/issues/1004)) ([7b45975](https://github.com/andreik-n2/bff-sdk/commit/7b45975ca8fb41ff03cbcc84c42ec3536ad6db13)) (@)
* reanme ([c74b583](https://github.com/andreik-n2/bff-sdk/commit/c74b58338b2342d1f66818282089f67b9a39465d)) (@andreik-n2)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@)
* sdk, schema extension fields config ([#336](https://github.com/andreik-n2/bff-sdk/issues/336)) ([ca09b3c](https://github.com/andreik-n2/bff-sdk/commit/ca09b3cf2002763b7ea53a7d50f6dce50d08c120)) (@)
* **sdk:** ship compatible wunderctl in SDK ([#18](https://github.com/andreik-n2/bff-sdk/issues/18)) ([afea237](https://github.com/andreik-n2/bff-sdk/commit/afea23771191e049aab5ce56ce775775389e8770)) (@)
* sse subscriptions configuration ([#217](https://github.com/andreik-n2/bff-sdk/issues/217)) ([7bf72ef](https://github.com/andreik-n2/bff-sdk/commit/7bf72efd16a8bac422db32fe957e102395d7357c)) (@)
* subscriptions, ws connection init hook ([#243](https://github.com/andreik-n2/bff-sdk/issues/243)) ([2e4ae85](https://github.com/andreik-n2/bff-sdk/commit/2e4ae8506558165a9bf3ada4b8f45cee55a9f18d)) (@)
* tui + log handling ([#813](https://github.com/andreik-n2/bff-sdk/issues/813)) ([6bf7498](https://github.com/andreik-n2/bff-sdk/commit/6bf74980c69def43e4af8bdfdcc0fb5645a1025b)) (@)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)
* use Prometheus to track and expose operation and API request counts ([#991](https://github.com/andreik-n2/bff-sdk/issues/991)) ([f949398](https://github.com/andreik-n2/bff-sdk/commit/f94939864c9ce7c3a9623fd5141fa486c4c9a55c)) (@)

### Bug Fixes

* allow setting logging levels from command line ([#1141](https://github.com/andreik-n2/bff-sdk/issues/1141)) ([01100b7](https://github.com/andreik-n2/bff-sdk/commit/01100b7a508eaa9c8ceb6cac5998c9f0365e5fde)) (@)
* allow to configure internal and public node urls separately ([#207](https://github.com/andreik-n2/bff-sdk/issues/207)) ([c01bd9a](https://github.com/andreik-n2/bff-sdk/commit/c01bd9a1cedefbb5fd0ecde83f3b96b3dfee6f41)) (@)
* custom int/float scalars usage in arguments ([#427](https://github.com/andreik-n2/bff-sdk/issues/427))Co-authored-by: Alberto García Hierro <alberto@garciahierro.com> Co-authored-by: Sergiy <818351+devsergiy@users.noreply.github.com> Co-authored-by: spetrunin <neyasut@gmail.com> ([2b424f3](https://github.com/andreik-n2/bff-sdk/commit/2b424f3daaabea25abb4a23139751ff0ab2adefe)) (@)
* remove conditional export, update typescript ([e1bb2ec](https://github.com/andreik-n2/bff-sdk/commit/e1bb2ecfff2e684c0caa370ea9aee021804e42c1)) (@)

### Performance Improvements

* improve config generation/loading performance ([#1070](https://github.com/andreik-n2/bff-sdk/issues/1070)) ([5ba5a7a](https://github.com/andreik-n2/bff-sdk/commit/5ba5a7a5c9302fdb73e9a6d15a82fcaf28db62fa)), closes [#1020](https://github.com/andreik-n2/bff-sdk/issues/1020) (@)

## 0.121.0 (2025-04-07)

### Features

* add configurable per-source timeouts ([#232](https://github.com/andreik-n2/bff-sdk/issues/232)) ([bb3b6bd](https://github.com/andreik-n2/bff-sdk/commit/bb3b6bd31250b402fe0c9a099b0dad993976cf39)) (@)
* add post logout hook ([#196](https://github.com/andreik-n2/bff-sdk/issues/196)) ([6870130](https://github.com/andreik-n2/bff-sdk/commit/6870130b0c4e6fc269d81160994384c1d1cf6e59)) (@)
* add prisma datasource ([#605](https://github.com/andreik-n2/bff-sdk/issues/605)) ([2f0cfa5](https://github.com/andreik-n2/bff-sdk/commit/2f0cfa5e420080772a6552f4a256c7d71906f84a)) (@)
* add support for caching in function handlers ([#932](https://github.com/andreik-n2/bff-sdk/issues/932)) ([ce31c4c](https://github.com/andreik-n2/bff-sdk/commit/ce31c4c02cbfd121886cf4c8a0fe354ac19ed340)) (@)
* add support for custom claims ([#648](https://github.com/andreik-n2/bff-sdk/issues/648) ([682b88c](https://github.com/andreik-n2/bff-sdk/commit/682b88c115512878aa22b57d4ed67c07fd88726b)) (@)
* add support for custom claims of any type ([#911](https://github.com/andreik-n2/bff-sdk/issues/911)) ([c6f14f8](https://github.com/andreik-n2/bff-sdk/commit/c6f14f8d91db8bc908a85b20c6ef8f8561698078)) (@)
* add support for declaring a list of public claims ([#706](https://github.com/andreik-n2/bff-sdk/issues/706)) ([2223d5c](https://github.com/andreik-n2/bff-sdk/commit/2223d5c02f1eadaad7ecb6ac863bb2f9e34c926c)) (@)
* add support for disconnecting from Auth0 ([#525](https://github.com/andreik-n2/bff-sdk/issues/525)) ([7465fb2](https://github.com/andreik-n2/bff-sdk/commit/7465fb21a3618924c7dfb59a6a2f94c7d740f0f8)) (@)
* add support for feature usage telemetry ([#1096](https://github.com/andreik-n2/bff-sdk/issues/1096)) ([30a0b12](https://github.com/andreik-n2/bff-sdk/commit/30a0b129899d8296aa6a027d1ecafde469a0ead2)) (@)
* add support for injecting variables into nested paths ([#678](https://github.com/andreik-n2/bff-sdk/issues/678)) ([ce0a0a0](https://github.com/andreik-n2/bff-sdk/commit/ce0a0a09b4e739767b17f1ad391074f6ba597253)) (@)
* add support for uploads from anonymous users ([#632](https://github.com/andreik-n2/bff-sdk/issues/632)) ([485975b](https://github.com/andreik-n2/bff-sdk/commit/485975be55a8c1c82a4610431c7514d3c3c2dfe0)) (@)
* add support for using proxies in data sources ([#854](https://github.com/andreik-n2/bff-sdk/issues/854)) ([a472c46](https://github.com/andreik-n2/bff-sdk/commit/a472c463d6dbcb20b48444fdd4ce9c797c16feb2)) (@)
* add upload profiles for S3 providers ([#476](https://github.com/andreik-n2/bff-sdk/issues/476)) ([6144545](https://github.com/andreik-n2/bff-sdk/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@)
* advanced hooks - dynamicTransport ([#1124](https://github.com/andreik-n2/bff-sdk/issues/1124)) ([6cbdeba](https://github.com/andreik-n2/bff-sdk/commit/6cbdebac0a775b638beeae8457d07dce829379bc)) (@)
* eng 640 compose subgraphs without apollo dependencies ([#315](https://github.com/andreik-n2/bff-sdk/issues/315)) ([628a183](https://github.com/andreik-n2/bff-sdk/commit/628a18303acb47df5a10118b17a4e88916b2903a)) (@)
* implement config first approach ([#151](https://github.com/andreik-n2/bff-sdk/issues/151)) ([803da0e](https://github.com/andreik-n2/bff-sdk/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/andreik-n2/bff-sdk/issues/190) (@)
* implement internal graphql handler ([#853](https://github.com/andreik-n2/bff-sdk/issues/853)) ([ad42f5f](https://github.com/andreik-n2/bff-sdk/commit/ad42f5f9f23a0e6ec968a1c5fefb226f2b46254a)) (@)
* implement userId for fromClaim directive ([#152](https://github.com/andreik-n2/bff-sdk/issues/152)) ([51df6e5](https://github.com/andreik-n2/bff-sdk/commit/51df6e50244bee9f5f8d579ff6f604e1a1c853d9)) (@)
* improve Cache-Control support ([#959](https://github.com/andreik-n2/bff-sdk/issues/959)) ([1b330d5](https://github.com/andreik-n2/bff-sdk/commit/1b330d5c0207264ae0f3868276011ff9a8d83a67)) (@)
* initial impl of nats kv ([#1057](https://github.com/andreik-n2/bff-sdk/issues/1057)) ([961f1f0](https://github.com/andreik-n2/bff-sdk/commit/961f1f0d14b95fc69a9a99ef637d6cd544750c08)) (@)
* make detecting invalid operations easier ([#374](https://github.com/andreik-n2/bff-sdk/issues/374)) ([45639db](https://github.com/andreik-n2/bff-sdk/commit/45639db0ae3adb8cac4f62b623b04061118f7bf7)) (@)
* make timeout during authentication configurable ([#1018](https://github.com/andreik-n2/bff-sdk/issues/1018)) ([b5f6b74](https://github.com/andreik-n2/bff-sdk/commit/b5f6b744cd4efef456b9004b4109f7624e467f41)) (@)
* oidc,  allow passing additional query parameters to the IDP ([#178](https://github.com/andreik-n2/bff-sdk/issues/178)) ([d015bb1](https://github.com/andreik-n2/bff-sdk/commit/d015bb150762cba7a46865e66f3de633e731de07)) (@)
* orm ([#963](https://github.com/andreik-n2/bff-sdk/issues/963)) ([8cd45a3](https://github.com/andreik-n2/bff-sdk/commit/8cd45a37f139e592f579c40e266ce128b8be1b5d)) (@)
* otel instrumentation of wundernode and server ([#1004](https://github.com/andreik-n2/bff-sdk/issues/1004)) ([7b45975](https://github.com/andreik-n2/bff-sdk/commit/7b45975ca8fb41ff03cbcc84c42ec3536ad6db13)) (@)
* remove app/main from URL structure ([#335](https://github.com/andreik-n2/bff-sdk/issues/335)) ([e49e585](https://github.com/andreik-n2/bff-sdk/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/andreik-n2/bff-sdk/issues/333) (@)
* sdk, schema extension fields config ([#336](https://github.com/andreik-n2/bff-sdk/issues/336)) ([ca09b3c](https://github.com/andreik-n2/bff-sdk/commit/ca09b3cf2002763b7ea53a7d50f6dce50d08c120)) (@)
* **sdk:** ship compatible wunderctl in SDK ([#18](https://github.com/andreik-n2/bff-sdk/issues/18)) ([afea237](https://github.com/andreik-n2/bff-sdk/commit/afea23771191e049aab5ce56ce775775389e8770)) (@)
* sse subscriptions configuration ([#217](https://github.com/andreik-n2/bff-sdk/issues/217)) ([7bf72ef](https://github.com/andreik-n2/bff-sdk/commit/7bf72efd16a8bac422db32fe957e102395d7357c)) (@)
* subscriptions, ws connection init hook ([#243](https://github.com/andreik-n2/bff-sdk/issues/243)) ([2e4ae85](https://github.com/andreik-n2/bff-sdk/commit/2e4ae8506558165a9bf3ada4b8f45cee55a9f18d)) (@)
* tui + log handling ([#813](https://github.com/andreik-n2/bff-sdk/issues/813)) ([6bf7498](https://github.com/andreik-n2/bff-sdk/commit/6bf74980c69def43e4af8bdfdcc0fb5645a1025b)) (@)
* upgrade to typescript 5 ([#1135](https://github.com/andreik-n2/bff-sdk/issues/1135)) ([74cee5d](https://github.com/andreik-n2/bff-sdk/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@)
* use Prometheus to track and expose operation and API request counts ([#991](https://github.com/andreik-n2/bff-sdk/issues/991)) ([f949398](https://github.com/andreik-n2/bff-sdk/commit/f94939864c9ce7c3a9623fd5141fa486c4c9a55c)) (@)

### Bug Fixes

* allow setting logging levels from command line ([#1141](https://github.com/andreik-n2/bff-sdk/issues/1141)) ([01100b7](https://github.com/andreik-n2/bff-sdk/commit/01100b7a508eaa9c8ceb6cac5998c9f0365e5fde)) (@)
* allow to configure internal and public node urls separately ([#207](https://github.com/andreik-n2/bff-sdk/issues/207)) ([c01bd9a](https://github.com/andreik-n2/bff-sdk/commit/c01bd9a1cedefbb5fd0ecde83f3b96b3dfee6f41)) (@)
* custom int/float scalars usage in arguments ([#427](https://github.com/andreik-n2/bff-sdk/issues/427))Co-authored-by: Alberto García Hierro <alberto@garciahierro.com> Co-authored-by: Sergiy <818351+devsergiy@users.noreply.github.com> Co-authored-by: spetrunin <neyasut@gmail.com> ([2b424f3](https://github.com/andreik-n2/bff-sdk/commit/2b424f3daaabea25abb4a23139751ff0ab2adefe)) (@)
* remove conditional export, update typescript ([e1bb2ec](https://github.com/andreik-n2/bff-sdk/commit/e1bb2ecfff2e684c0caa370ea9aee021804e42c1)) (@)

### Performance Improvements

* improve config generation/loading performance ([#1070](https://github.com/andreik-n2/bff-sdk/issues/1070)) ([5ba5a7a](https://github.com/andreik-n2/bff-sdk/commit/5ba5a7a5c9302fdb73e9a6d15a82fcaf28db62fa)), closes [#1020](https://github.com/andreik-n2/bff-sdk/issues/1020) (@)

## [0.120.0](https://github.com/andreik-n2/bff-sdk/compare/@virgograph/protobuf@0.118.2...@virgograph/protobuf@0.120.0) (2025-04-07)

### Features

* **cookie:** add support for configurable cookie max length ([649c0b7](https://github.com/andreik-n2/bff-sdk/commit/649c0b71293c46e7421a281c754708befb47060f)) (@andreik-n2)

## [0.118.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.118.1...@virgograph/protobuf@0.118.2) (2023-08-21)

### Bug Fixes

* allow setting logging levels from command line ([#1141](https://github.com/wundergraph/wundergraph/issues/1141)) ([01100b7](https://github.com/wundergraph/wundergraph/commit/01100b7a508eaa9c8ceb6cac5998c9f0365e5fde)) (@fiam)

## [0.118.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.118.0...@virgograph/protobuf@0.118.1) (2023-07-28)

**Note:** Version bump only for package @virgograph/protobuf

## [0.118.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.117.0...@virgograph/protobuf@0.118.0) (2023-07-24)

### Features

* advanced hooks - dynamicTransport ([#1124](https://github.com/wundergraph/wundergraph/issues/1124)) ([6cbdeba](https://github.com/wundergraph/wundergraph/commit/6cbdebac0a775b638beeae8457d07dce829379bc)) (@Pagebakers)
* initial impl of nats kv ([#1057](https://github.com/wundergraph/wundergraph/issues/1057)) ([961f1f0](https://github.com/wundergraph/wundergraph/commit/961f1f0d14b95fc69a9a99ef637d6cd544750c08)) (@jensneuse)
* upgrade to typescript 5 ([#1135](https://github.com/wundergraph/wundergraph/issues/1135)) ([74cee5d](https://github.com/wundergraph/wundergraph/commit/74cee5db3ae8865d2bf1f1d7ab5c67fccbeeb798)) (@Pagebakers)

## [0.117.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.116.1...@virgograph/protobuf@0.117.0) (2023-07-13)

### Features

* add support for feature usage telemetry ([#1096](https://github.com/wundergraph/wundergraph/issues/1096)) ([30a0b12](https://github.com/wundergraph/wundergraph/commit/30a0b129899d8296aa6a027d1ecafde469a0ead2)) (@fiam)

## [0.116.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.116.0...@virgograph/protobuf@0.116.1) (2023-06-21)

### Performance Improvements

* improve config generation/loading performance ([#1070](https://github.com/wundergraph/wundergraph/issues/1070)) ([5ba5a7a](https://github.com/wundergraph/wundergraph/commit/5ba5a7a5c9302fdb73e9a6d15a82fcaf28db62fa)), closes [#1020](https://github.com/wundergraph/wundergraph/issues/1020) (@fiam)

## [0.116.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.115.0...@virgograph/protobuf@0.116.0) (2023-06-01)

### Features

* otel instrumentation of wundernode and server ([#1004](https://github.com/wundergraph/wundergraph/issues/1004)) ([7b45975](https://github.com/wundergraph/wundergraph/commit/7b45975ca8fb41ff03cbcc84c42ec3536ad6db13)) (@StarpTech)

## [0.115.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.114.0...@virgograph/protobuf@0.115.0) (2023-05-31)

### Features

* make timeout during authentication configurable ([#1018](https://github.com/wundergraph/wundergraph/issues/1018)) ([b5f6b74](https://github.com/wundergraph/wundergraph/commit/b5f6b744cd4efef456b9004b4109f7624e467f41)) (@fiam)

## [0.114.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.113.0...@virgograph/protobuf@0.114.0) (2023-05-26)

### Features

* use Prometheus to track and expose operation and API request counts ([#991](https://github.com/wundergraph/wundergraph/issues/991)) ([f949398](https://github.com/wundergraph/wundergraph/commit/f94939864c9ce7c3a9623fd5141fa486c4c9a55c)) (@fiam)

## [0.113.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.112.0...@virgograph/protobuf@0.113.0) (2023-05-25)

### Features

* improve Cache-Control support ([#959](https://github.com/wundergraph/wundergraph/issues/959)) ([1b330d5](https://github.com/wundergraph/wundergraph/commit/1b330d5c0207264ae0f3868276011ff9a8d83a67)) (@fiam)

## [0.112.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.111.0...@virgograph/protobuf@0.112.0) (2023-05-15)

### Features

* orm ([#963](https://github.com/wundergraph/wundergraph/issues/963)) ([8cd45a3](https://github.com/wundergraph/wundergraph/commit/8cd45a37f139e592f579c40e266ce128b8be1b5d)) (@Pagebakers)

## [0.111.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.110.0...@virgograph/protobuf@0.111.0) (2023-05-12)

### Features

* add support for caching in function handlers ([#932](https://github.com/wundergraph/wundergraph/issues/932)) ([ce31c4c](https://github.com/wundergraph/wundergraph/commit/ce31c4c02cbfd121886cf4c8a0fe354ac19ed340)) (@fiam)

## [0.110.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.109.0...@virgograph/protobuf@0.110.0) (2023-05-03)

### Features

* add support for custom claims of any type ([#911](https://github.com/wundergraph/wundergraph/issues/911)) ([c6f14f8](https://github.com/wundergraph/wundergraph/commit/c6f14f8d91db8bc908a85b20c6ef8f8561698078)) (@fiam)

## [0.109.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.108.0...@virgograph/protobuf@0.109.0) (2023-04-24)

### Features

* add support for using proxies in data sources ([#854](https://github.com/wundergraph/wundergraph/issues/854)) ([a472c46](https://github.com/wundergraph/wundergraph/commit/a472c463d6dbcb20b48444fdd4ce9c797c16feb2)) (@fiam)

## [0.108.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.107.0...@virgograph/protobuf@0.108.0) (2023-04-19)

### Features

* implement internal graphql handler ([#853](https://github.com/wundergraph/wundergraph/issues/853)) ([ad42f5f](https://github.com/wundergraph/wundergraph/commit/ad42f5f9f23a0e6ec968a1c5fefb226f2b46254a)) (@thisisnithin)

## [0.107.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.106.1...@virgograph/protobuf@0.107.0) (2023-04-12)

### Features

* tui + log handling ([#813](https://github.com/wundergraph/wundergraph/issues/813)) ([6bf7498](https://github.com/wundergraph/wundergraph/commit/6bf74980c69def43e4af8bdfdcc0fb5645a1025b)) (@StarpTech)

## [0.106.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.106.0...@virgograph/protobuf@0.106.1) (2023-03-16)

### Bug Fixes

* custom int/float scalars usage in arguments ([#427](https://github.com/wundergraph/wundergraph/issues/427))Co-authored-by: Alberto García Hierro <alberto@garciahierro.com> Co-authored-by: Sergiy <818351+devsergiy@users.noreply.github.com> Co-authored-by: spetrunin <neyasut@gmail.com> ([2b424f3](https://github.com/wundergraph/wundergraph/commit/2b424f3daaabea25abb4a23139751ff0ab2adefe)) (@OLingard)

## [0.106.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.105.0...@virgograph/protobuf@0.106.0) (2023-03-06)

### Features

* add support for declaring a list of public claims ([#706](https://github.com/wundergraph/wundergraph/issues/706)) ([2223d5c](https://github.com/wundergraph/wundergraph/commit/2223d5c02f1eadaad7ecb6ac863bb2f9e34c926c)) (@fiam)
* add support for injecting variables into nested paths ([#678](https://github.com/wundergraph/wundergraph/issues/678)) ([ce0a0a0](https://github.com/wundergraph/wundergraph/commit/ce0a0a09b4e739767b17f1ad391074f6ba597253)) (@fiam)

## [0.105.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.104.0...@virgograph/protobuf@0.105.0) (2023-02-10)

### Features

* add support for custom claims ([#648](https://github.com/wundergraph/wundergraph/issues/648) ([682b88c](https://github.com/wundergraph/wundergraph/commit/682b88c115512878aa22b57d4ed67c07fd88726b)) (@fiam)

## [0.104.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.103.0...@virgograph/protobuf@0.104.0) (2023-02-03)

### Features

* add support for uploads from anonymous users ([#632](https://github.com/wundergraph/wundergraph/issues/632)) ([485975b](https://github.com/wundergraph/wundergraph/commit/485975be55a8c1c82a4610431c7514d3c3c2dfe0)) (@fiam)

## [0.103.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.102.0...@virgograph/protobuf@0.103.0) (2023-01-30)

### Features

* add prisma datasource ([#605](https://github.com/wundergraph/wundergraph/issues/605)) ([2f0cfa5](https://github.com/wundergraph/wundergraph/commit/2f0cfa5e420080772a6552f4a256c7d71906f84a)) (@jensneuse)

## [0.102.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.101.0...@virgograph/protobuf@0.102.0) (2023-01-20)

### Features

* add upload profiles for S3 providers ([#476](https://github.com/wundergraph/wundergraph/issues/476)) ([6144545](https://github.com/wundergraph/wundergraph/commit/614454539133c7f235aea6aa72ade36059f41c97)) (@fiam)

## [0.101.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.100.0...@virgograph/protobuf@0.101.0) (2023-01-17)

### Features

* add support for disconnecting from Auth0 ([#525](https://github.com/wundergraph/wundergraph/issues/525)) ([7465fb2](https://github.com/wundergraph/wundergraph/commit/7465fb21a3618924c7dfb59a6a2f94c7d740f0f8)) (@fiam)

## [0.100.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.99.0...@virgograph/protobuf@0.100.0) (2022-12-06)

### Features

* make detecting invalid operations easier ([#374](https://github.com/wundergraph/wundergraph/issues/374)) ([45639db](https://github.com/wundergraph/wundergraph/commit/45639db0ae3adb8cac4f62b623b04061118f7bf7)) (@fiam)

## [0.99.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.98.0...@virgograph/protobuf@0.99.0) (2022-11-18)

### Features

* remove app/main from URL structure ([#335](https://github.com/wundergraph/wundergraph/issues/335)) ([e49e585](https://github.com/wundergraph/wundergraph/commit/e49e585528297126b93958105e80b68f1943d781)), closes [#333](https://github.com/wundergraph/wundergraph/issues/333) (@fiam)
* sdk, schema extension fields config ([#336](https://github.com/wundergraph/wundergraph/issues/336)) ([ca09b3c](https://github.com/wundergraph/wundergraph/commit/ca09b3cf2002763b7ea53a7d50f6dce50d08c120)) (@YuriBuerov)

## [0.98.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.97.0...@virgograph/protobuf@0.98.0) (2022-11-04)

### Features

* eng 640 compose subgraphs without apollo dependencies ([#315](https://github.com/wundergraph/wundergraph/issues/315)) ([628a183](https://github.com/wundergraph/wundergraph/commit/628a18303acb47df5a10118b17a4e88916b2903a)) (@jensneuse)

## [0.97.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.96.0...@virgograph/protobuf@0.97.0) (2022-10-18)

### Features

* add configurable per-source timeouts ([#232](https://github.com/wundergraph/wundergraph/issues/232)) ([bb3b6bd](https://github.com/wundergraph/wundergraph/commit/bb3b6bd31250b402fe0c9a099b0dad993976cf39)) (@fiam)
* subscriptions, ws connection init hook ([#243](https://github.com/wundergraph/wundergraph/issues/243)) ([2e4ae85](https://github.com/wundergraph/wundergraph/commit/2e4ae8506558165a9bf3ada4b8f45cee55a9f18d)) (@YuriBuerov)

## [0.96.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.95.0...@virgograph/protobuf@0.96.0) (2022-09-29)

### Features

* sse subscriptions configuration ([#217](https://github.com/wundergraph/wundergraph/issues/217)) ([7bf72ef](https://github.com/wundergraph/wundergraph/commit/7bf72efd16a8bac422db32fe957e102395d7357c)) (@YuriBuerov)

### Bug Fixes

* allow to configure internal and public node urls separately ([#207](https://github.com/wundergraph/wundergraph/issues/207)) ([c01bd9a](https://github.com/wundergraph/wundergraph/commit/c01bd9a1cedefbb5fd0ecde83f3b96b3dfee6f41)) (@spetrunin)

## [0.95.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.94.0...@virgograph/protobuf@0.95.0) (2022-09-21)

### Features

* add post logout hook ([#196](https://github.com/wundergraph/wundergraph/issues/196)) ([6870130](https://github.com/wundergraph/wundergraph/commit/6870130b0c4e6fc269d81160994384c1d1cf6e59)) (@jensneuse)

## [0.94.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.93.0...@virgograph/protobuf@0.94.0) (2022-09-19)

### Features

* implement config first approach ([#151](https://github.com/wundergraph/wundergraph/issues/151)) ([803da0e](https://github.com/wundergraph/wundergraph/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/wundergraph/wundergraph/issues/190) (@spetrunin)

## [0.93.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.92.0...@virgograph/protobuf@0.93.0) (2022-09-14)

### Features

* oidc,  allow passing additional query parameters to the IDP ([#178](https://github.com/wundergraph/wundergraph/issues/178)) ([d015bb1](https://github.com/wundergraph/wundergraph/commit/d015bb150762cba7a46865e66f3de633e731de07)) (@YuriBuerov)

## [0.92.0](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.91.3...@virgograph/protobuf@0.92.0) (2022-09-01)

### Features

* implement userId for fromClaim directive ([#152](https://github.com/wundergraph/wundergraph/issues/152)) ([51df6e5](https://github.com/wundergraph/wundergraph/commit/51df6e50244bee9f5f8d579ff6f604e1a1c853d9)) (@jensneuse)

## [0.91.3](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.91.2...@virgograph/protobuf@0.91.3) (2022-08-29)

**Note:** Version bump only for package @virgograph/protobuf

## [0.91.2](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.91.1...@virgograph/protobuf@0.91.2) (2022-08-18)

**Note:** Version bump only for package @virgograph/protobuf

## [0.91.1](https://github.com/wundergraph/wundergraph/compare/@virgograph/protobuf@0.91.0...@virgograph/protobuf@0.91.1) (2022-06-02)

**Note:** Version bump only for package @virgograph/protobuf

## 0.91.0

### Minor Changes

- [#18](https://github.com/wundergraph/wundergraph/pull/18) [`afea237`](https://github.com/wundergraph/wundergraph/commit/afea23771191e049aab5ce56ce775775389e8770) Thanks [@StarpTech](https://github.com/StarpTech)! - move wunderctl / go binary into local node_modules

## 0.90.1

### Patch Changes

- [`0857db3`](https://github.com/wundergraph/wundergraph/commit/0857db3d55209fb878fe6326629b125c6f2d2315) Thanks [@StarpTech](https://github.com/StarpTech)! - publish dist folder
