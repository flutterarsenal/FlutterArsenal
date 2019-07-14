---
title: scroll-to-index
name: scroll-to-index
category: Free
tag: UI Helper
excerpt: This package provides the scroll to index mechanism for fixed/variable row height for Flutter scrollable widget.
teaser: 
github: https://github.com/quire-io/scroll-to-index
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 5
version: NA
last_updated: Jul 12, 2019
owner:
 profile_image: https://avatars2.githubusercontent.com/u/13092985?v=4
 name: quire-io
 url: https://github.com/quire-io
contributors:
 -
   image: https://avatars2.githubusercontent.com/u/785068?v=4
   url: https://github.com/henrichen
 -
   image: https://avatars0.githubusercontent.com/u/785688?v=4
   url: https://github.com/tomyeh
 -
   image: https://avatars0.githubusercontent.com/u/1056469?v=4
   url: https://github.com/jimmyshiau
 -
   image: https://avatars1.githubusercontent.com/u/1589112?v=4
   url: https://github.com/jimyeh
 -
   image: https://avatars2.githubusercontent.com/u/4530697?v=4
   url: https://github.com/jerrywell
registered_by:
 image: https://avatars3.githubusercontent.com/u/20480867?v=4
 url: https://github.com/IAmSarthakVerma
 on_date: Jul 14th 19
layout: fa_project
---
# scroll-to-index

This package provides the scroll to index mechanism for fixed/variable row height for Flutter scrollable widget.

## Getting Started

In the `pubspec.yaml` of your flutter project, add the following dependency:

```yaml
dependencies:
  ...
  scroll_to_index: any
```

In your library add the following import:

```dart
import 'package:scroll_to_index/scroll_to_index.dart';
```

For help getting started with Flutter, view the online [documentation](https://flutter.io/).

## Usage

This is a widget level library, means you can use this mechanism inside any Flutter scrollable widget.

Example for Flutter ListView

``` dart
ListView(
  scrollDirection: scrollDirection,
  controller: controller,
  children: randomList.map<Widget>((data) {
  	final index = data[0];
  	final height = data[1];
    return AutoScrollTag(
      key: ValueKey(index),
      controller: controller,
      index: index,
      child: Text('index: $index, height: $height'),
      highlightColor: Colors.black.withOpacity(0.1),
    );
  }).toList(),
)

```

you can wrap any of your row widget which has dynamic row height

``` dart
AutoScrollTag(
  key: ValueKey(index),
  controller: controller,
  index: index,
  child: child
)
```

with the `AutoScrollController` controller.

when you need to trigger scroll to a specified index, you can call

```
controller.scrollToIndex(index, preferPosition: AutoScrollPosition.begin)
```

even more, with a fixed row height, you can give it a suggested height for more efficient scrolling. there are more configuration.

```
final controller = AutoScrollController(
  //add this for advanced viewport boundary. e.g. SafeArea
  viewportBoundaryGetter: () => Rect.fromLTRB(0, 0, 0, MediaQuery.of(context).padding.bottom),

  //choose vertical/horizontal
  axis: scrollDirection,

  //this given value will bring the scroll offset to the nearest position in fixed row height case
  suggestedRowHeight: 200
);
```

for full example, please see this [Demo](https://github.com/quire-io/scroll-to-index/blob/master/example/lib/main.dart).

## Who Uses

* [Quire](https://quire.io) - a simple, collaborative, multi-level task management tool.