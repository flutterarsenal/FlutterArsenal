---
title: flutter_qrcode_reader
name: flutter_qrcode_reader
category: Free
tag: android
excerpt: "Flutter qrcode reader"
github: https://github.com/bcko/flutter_qrcode_reader
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 5
version: NA
last_updated: Jul 02, 2019
owner:
 profile_image: https://avatars1.githubusercontent.com/u/6230110?v=4
 name: bcko
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars0.githubusercontent.com/u/609497?v=4
   url: https://github.com/johanhenselmans
 -
   image: https://avatars1.githubusercontent.com/u/694953?v=4
   url: https://github.com/cah4a
 -
   image: https://avatars0.githubusercontent.com/u/959433?v=4
   url: https://github.com/tamcy
 -
   image: https://avatars2.githubusercontent.com/u/2467936?v=4
   url: https://github.com/villela
 -
   image: https://avatars2.githubusercontent.com/u/6097822?v=4
   url: https://github.com/nikandfor
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# QRCode Reader plugin for Flutter

A Flutter plugin for reading QR Codes with the camera.

### Example

``` dart
import 'package:qrcode_reader/qrcode_reader.dart';
```

``` dart
Future<String> futureString = new QRCodeReader()
               .setAutoFocusIntervalInMs(200) // default 5000
               .setForceAutoFocus(true) // default false
               .setTorchEnabled(true) // default false
               .setHandlePermissions(true) // default true
               .setExecuteAfterPermissionGranted(true) // default true
               .setFrontCamera(false) // default false
               .scan();
```

These options are Android only (with the exception of setFrontCamera(bool)), this is the simplest way of plugin usage:
``` dart
Future<String> futureString = new QRCodeReader().scan();
```
