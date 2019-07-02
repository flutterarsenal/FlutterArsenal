---
title: flutter_sticky_headers
name: flutter_sticky_headers
category: Free
tag: ""
excerpt: "Flutter Sticky Headers - Lets you place 'sticky headers' into any scrollable content in your Flutter app. No special wrappers or magic required. Maintainer: @slightfoot"
github: https://github.com/fluttercommunity/flutter_sticky_headers
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 5
version: NA
last_updated: Jul 02, 2019
owner:
 profile_image: https://avatars1.githubusercontent.com/u/35045612?v=4
 name: fluttercommunity
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars0.githubusercontent.com/u/906564?v=4
   url: https://github.com/slightfoot
 -
   image: https://avatars1.githubusercontent.com/u/1122906?v=4
   url: https://github.com/rapPayne
 -
   image: https://avatars2.githubusercontent.com/u/5468513?v=4
   url: https://github.com/hnvn
 -
   image: https://avatars1.githubusercontent.com/u/14292245?v=4
   url: https://github.com/jeroen-meijer
 -
   image: https://avatars2.githubusercontent.com/u/25674767?v=4
   url: https://github.com/Nash0x7E2
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
[![Flutter Community: sticky_headers](https://fluttercommunity.dev/_github/header/sticky_headers)](https://github.com/fluttercommunity/community)

# Flutter Sticky Headers

[![pub package](https://img.shields.io/pub/v/sticky_headers.svg)](https://pub.dartlang.org/packages/sticky_headers)

Lets you place headers on scrollable content that will stick to the top of the container
whilst the content is scrolled.

## Usage
You can place a `StickyHeader` or `StickyHeaderBuilder`
inside any scrollable content, such as:  `ListView`, `GridView`, `CustomScrollView`,
`SingleChildScrollView` or similar.

Depend on it:
```yaml
dependencies:
  sticky_headers: "^0.1.8"
```

Import it:
```dart
import 'package:sticky_headers/sticky_headers.dart';
```

Use it:
```dart
class Example extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new ListView.builder(itemBuilder: (context, index) {
      return new StickyHeader(
        header: new Container(
          height: 50.0,
          color: Colors.blueGrey[700],
          padding: new EdgeInsets.symmetric(horizontal: 16.0),
          alignment: Alignment.centerLeft,
          child: new Text('Header #$index',
            style: const TextStyle(color: Colors.white),
          ),
        ),
        content: new Container(
          child: new Image.network(imageForIndex(index), fit: BoxFit.cover,
            width: double.infinity, height: 200.0),
        ),
      );
    });
  }
}
```


## Examples

### Example 1 - Headers and Content
![Demo 1](https://github.com/slightfoot/flutter_sticky_headers/raw/gh-pages/demo1.gif)

### Example 2 - Animated Headers with Content
![Demo 2](https://github.com/slightfoot/flutter_sticky_headers/raw/gh-pages/demo2.gif)

### Example 3 - Headers overlapping the Content
![Demo 3](https://github.com/slightfoot/flutter_sticky_headers/raw/gh-pages/demo3.gif)

## Bugs/Requests
If you encounter any problems feel free to open an issue. If you feel the library is
missing a feature, please raise a ticket on Github and I'll look into it.
Pull request are also welcome.
