---
title: flutter_radial_menu
name: flutter_radial_menu
category: Free
tag: menu bar
excerpt: A radial menu widget for Flutter.
teaser: https://raw.githubusercontent.com/xqwzts/flutter_radial_menu/master/screenshots/demo.gif
github: https://github.com/xqwzts/flutter_radial_menu
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 5
version: NA
last_updated: Jul 10, 2019
owner:
 profile_image: https://avatars1.githubusercontent.com/u/798935?v=4
 name: xqwzts
 url: https://github.com/xqwzts
contributors:
 -
   image: https://avatars1.githubusercontent.com/u/798935?v=4
   url: https://github.com/xqwzts
registered_by:
 image: https://avatars3.githubusercontent.com/u/20480867?v=4
 url: https://github.com/IAmSarthakVerma
 on_date: Jul 14th 19
layout: fa_project
---
[![pub package](https://img.shields.io/pub/v/flutter_radial_menu.svg)](https://pub.dartlang.org/packages/flutter_radial_menu) 

# flutter_radial_menu

A radial menu widget for Flutter.

![](screenshots/demo.gif).

## Installation

Install the latest version [from pub](https://pub.dartlang.org/packages/flutter_radial_menu#-installing-tab-).

## Quick Start

Import the package, create a `RadialMenu` and pass it your `RadialMenuItems`.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_radial_menu/flutter_radial_menu.dart';

void main() {
  runApp(
    new MaterialApp(
      home: new Scaffold(
        body: new Center(
          child: new RadialMenu(
            items: <RadialMenuItem<int>>[
              const RadialMenuItem<int>(
                value: 1,
                child: const Icon(Icons.add),
              ),
              const RadialMenuItem<int>(
                value: -1,
                child: const Icon(Icons.remove),
              )
            ],
            radius: 100.0,
            onSelected: print,
          ),
        ),
      ),
    ),
  );
}
```

![](screenshots/simple_example.gif)

---

Take a look at the [demo](example/demo.dart) for a more elaborate example.

---

## Customization

### RadialMenuItem

| Parameter       | Default                                  | Description                                                      |
|-----------------|------------------------------------------|------------------------------------------------------------------|
| child           | null                                     | Usually an Icon widget, gets placed in the center of the button. |
| value           | null                                     | Value that gets returned when this item is selected.             |
| tooltip         | null                                     | Tooltip displayed when the button is long-pressed.               |
| size            | 48.0                                     | Size of the button.                                              |
| backgroundColor | Theme.of(context).primaryColor           | Background fill color of the button.                             |
| iconColor       | Theme.of(context).primaryIconTheme.color | The color of the child icon.                                     |

### RadialMenu

| Parameter                 | Default           | Description                                                                |
|---------------------------|-------------------|----------------------------------------------------------------------------|
| items                     | null              | The list of possible items to select from.                                 |
| onSelected                | null              | Called when the user selects an item.                                      |
| radius                    | 100.0             | The radius of the arc used to lay out the items and draw the progress bar. |
| menuAnimationDuration     | 1000 milliseconds | Duration of the menu opening/closing animation.                            |
| progressAnimationDuration | 1000 milliseconds | Duration of the action activation progress arc animation.                  |
