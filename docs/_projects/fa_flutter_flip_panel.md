---
title: flutter_flip_panel
name: flutter_flip_panel
category: Free
tag: flutter
excerpt: "A package for flip panel with built-in animation"
github: https://github.com/hnvn/flutter_flip_panel
license:
 name: BSD 3-Clause "New" or "Revised" License
 url: http://choosealicense.com/licenses/bsd-3-clause/
rating: 5
version: NA
last_updated: Jun 28, 2019
owner:
 profile_image: https://avatars2.githubusercontent.com/u/5468513?v=4
 name: hnvn
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars0.githubusercontent.com/u/2112792?v=4
   url: https://github.com/efortuna
 -
   image: https://avatars2.githubusercontent.com/u/5468513?v=4
   url: https://github.com/hnvn
 -
   image: https://avatars2.githubusercontent.com/u/32139782?v=4
   url: https://github.com/gsunit
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# Flip Panel

[![pub package](https://img.shields.io/pub/v/flip_panel.svg)](https://pub.dartlang.org/packages/flip_panel) [![Build Status](https://travis-ci.org/hnvn/flutter_flip_panel.svg?branch=master)](https://travis-ci.org/hnvn/flutter_flip_panel)

A package for flip panel with built-in animation

<p>
	<img src="https://github.com/hnvn/flutter_flip_panel/blob/master/screenshots/flip_image.gif?raw=true" width="250" height="443"  />
	<img src="https://github.com/hnvn/flutter_flip_panel/blob/master/screenshots/flip_clock.gif?raw=true" width="250" height="443" />
</p>

## How to use

````dart
import 'package:flip_panel/flip_panel.dart';
````

Create a flip panel from iterable source:

````dart
final digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

FlipPanel.builder(
    itemBuilder: (context, index) => Container(
       color: Colors.black,
       padding: const EdgeInsets.symmetric(horizontal: 6.0),
       child: Text(
         '${digits[index]}',
         style: TextStyle(
             fontWeight: FontWeight.bold,
             fontSize: 50.0,
             color: Colors.white),
       ),
     ),
    itemsCount: digits.length,
    period: const Duration(milliseconds: 1000),
    loop: 1,
)
````

Create a flip panel from stream source:

````dart
FlipPanel<int>.stream(
      itemStream: Stream.periodic(Duration(milliseconds: 1000), (count) => count % 10),
      itemBuilder: (context, value) => Container(
        color: Colors.black,
        padding: const EdgeInsets.symmetric(horizontal: 6.0),
        child: Text(
          '$value',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 50.0,
            color: Colors.white
          ),
        ),
      ),
      initValue: 0,
  );

````


