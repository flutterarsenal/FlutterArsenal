---
title: Flutter Circular Chart
name: Flutter Circular Chart
category: Free
teaser: https://raw.githubusercontent.com/xqwzts/flutter_circular_chart/master/screenshots/animated_random_radial_chart_example.gif
tag: "charting"
excerpt: Animated radial and pie charts for Flutter
github: https://github.com/xqwzts/flutter_circular_chart
license: 
  name: MIT License
  url: http://choosealicense.com/licenses/mit/

download_url:
version: "v0.1.0"
rating: 4.5
registered_by:
  image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
  url: https://github.com/karx
  on_date: "July 1, 2019"
badge:
last_updated: "June 28, 2019"

owner: 
  profile_image: https://avatars1.githubusercontent.com/u/798935?v=4
  name: Victor Choueiri
  
contributors:
  - image: https://avatars1.githubusercontent.com/u/798935?v=4
    url: https://github.com/xqwzts
  - image: https://avatars2.githubusercontent.com/u/35339163?v=4
    url: https://github.com/rkc13
  
layout: fa_project

---
[![pub package](https://img.shields.io/pub/v/flutter_circular_chart.svg)](https://pub.dartlang.org/packages/flutter_circular_chart)

# Flutter Circular Chart

A library for creating animated circular chart widgets with Flutter, inspired by [Zero to One with Flutter](https://medium.com/dartlang/zero-to-one-with-flutter-43b13fd7b354).

## Overview

Create easily animated pie charts and radial charts by providing them with data objects they can plot into charts and animate between.

![animated_random_radial_chart](screenshots/animated_random_radial_chart_example.gif)

![animated pie chart](screenshots/animated_pie_chart_example.gif)
![animated radial chart](screenshots/animated_radial_chart_example_label.gif)

Check the examples folder for the source code for the above screenshots.

## Contents:
- [Flutter Circular Chart](#Flutter-Circular-Chart)
  - [Overview](#Overview)
  - [Contents:](#Contents)
  - [Installation](#Installation)
  - [Getting Started](#Getting-Started)
  - [Customization](#Customization)
    - [Hole Label:](#Hole-Label)
    - [Segment Edge Style:](#Segment-Edge-Style)
  - [Details](#Details)
    - [Chart data entries:](#Chart-data-entries)

## Installation

Install the latest version [from pub](https://pub.dartlang.org/packages/flutter_circular_chart#-installing-tab-).

## Getting Started

Import the package:

```dart
import 'package:flutter_circular_chart/flutter_circular_chart.dart';
```

Create a [GlobalKey](https://docs.flutter.io/flutter/widgets/GlobalKey-class.html) to be able to access the chart and update its data:

```dart
final GlobalKey<AnimatedCircularChartState> _chartKey = new GlobalKey<AnimatedCircularChartState>();
```

Create chart data entry objects:

```dart
List<CircularStackEntry> data = <CircularStackEntry>[
  new CircularStackEntry(
    <CircularSegmentEntry>[
      new CircularSegmentEntry(500.0, Colors.red[200], rankKey: 'Q1'),
      new CircularSegmentEntry(1000.0, Colors.green[200], rankKey: 'Q2'),
      new CircularSegmentEntry(2000.0, Colors.blue[200], rankKey: 'Q3'),
      new CircularSegmentEntry(1000.0, Colors.yellow[200], rankKey: 'Q4'),
    ],
    rankKey: 'Quarterly Profits',
  ),
];
```

Create an `AnimatedCircularChart`, passing it the `_chartKey` and initial `data`:

```dart
@override
Widget build(BuildContext context) {
  return new AnimatedCircularChart(
    key: _chartKey,
    size: const Size(300.0, 300.0),
    initialChartData: data,
    chartType: CircularChartType.Pie,
  );
}
```

Call `updateData` to animate the chart:

```dart
void _cycleSamples() {
  List<CircularStackEntry> nextData = <CircularStackEntry>[
    new CircularStackEntry(
      <CircularSegmentEntry>[
        new CircularSegmentEntry(1500.0, Colors.red[200], rankKey: 'Q1'),
        new CircularSegmentEntry(750.0, Colors.green[200], rankKey: 'Q2'),
        new CircularSegmentEntry(2000.0, Colors.blue[200], rankKey: 'Q3'),
        new CircularSegmentEntry(1000.0, Colors.yellow[200], rankKey: 'Q4'),
      ],
      rankKey: 'Quarterly Profits',
    ),
  ];
  setState(() {
    _chartKey.currentState.updateData(nextData);
  });
}
```

## Customization

### Hole Label:

| Property   | Default                           |
|------------|:---------------------------------:|
| holeLabel  | null                              |
| labelStyle | Theme.of(context).textTheme.body2 |

Example:

```dart
new AnimatedCircularChart(
  key: _chartKey,
  size: _chartSize,
  initialChartData: <CircularStackEntry>[
    new CircularStackEntry(
      <CircularSegmentEntry>[
        new CircularSegmentEntry(
          33.33,
          Colors.blue[400],
          rankKey: 'completed',
        ),
        new CircularSegmentEntry(
          66.67,
          Colors.blueGrey[600],
          rankKey: 'remaining',
        ),
      ],
      rankKey: 'progress',
    ),
  ],
  chartType: CircularChartType.Radial,
  percentageValues: true,
  holeLabel: '1/3',
  labelStyle: new TextStyle(
    color: Colors.blueGrey[600],
    fontWeight: FontWeight.bold,
    fontSize: 24.0,
  ),
)
```

![hole label example screenshot](screenshots/hole_label_example.png)

---

### Segment Edge Style:

| Property   | Default               |
|------------|:---------------------:|
| edgeStyle  | SegmentEdgeStyle.flat |

| SegmentEdgeStyle | Description                                |
|:----------------:|--------------------------------------------|
| flat (default)   | Segments begin and end with a flat edge.   |
| round            | Segments begin and end with a semi-circle. |

Example:

```dart
new AnimatedCircularChart(
  key: _chartKey,
  size: _chartSize,
  initialChartData: <CircularStackEntry>[
    new CircularStackEntry(
      <CircularSegmentEntry>[
        new CircularSegmentEntry(
          33.33,
          Colors.blue[400],
          rankKey: 'completed',
        ),
        new CircularSegmentEntry(
          66.67,
          Colors.blueGrey[600],
          rankKey: 'remaining',
        ),
      ],
      rankKey: 'progress',
    ),
  ],
  chartType: CircularChartType.Radial,
  edgeStyle: SegmentEdgeStyle.round,
  percentageValues: true,
)
```

![round segment edge example screenshot](screenshots/segment_edge_round_example.png)

## Details

### Chart data entries:

Charts expect a list of `CircularStackEntry` objects containing the data they need to be drawn.

Each `CircularStackEntry` corresponds to a complete circle in the chart. For radial charts that is one of the rings, for pie charts it is the whole pie.

Radial charts with multiple `CircularStackEntry`s will display them as concentric circles.

Each `CircularStackEntry` is composed of multiple `CircularSegmentEntry`s containing the value of a data point. In radial charts a segment corresponds to an arc segment of the current ring, for pie charts it is an individual slice.



