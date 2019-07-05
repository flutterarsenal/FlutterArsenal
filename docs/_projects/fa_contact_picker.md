---
title: contact_picker
name: contact_picker
category: Free
tag: flutter
excerpt: "A Flutter plugin for picking a contact from the address book."
github: https://github.com/goderbauer/contact_picker
license:
 name: BSD 3-Clause "New" or "Revised" License
 url: http://choosealicense.com/licenses/bsd-3-clause/
rating: 5
version: NA
last_updated: May 10, 2019
owner:
 profile_image: https://avatars2.githubusercontent.com/u/1227763?v=4
 name: goderbauer
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars2.githubusercontent.com/u/1227763?v=4
   url: https://github.com/goderbauer
 -
   image: https://avatars1.githubusercontent.com/u/6230110?v=4
   url: https://github.com/bcko
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# ContactPicker plugin for Flutter

[![pub package](https://img.shields.io/pub/v/contact_picker.svg)](https://pub.dartlang.org/packages/contact_picker)

With this plugin a Flutter app can ask its user to select a contact from his/her address book. The information associated with the contact is returned to the app.

This plugin uses the operating system's native UI for selecting contacts and does not require any special permissions from the user.

Currently, the plugin only supports picking phone numbers. However, it should be easy to extend the plugin to request other properties from a contact (e.g. addresses) or to obtain the entire record of a contact (PRs are welcome).

## Using the plugin

Follow the instructions in the [Installing](https://pub.dartlang.org/packages/contact_picker#pub-pkg-tab-installing) tab on pub.

After that, instantiate `ContactPicker` in your Flutter app and call `selectContact` on it to bring up the UI for selecting a contact. The function returns with the selected `Contact` object once the user has made a choice (or `null` if the user didn't select anything).

See `example/lib/main.dart` for an actual usage example.
