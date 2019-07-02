---
title: flutter_built_redux
name: flutter_built_redux
category: Free
tag: redux
excerpt: "Built_redux provider for Flutter."
github: https://github.com/davidmarne/flutter_built_redux
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 5
version: NA
last_updated: Jun 15, 2019
owner:
 profile_image: https://avatars3.githubusercontent.com/u/1421460?v=4
 name: davidmarne
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars3.githubusercontent.com/u/1421460?v=4
   url: https://github.com/davidmarne
 -
   image: https://avatars3.githubusercontent.com/u/2846960?v=4
   url: https://github.com/VerTiGoEtrex
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
[![Pub](https://img.shields.io/pub/v/flutter_built_redux.svg)](https://pub.dartlang.org/packages/flutter_built_redux)
[![codecov.io](http://codecov.io/github/davidmarne/flutter_built_redux/coverage.svg?branch=master)](http://codecov.io/github/davidmarne/flutter_built_redux?branch=master)

# flutter_built_redux

[built_redux] bindings for Flutter.

By creating a Widget that extends StoreConnector you get automatic subscribing to your redux store, and you component will only call setState when the store triggers and the values you take from the store in connect change!

## Examples

[counter example](example/example.dart)

[todo_mvc], written by [Brian Egan]

## Why you may need flutter_built_redux

For the same reason you would want to use redux with react.

from the flutter tutorial:

> In Flutter, change notifications flow “up” the widget hierarchy by way of callbacks, while current state flows “down” to the stateless widgets that do presentation.

Following this pattern requires you to send any state or state mutator callbacks that are common between your widgets down from some common ancestor.

With larger applications this is very tedious, leads to large widget constructors, and this pattern causes flutter to rerun the build function on all widgets between the ancestor that contains the state and the widget that actually cares about it. It also means your business logic and network requests live in your widget declarations.

[built_redux] gives you a predicable state container that can live outside your widgets and perform logic in action middleware.

flutter_built_redux lets a widget to subscribe to the pieces of the redux state tree that it cares about. It also lets lets widgets dispatch actions to mutate the redux state tree. This means widgets can access and mutate application state without the state and state mutator callbacks being passed down from its ancestors!

[built_redux]: https://github.com/davidmarne/built_redux

[todo_mvc]: https://gitlab.com/brianegan/flutter_architecture_samples/tree/master/example/built_redux

[Brian Egan]: https://gitlab.com/brianegan
