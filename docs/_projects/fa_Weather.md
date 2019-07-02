---
title: Weather
name: Weather
category: Free
tag: flutter
excerpt: "A weather app built to learn how to use Canvas and Animation in Flutter."
github: https://github.com/alessandroaime/Weather
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 5
version: NA
last_updated: Jun 29, 2019
owner:
 profile_image: https://avatars3.githubusercontent.com/u/12168310?v=4
 name: alessandroaime
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars3.githubusercontent.com/u/12168310?v=4
   url: https://github.com/alessandroaime
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# Weather

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quick Disclaimer

I removed my private OpenWeather API key from the repo, if you want to get the weather forecast use your own in the `openweather_api.dart` file (more info at [https://openweathermap.org/appid](https://openweathermap.org/appid)).

## Back to the app

*I started from scatch with Flutter and Dart two weeks ago (2018/02/02), a refactoring is needed due to the ugliness of the current code since my main purpose is/was to learn them at first.*

The idea behind this weather application (currently only the login page) is to learn how to use Canvas and Animation in Flutter.

It all started from an [inspirational mockup](https://dribbble.com/shots/2695917-Weather-Login-App) two days ago, and here's the *current* result:

![test](./README/comparison.jpg)

The background has been entirely coded (see [`header_painter.dart`](https://github.com/alessandroaime/Weather/blob/master/lib/header_painter.dart)) except for the deer image, which has been **temporarily** appended using the `Stack` widget rather than painting it.

Enjoy it!
