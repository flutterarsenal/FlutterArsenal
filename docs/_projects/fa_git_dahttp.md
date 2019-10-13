---
title:  Dahttp
name:  Dahttp
category: Free
tag: http
excerpt: HTTP wrapper for Dart with integrated logger design to be used for REST APIs.
teaser: 
github: https://github.com/mauriciotogneri/dahttp
license:
 name: MIT License
 url: http://choosealicense.com/licenses/mit/
rating: 3
version: NA
last_updated: Aug 11, 2019
owner:
 profile_image: https://avatars3.githubusercontent.com/u/619593?v=4
 name: mauriciotogneri
 url: https://github.com/mauriciotogneri
contributors:
 -
   image: https://avatars3.githubusercontent.com/u/619593?v=4
   url: https://github.com/mauriciotogneri
registered_by:
 image: https://avatars3.githubusercontent.com/u/619593?v=4
 url: https://github.com/mauriciotogneri
 on_date: Oct 13th 19
layout: fa_project
---
# Dahttp

HTTP wrapper for Dart with integrated logger design to be used for REST APIs.

## Installation

Add the following dependencies to your `pubspec.yaml`:

```yaml
dependencies: 
  dahttp: ^3.0.1
```

## Example

```dart
Future<void> main() async {
  final GetDogCeo getDogCeo = GetDogCeo();
  final HttpResult<DogCeo> result = await getDogCeo.call();

  // checking boolean properties
  if (result.success) {
    print('Success: ${result.data.url}');
  } else if (result.error) {
    print('Error: ${result.response.statusCode}');
  } else if (result.hasException) {
    print('Exception: ${result.exception}');
  }

  // passing callbacks (named parameters)
  result.handle(onSuccess: (DogCeo dog, Response response) {
    print('Success: ${dog.url}');
  }, onError: (Response response) {
    print('Error: ${response.statusCode}');
  }, onException: (dynamic exception) {
    print('Exception: $exception');
  });

  // passing callbacks (chained notation)
  result.onSuccess((DogCeo dog, Response response) {
    print('Success: ${dog.url}');
  }).onError((Response response) {
    print('Error: ${response.statusCode}');
  }).onException((dynamic exception) {
    print('Exception: $exception');
  });

  // passing callbacks (cascade notation)
  result
    ..onSuccess((DogCeo dog, Response response) {
      print('Success: ${dog.url}');
    })
    ..onError((Response response) {
      print('Error: ${response.statusCode}');
    })
    ..onException((dynamic exception) {
      print('Exception: $exception');
    });
}
```

```dart
class GetDogCeo extends ValuedHttpClient<DogCeo> {
  Future<HttpResult<DogCeo>> call() =>
      super.get('https://dog.ceo/api/breeds/image/random');

  @override
  DogCeo convert(Response response) => DogCeo.fromJson(response.body);
}
```

```dart
class DogCeo {
  final String url;

  const DogCeo(this.url);

  static DogCeo fromJson(String json) {
    final dynamic data = jsonDecode(json);

    return DogCeo(data['message']);
  }
}
```