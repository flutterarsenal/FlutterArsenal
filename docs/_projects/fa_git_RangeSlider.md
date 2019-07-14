---
title: RangeSlider
name: RangeSlider
category: Free
tag: Slider
excerpt: An extension of the Flutter Material Slider to allow selection of a range of values via 2 thumbs.
teaser: https://camo.githubusercontent.com/b63e71909bfca406e5873d9d90ad0879e11f9255/68747470733a2f2f7777772e646964696572626f656c656e732e636f6d2f696d616765732f72616e67655f736c696465722e676966
github: https://github.com/boeledi/RangeSlider
license:
 name: Other
 url: http://choosealicense.com/licenses/other/
rating: 5
version: NA
last_updated: Jul 11, 2019
owner:
 profile_image: https://avatars2.githubusercontent.com/u/3143268?v=4
 name: boeledi
 url: https://github.com/boeledi
contributors:
 -
   image: https://avatars0.githubusercontent.com/u/921434?v=4
   url: https://github.com/jeroentrappers
 -
   image: https://avatars2.githubusercontent.com/u/3143268?v=4
   url: https://github.com/boeledi
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
 on_date: July 3, 2019
layout: fa_project
---
# RangeSlider

An extension of the Flutter Material Slider to allow selection of a range of values via 2 thumbs.

<img src="https://www.didierboelens.com/images/range_slider.gif" width="220" alt="Flutter RangeSlider" />
<br/><br/>

---
## Step by step explanation

A full explanation on how to build such Widget may be found on my blog:

* in English, click [here](https://www.didierboelens.com/2018/07/range-slider/)
* in French, click [here](https://www.didierboelens.com/fr/2018/07/range-slider/)

---
## Getting Started

You should ensure that you add the following dependency in your Flutter project.
```yaml
dependencies:
 flutter_range_slider: "^1.3.1"
```

You should then run `flutter packages upgrade` or update your packages in IntelliJ.

In your Dart code, to use it:
```dart
import 'package:flutter_range_slider/flutter_range_slider.dart' as frs;
```

> **IMPORTANT NOTE**
<br/>
> As of version 1.7, Flutter Framework also has its own RangeSlider.
> If you want to keep working with this library, you need to import the package, using an alias e.g. frs.
> Then, your need to prefix both RangeSlider and RangeSliderCallback with this alias (frs.RangeSlider and frs.RangeSliderCallback)

---
## Example

An example can be found in the `example` folder.  Check it out.

