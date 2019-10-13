---
title:  Dapackages 
name:  Dapackages 
category: Free
tag: packages updater
excerpt: A Flutter package to automatically update your pubspec dependencies in your project.
teaser: 
github: https://github.com/mauriciotogneri/dapackages
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 3
version: NA
last_updated: Sep 07, 2019
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
# Dapackages

A *Flutter* package to automatically update your pubspec dependencies in your project.

## Installation

Add the following dependencies to your `pubspec.yaml`:

```yaml
dev_dependencies:
  dapackages: ^1.0.0
```

#### Run the updater

```bash
flutter pub pub run dapackages:dapackages.dart PUBSPEC_FILE_PATH
```

For example:

```bash
flutter pub pub run dapackages:dapackages.dart ./pubspec.yaml
```