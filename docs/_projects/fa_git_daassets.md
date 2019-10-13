---
title:  Daassets 
name:  Daassets 
category: Free
tag: assets generator
excerpt: A Flutter package to automatically generate a class containing references to all assets in your project.
teaser: 
github: https://github.com/mauriciotogneri/daassets
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 3
version: NA
last_updated: Sep 06, 2019
owner:
 profile_image: https://avatars3.githubusercontent.com/u/619593?v=4
 name: mauriciotogneri
 url: https://github.com/mauriciotogneri
contributors:
 -
   image: https://avatars3.githubusercontent.com/u/619593?v=4
   url: https://github.com/mauriciotogneri
registered_by:
 image: https://avatars3.githubusercontent.com/u/619593?v=4
 url: https://github.com/mauriciotogneri
 on_date: Oct 13th 19
layout: fa_project
---
# Daassets

A **Flutter** package to automatically generate a class containing references to all assets in your project.

## Installation

Add the following dependencies to your `pubspec.yaml`:

```yaml
dev_dependencies:
  daassets: ^1.0.0
```

## Example

#### Define your assets

In your **pubspec.yaml** file:

```yaml
flutter:

  assets:

    - assets/icon/            # imports all files in that directory
    - assets/icon/close.png   # imports that specific file
```

#### Generating Dart code

To generate the **Dart** file containing all assets, run the following command:

```bash
flutter pub pub run daassets:daassets.dart PUBSPEC_FILE_PATH OUTPUT_FILE_PATH
```

For example:

```bash
flutter pub pub run daassets:daassets.dart ./pubspec.yaml ./lib/assets.dart
```

#### Using generated code

The generated class contains static constants that you can use anywhere in your project.

```dart
Image.asset(Assets.ICON_CLOSE);
```