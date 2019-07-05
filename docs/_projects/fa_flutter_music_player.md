---
title: flutter_music_player
name: flutter_music_player
category: Free
tag: flutter
excerpt: "A music player component for Flutter (i.e. Spotify, Apple Music, etc.)"
github: https://github.com/thosakwe/flutter_music_player
license:
 name: Other
 url: http://choosealicense.com/licenses/other/
rating: 5
version: NA
last_updated: Jun 29, 2019
owner:
 profile_image: https://avatars2.githubusercontent.com/u/9996860?v=4
 name: thosakwe
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars2.githubusercontent.com/u/9996860?v=4
   url: https://github.com/thosakwe
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# music_player
![Fullscreen screenshot](screenshots/fullscreen.png)

A music player component for Flutter (i.e. Spotify, Apple Music, etc.).

This is ready-to-go for embedding in a music-playing application.
It supports seeking, as well as having callbacks for
skipping, shuffling, and looping.

## Installation
This package is not yet on Pub (I haven't figured out how to test it),
so in the meantime:

```yaml
dependencies:
  flutter: sdk
  music_player:
    git: https://github.com/thosakwe/flutter_music_player.git
```

## Usage
```dart
class MyWidget extends StatelessWidget {
    @override
    build(BuildContext context) {
        return new MusicPlayer(
            onError: (e) {
                Scaffold.of(context).showSnackBar(
                    new SnackBar(
                        content: new Text(e),
                    ),
                );
            },
            onSkipPrevious: () {},
            onSkipNext: () {},
            onCompleted: () {},
            onLoopChanged: (loop) {
                setState(() => this.loopKind = loop);
            },
            onShuffleChanged: (loop) {
                setState(() => this.shuffle = loop);
            },
            key: musicPlayerKey,
            textColor: Colors.white,
            loop: loopKind,
            shuffle: shuffle,
            url: mp3Url,
            title: const Text(
                'BBC',
                textAlign: TextAlign.center,
                textScaleFactor: 1.5,
                style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                ),
            ),
            subtitle: const Text(
                'JAY Z - Holy Grail',
                textAlign: TextAlign.center,
                style: const TextStyle(
                    color: Colors.white,
                ),
            ),
        );
    }
}
