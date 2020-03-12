---
title:  Day Night Switcher
name:  Day Night Switcher
category: Free
tag: dark
excerpt: A simple day / night switcher widget made in pure Dart. Allows to quickly show a beautiful dark mode switcher widget to your users.
teaser: https://raw.githubusercontent.com/Skyost/DayNightSwitcher/master/screenshots/preview.gif
github: https://github.com/Skyost/DayNightSwitcher
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 4.5
version: NA
last_updated: Mar 12, 2020
owner:
 profile_image: https://avatars1.githubusercontent.com/u/3882599?v=4
 name: Skyost
 url: https://github.com/Skyost
contributors:
 -
   image: https://avatars1.githubusercontent.com/u/3882599?v=4
   url: https://github.com/Skyost
registered_by:
 image: https://avatars1.githubusercontent.com/u/3882599?v=4
 url: https://github.com/Skyost
 on_date: Mar 8th 20
layout: fa_project
---
# DayNightSwitcher

Just a simple simple day / night switcher widget made in pure Dart.
It allows you to quickly show a beautiful dark mode switcher widget to your users.

<img src="https://github.com/Skyost/DayNightSwitcher/raw/master/screenshots/preview.gif" height="500">

## How to use ?

Using this plugin is pretty straightforward. You have two widgets : `DayNightSwitcher` and `DayNightSwitcherIcon`.

Here's a sample code for `DayNightSwitcher` :

```dart
DayNightSwitcher(
  isDarkModeEnabled: isDarkModeEnabled,
  onStateChanged: (isDarkModeEnabled) {
    setState(() {
      this.isDarkModeEnabled = isDarkModeEnabled;
    });
  },
),
```

The other one is very similar :

```dart
DayNightSwitcherIcon(
  isDarkModeEnabled: isDarkModeEnabled,
  onStateChanged: (isDarkModeEnabled) {
    setState(() {
      this.isDarkModeEnabled = isDarkModeEnabled;
    });
  },
),
```

## Contributions

You have a lot of options to contribute to this project ! You can :

* [Fork it](https://github.com/Skyost/DayNightSwitcher/fork) on Github.
* [Submit](https://github.com/Skyost/DayNightSwitcher/issues/new/choose) a feature request or a bug report.
* [Donate](https://paypal.me/Skyost) to the developer.
* [Watch a little ad](https://utip.io/skyost) on uTip.