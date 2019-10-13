---
title:  BubbleShowcase
name:  BubbleShowcase
category: Free
tag: showcase
excerpt: BubbleShowcase is a small but powerful flutter package that allows you to highlight specific parts of your app to explain them to the user or to show your app new features.
teaser: https://raw.githubusercontent.com/Skyost/BubbleShowcase/master/screenshots/preview.gif
github: https://github.com/Skyost/BubbleShowcase
license:
 name: GNU General Public License v3.0
 url: http://choosealicense.com/licenses/gpl-3.0/
rating: 3.5
version: NA
last_updated: Sep 17, 2019
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
 on_date: Oct 13th 19
layout: fa_project
---
# BubbleShowcase

**BubbleShowcase** is a small but power flutter package that allows you to highlight
specific parts of your app to explain them to the user or to showcase your app new features.

![Preview](https://github.com/Skyost/BubbleShowcase/blob/master/screenshots/preview.gif)

## Getting Started

This package is easy to use.
Take a look at the following snippet (which is using [speech_bubble](https://pub.dev/packages/speech_bubble)) :

```dart
BubbleShowcase(
  bubbleShowCaseId: 'my_bubble_showcase',
  bubbleShowCaseVersion: 1,
  bubbleSlides: [
    RelativeBubbleSlide(
      widgetKey: widgetToHighlightKey,
      child: SpeechBubble(
        nipLocation: NipLocation.TOP,
        color: Colors.blue,
        child: Padding(
          padding: EdgeInsets.all(10),
          child: Text(
            'This is a new cool feature !',
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
    ),
  ],
  child: MyMainWidget(),
);
```

It creates a `BubbleShowcase` widget with only one `BubbleSlide`.
This slide will highlight the widget that holds the key `widgetToHighlightKey`.

You have a lot of other options !
Don't hesitate to check the [API Reference](https://pub.dev/documentation/bubble_showcase/latest/) or the [Github repo](https://github.com/Skyost/BubbleShowcase).

## Contributions

You have a lot of options to contribute to this project ! You can :

* [Fork it](https://github.com/Skyost/BubbleShowcase/fork) on Github.
* [Submit](https://github.com/Skyost/BubbleShowcase/issues/new/choose) a feature request or a bug report.
* [Donate](https://paypal.me/Skyost) to the developer.
