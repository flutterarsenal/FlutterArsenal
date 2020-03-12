---
title:  flutter_fbx3d_viewer
name:  flutter_fbx3d_viewer
category: Free
tag: flutter_fbx3d_viewer
excerpt: This is a simple non textured Fbx animated 3d file viewer.
teaser: https://raw.githubusercontent.com/klaszlo8207/Flutter-FBX-3D-Viewer/master/pix/gif.gif
github: https://github.com/klaszlo8207/Flutter-FBX-3D-Viewer
license:
 name: Other
 url: http://choosealicense.com/licenses/other/
rating: 4.5
version: NA
last_updated: Mar 04, 2020
owner:
 profile_image: https://avatars0.githubusercontent.com/u/21121078?v=4
 name: klaszlo8207
 url: https://github.com/klaszlo8207
contributors:
 -
   image: https://avatars0.githubusercontent.com/u/21121078?v=4
   url: https://github.com/klaszlo8207
registered_by:
 image: https://avatars0.githubusercontent.com/u/21121078?v=4
 url: https://github.com/klaszlo8207
 on_date: Jan 16th 20
layout: fa_project
---
# Flutter FBX 3D Viewer

Flutter package for viewing FBX 3D animated files with textures

Support me: https://www.paypal.me/LaszloKozari

**This library is experimental. Some FBX files, particularly older fbx files, may not load correctly. No guarantee is provided as FBX is a closed proprietary format.**

This library is based on the [dart_fbx](https://github.com/brendan-duncan/dart_fbx) library

## Pictures

![alt text](https://raw.githubusercontent.com/klaszlo8207/Flutter-FBX-3D-Viewer/master/pix/pic1.jpg)
![alt text](https://raw.githubusercontent.com/klaszlo8207/Flutter-FBX-3D-Viewer/master/pix/pic2.jpg)
![alt text](https://raw.githubusercontent.com/klaszlo8207/Flutter-FBX-3D-Viewer/master/pix/pic3.jpg)
![alt text](https://raw.githubusercontent.com/klaszlo8207/Flutter-FBX-3D-Viewer/master/pix/pic4.jpg)
![alt text](https://raw.githubusercontent.com/klaszlo8207/Flutter-FBX-3D-Viewer/master/pix/pic5.jpg)
![alt text](https://raw.githubusercontent.com/klaszlo8207/Flutter-FBX-3D-Viewer/master/pix/pic6.jpg)

## Video

[![Video](http://img.youtube.com/vi/hTnkwEGFu9k/0.jpg)](https://www.youtube.com/watch?v=hTnkwEGFu9k)


## Example
  
[FBX Viewer Example](https://github.com/klaszlo8207/Flutter-FBX-3D-Viewer/blob/master/example/example_app.dart)

## Properties
```
  Fbx3DViewer({
    @required this.size,
    @required this.fbxPath,                 // "assets/asd.fbx" or sd card path
    @required this.lightPosition,
    @required this.initialZoom,
    @required this.animationSpeed,          // 0-1
    @required this.fbx3DViewerController,
    @required this.refreshMilliseconds,
    @required this.endFrame,                //max frame to play
    this.texturePath,                       // "assets/asd.png" or sd card path
    this.backgroundColor = const Color(0xff353535),
    this.showInfo = false,
    this.showWireframe = false,
    this.wireframeColor = Colors.black,
    this.initialAngles,
    this.panDistanceToActivate = 10,        //pan distance to activate swype
    this.onZoomChangeListener,
    this.onRotationChangeListener,
    this.onHorizontalDragUpdate,
    this.onVerticalDragUpdate,
    this.color = Colors.white,
    this.lightColor = Colors.white,
    this.showWireFrame = true,
    this.showGrids = true,
    this.gridsColor = const Color(0xff4b4b4b),
    this.gridsMaxTile = 10,
    this.gridsTileSize = 1.0,
  });
```

## Convert an FBX binary file to an FBX ASCII file that can this library handle

1, First step is to download an animated/rigged fbx binary file from the net.

2, Second is to load that modell with **AUTODESK MotionBuilder 2020** or **AUTODESK 3DS Max**!

3, 
**Python Tools -> FBX Export on the MotionBuilder**

FBX Version: FBX 2014/2015 -> Export

SAVE -> .fbx (ASCII)

**Embed medias checked only**

**Save options:**

**Remove: (Settings)**

Base Cameras

Camera switchers

Current camera

Global Lighting

Transport

**Remove: (Scene)**

Cameras (all)

Textures (all)

Video

**TRIANGULATE**

4, SAVE

Now if everything is went good in the fbx file header you can see this: **; FBX 7.4.0 project file**

## Limits

**FBX is a closed format, so while this library does it's best to interpret the data in an FBX file, I cannot guarantee that it will read all FBX files, or all data within FBX files. You can play with FBX version 7.4 files ASCII text format**

**Please don't use this library with a lot of vertices/polygons. Speed will be very low on huge point count.**

Normal speed will be on an fbx that is **max 3000-5000 vertices**

## Author

**Kozári László** in **2020.01.16**

## License

Licensed under the Apache License, Version 2.0 (the "License")

