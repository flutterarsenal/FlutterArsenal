---
title: mmkv_flutter
name: mmkv_flutter
category: Free
tag: ""
excerpt: "get or set persistent storage value based on MMKV framework."
github: https://github.com/OpenFlutter/mmkv_flutter
license:
 name: GNU General Public License v3.0
 url: http://choosealicense.com/licenses/gpl-3.0/
rating: 5
version: NA
last_updated: Jul 02, 2019
owner:
 profile_image: https://avatars3.githubusercontent.com/u/42670328?v=4
 name: OpenFlutter
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars1.githubusercontent.com/u/5681447?v=4
   url: https://github.com/imknown
 -
   image: https://avatars2.githubusercontent.com/u/8936260?v=4
   url: https://github.com/yuyongmao
 -
   image: https://avatars3.githubusercontent.com/u/10418364?v=4
   url: https://github.com/yohom
 -
   image: https://avatars3.githubusercontent.com/u/11608487?v=4
   url: https://github.com/JarvanMo
 -
   image: https://avatars0.githubusercontent.com/u/14145407?v=4
   url: https://github.com/CaiJingLong
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# mmkv_flutter

Plugin that allow Flutter to read  value from persistent storage or save value to persistent storage based on MMKV framework

## Getting Started

Open terminal, cd to your project directory, run pod repo update to make CocoaPods aware of the latest available MMKV versions

## Quick Tutorial

```dart

  MmkvFlutter mmkv = await MmkvFlutter.getInstance();

  mmkv.setBool('boolKey', true);
  print('get bool value is ${ await mmkv.getBool('boolKey')}');
  
  int counter = await mmkv.getInt('intKey') + 1;
  print('GetSetIntTest value is $counter ');
  await mmkv.setInt('intKey', counter);
  
  String stringtest = await mmkv.getString('stringKey') + '1';
  print('GetSetStringTest value is $stringtest');
  await mmkv.setString('stringKey', stringtest);

```