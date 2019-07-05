---
title: flutter_ibm_watson
name: flutter_ibm_watson
category: Free
tag: ""
excerpt: "The flutter_ibm_watson makes it easy to integrate IBM Watson"
github: https://github.com/VictorRancesCode/flutter_ibm_watson
license:
 name: Apache License 2.0
 url: http://choosealicense.com/licenses/apache-2.0/
rating: 5
version: NA
last_updated: Jun 10, 2019
owner:
 profile_image: https://avatars2.githubusercontent.com/u/25290085?v=4
 name: VictorRancesCode
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars2.githubusercontent.com/u/25290085?v=4
   url: https://github.com/VictorRancesCode
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# Flutter Ibm Watson 

 ![IBM Watson](https://github.com/VictorRancesCode/flutter_ibm_watson/raw/master/ibmwatson.png) 

## Installation

* Add this to your package's pubspec.yaml file:
```
dependencies:
  flutter_ibm_watson: ^0.0.1
```
* You can install packages from the command line:
  with Flutter:
```
$ flutter packages get
```

* Import it Now in your Dart code, you can use:
```
 import 'package:flutter_ibm_watson/flutter_ibm_watson.dart';
```


## Usage
#### Language Translator
* Login or Register in [IBM Bluemix](https://console.bluemix.net/)
* [IBM Watson Language Translator](https://console.bluemix.net/catalog/services/language-translator)
* Enter in Service Credentials and click in View credential
* Copy apikey and url
* Import 
```
    import 'package:flutter_ibm_watson/flutter_ibm_watson.dart';
    // or import
    import 'package:flutter_ibm_watson/language_translator/LanguageTranslator.dart';
    import 'package:flutter_ibm_watson/utils/Language.dart';
    import 'package:flutter_ibm_watson/utils/IamOptions.dart';
```
* Code Flutter to translate text 
```
IamOptions options = await IamOptions(iamApiKey: "Your ApiKey", url: "Your Url").build();
LanguageTranslator service = new LanguageTranslator(iamOptions: options);
TranslationResult translationResult = await service.translate("Your Text", Language.ENGLISH, Language.SPANISH);
print(translationResult);
```
* Example
```
void languageTranslator(String text) async {
    IamOptions options = await IamOptions(iamApiKey: "fr8sBBKkjZidQJij6sadfxAwqwqe4S8yY_fdXmSrKZoH_F8LB", url: "https://gateway-syd.watsonplatform.net/language-translator/api").build();
    LanguageTranslator service = new LanguageTranslator(iamOptions: options);
    TranslationResult translationResult = await service.translate(text, Language.ENGLISH, Language.SPANISH);
    print(translationResult);
}
```
*Code Flutter to identify language
```
IamOptions options = await IamOptions(iamApiKey: "Your ApiKey", url: "Your Url").build();
LanguageTranslator service = new LanguageTranslator(iamOptions: options);
IdentifyLanguageResult identifyLanguageResult = await service.identifylanguage("You text to identify");
print(identifyLanguageResult);
```
* Example
```
void identifyLanguage(String text) async {
    IamOptions options = await IamOptions(iamApiKey: "fr8sBBKkjZidQJij6sadfxAwqwqe4S8yY_fdXmSrKZoH_F8LB", url: "https://gateway-syd.watsonplatform.net/language-translator/api").build();
    LanguageTranslator service = new LanguageTranslator(iamOptions: this.options);
    IdentifyLanguageResult identifyLanguageResult = await service.identifylanguage(text);
    print(identifyLanguageResult);
}
```

#### Visual Recognition
* Login or Register in [IBM Bluemix](https://console.bluemix.net/)
* [IBM Watson Visual Recognition](https://console.bluemix.net/catalog/services/visual-recognition)
* Enter in Service Credentials and click in View credential
* Copy apikey and url
* Import 
```
    import 'package:flutter_ibm_watson/flutter_ibm_watson.dart';
    // or import
    import 'package:flutter_ibm_watson/visual-recognition/VisualRecognition.dart';
    import 'package:flutter_ibm_watson/utils/Language.dart';
    import 'package:flutter_ibm_watson/utils/IamOptions.dart';
```
* Code Flutter for Visual Recognition Image Url
```
IamOptions options = await IamOptions(iamApiKey: "Your ApiKey", url: "Your Url").build();
VisualRecognition visualRecognition = new VisualRecognition(iamOptions: this.options, language: Language.ENGLISH); // Language.ENGLISH is language response 
ClassifiedImages classifiedImages = await visualRecognition.classifyImageUrl("Your Image URLS");
print(classifiedImages.getImages()[0].getClassifiers()[0].getClasses()[0].className);
```
* Example
```
void visualRecognitionUrl(String url) async {
    IamOptions options = await IamOptions(iamApiKey: "PtrAMdthejasdsaqqweXpRSs3gxwQAdsasdRPNzLEnLQ", url: "https://gateway.watsonplatform.net/visual-recognition/api").build();
    VisualRecognition visualRecognition = new VisualRecognition(iamOptions: this.options, language: Language.ENGLISH);
    ClassifiedImages classifiedImages = await visualRecognition.classifyImageUrl(url);
    print(classifiedImages
        .getImages()[0]
        .getClassifiers()[0]
        .getClasses()[0]
        .className);
}
```
* Visual Recognition File
```
IamOptions options = await IamOptions(iamApiKey: "Your ApiKey", url: "Your Url").build();
VisualRecognition visualRecognition = new VisualRecognition(iamOptions: this.options, language: Language.ENGLISH); // Language.ENGLISH is language response 
ClassifiedImages classifiedImages = await visualRecognition.classifyImageFile("Image File Path");
print(classifiedImages.getImages()[0].getClassifiers()[0].getClasses()[0].class_name);
```
* Example
```
void visualRecognitionFile(File image) async {
    IamOptions options = await IamOptions(iamApiKey: "PtrAMdthejasdsaqqweXpRSs3gxwQAdsasdRPNzLEnLQ", url: "https://gateway.watsonplatform.net/visual-recognition/api").build();
    VisualRecognition visualRecognition = new VisualRecognition(
        iamOptions: this.options, language: Language.ENGLISH);
    ClassifiedImages classifiedImages =
        await visualRecognition.classifyImageFile(image.path);

    print(classifiedImages
        .getImages()[0]
        .getClassifiers()[0]
        .getClasses()[0]
        .className);
}
```


## Getting Started

For help getting started with Flutter, view our online [documentation](https://flutter.io/).

For help on editing package code, view the [documentation](https://flutter.io/developing-packages/).
