---
title:  Dalocale
name:  Dalocale
category: Free
tag: localization
excerpt: A Flutter package to easily support internationalization and localization in your project.
teaser: 
github: https://github.com/mauriciotogneri/dalocale
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 3
version: NA
last_updated: Aug 19, 2019
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
# Dalocale

A **Flutter** package to easily support internationalization and localization in your project.

## Installation

Add the following dependencies to your `pubspec.yaml`:

```yaml
dependencies: 
  flutter_localizations: 
    sdk: flutter 

dev_dependencies:
  dalocale: ^1.7.0
```

## Example

### Creating localization files

Create a folder to store all the localizations in **json** format. The name of each file should match the locale that is representing. For example:

```
└─ assets
   └─ i18n
      ├─ en.json
      └─ es.json
```

Each localization file must contain a single **json** object with all the keys and values. For example:

```json
{
    "greetings": "Hello, world!",
    "welcome.back": "Welcome back: %1$s"
}
```

In the previous example, the key `welcome.back` contains a value with a parameter.

### Parameters

Parameters inside of localized text must be declared as `%index$format`, where:

* **index**: the position of the parameter in the text (starting from 1)
* **format**: the format of the parameter (e.g. `s`, `d`, `f`, etc.)

### Generating Dart code

To generate the **Dart** file containing all the localizations, run the following command:

```bash
flutter pub pub run dalocale:dalocale.dart INPUT_FOLDER OUTPUT_FILE [DEFAULT_LOCALE] [LIB_FOLDER]
```

For example:

```bash
flutter pub pub run dalocale:dalocale.dart ./assets/i18n/ ./lib/foo/bar/localizations.dart en ./lib
```

The `LIB_FOLDER` parameter is used to check for unused keys in the project.

### Using generated code

In you `main.dart` file, add the auto-generated classes `CustomLocalizationsDelegate` and `Localized` to the app:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_library/foo/bar/localizations.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ...,
      localizationsDelegates: const [
        CustomLocalizationsDelegate(),
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: Localized.locales,
    );
  }
}
```

You can use the class `Localized` to have access to all the entries declared in the **json** files:

```dart
Text(Localized.get.greetings)
```

```dart
Text(Localized.get.welcomeBack('John'))
```

To get the current active locale in the app:

```dart
Locale locale = Localized.current;
```