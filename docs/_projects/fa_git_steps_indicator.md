---
title:  steps_indicator
name:  steps_indicator
category: Free
tag: steps line
excerpt: Display a fully customizable steps line widget
teaser: https://raw.githubusercontent.com/huextrat/steps_indicator/master/example/screenshot.png
github: https://github.com/huextrat/steps_indicator
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 4.5
version: NA
last_updated: Jan 27, 2020
owner:
 profile_image: https://avatars3.githubusercontent.com/u/22995315?v=4
 name: huextrat
 url: https://github.com/huextrat
contributors:
 -
   image: https://avatars3.githubusercontent.com/u/22995315?v=4
   url: https://github.com/huextrat
registered_by:
 image: https://avatars3.githubusercontent.com/u/22995315?v=4
 url: https://github.com/huextrat
 on_date: Jan 21st 20
layout: fa_project
---
# steps_indicator

[![pub package](https://img.shields.io/pub/v/steps_indicator.svg?style=for-the-badge&color=blue)](https://pub.dartlang.org/packages/steps_indicator)

A simple steps indicator widget

## Installation

Add `steps_indicator: ^0.3.1` in your `pubspec.yaml` dependencies. And import it:

```dart
import 'package:steps_indicator/steps_indicator.dart';
```

## How to use

Simply create a `StepsIndicator` widget and pass the required params:

```dart
StepsIndicator(
  selectedStep: 1,
  nbSteps: 4
)
```

Do not forget to check that the selectedStep is not lower than 0 and is not higher than the total number of steps (nbSteps).

## Params

```dart
StepsIndicator(
  selectedStep: 1,
  nbSteps: 4,
  selectedStepColorOut: Colors.blue,
  selectedStepColorIn: Colors.white,
  doneStepColor: Colors.blue,
  unselectedStepColor: Colors.red,
  doneLineColor: Colors.blue,
  undoneLineColor: Colors.red,
  isHorizontal: true,
  lineLength: 40,
  lineThickness: 1,
  doneStepSize: 10,
  unselectedStepSize: 10,
  selectedStepSize: 14,
  selectedStepBorderSize: 1,
  doneStepWidget: Container(), // Custom Widget 
  unselectedStepWidget: Container(), // Custom Widget 
  selectedStepWidget: Container(), // Custom Widget 
)
```

For a more detail example please take a look at the `example` folder.

## Example

Steps indicator:

<img src="https://raw.githubusercontent.com/huextrat/steps_indicator/master/example/screenshot.png" width="400" height="790">

## -

If something is missing, feel free to open a ticket or contribute!
