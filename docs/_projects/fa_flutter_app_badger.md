---
title: flutter_app_badger
name: flutter_app_badger
category: Free
tag: flutter
excerpt: "Support to update the app badge on the launcher (both for Android and iOS)"
github: https://github.com/g123k/flutter_app_badger
license:
 name: Apache License 2.0
 url: http://choosealicense.com/licenses/apache-2.0/
rating: 5
version: NA
last_updated: Jun 26, 2019
owner:
 profile_image: https://avatars1.githubusercontent.com/u/246838?v=4
 name: g123k
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars1.githubusercontent.com/u/246838?v=4
   url: https://github.com/g123k
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# Flutter App Badger plugin

This plugin for [Flutter](https://flutter.io) adds the ability to change the badge of the app in the launcher.
It supports iOS and some Android devices (the official API does not support the feature, even on Oreo).

<p align="center">
  <img src="https://raw.githubusercontent.com/g123k/flutter_app_badger/master/assets/ios.png" alt="Android badge" style="margin:auto" width="600" 
height="228">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/g123k/flutter_app_badger/master/assets/android.png" alt="Android badge" style="margin:auto" width="600" 
height="322">
</p>


## Getting Started

### iOS

On iOS, the notification permission is required to update the badge.
It is automatically asked when the badge is added or removed.

Please also add the following to your Info.plist:
```xml
<key>UIBackgroundModes</key>
    <array>
        <string>remote-notification</string>
    </array>
```


### Android

On Android, no official API exists to show a badge in the launcher. But some devices (Samsung, HTC...) support the feature.
Thanks to the [Shortcut Badger library](https://github.com/leolin310148/ShortcutBadger/), ~ 16 launchers are supported.


### Dart

First, you just have to import the package in your dart files with:
```dart
import 'package:flutterappbadger/flutterappbadger.dart';
```

Then you can add a badge:
```dart
FlutterAppBadger.updateBadgeCount(1);
```

Remove a badge:
```dart
FlutterAppBadger.removeBadge();
```

Or just check if the device supports this feature with:
```dart
FlutterAppBadger.isAppBadgeSupported();
```
