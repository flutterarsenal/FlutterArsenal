---
title: flutter_blue
name: flutter_blue
category: Free
tag: Bluetooth
excerpt: FlutterBlue is a bluetooth plugin for Flutter, a new mobile SDK to help developers build modern apps for iOS and Android.
teaser: https://raw.githubusercontent.com/pauldemarco/flutter_blue/master/site/flutterblue.png
github: https://github.com/pauldemarco/flutter_blue
license:
 name: Other
 url: http://choosealicense.com/licenses/other/
rating: 5
version: NA
last_updated: Jul 14, 2019
owner:
 profile_image: https://avatars2.githubusercontent.com/u/16725750?v=4
 name: pauldemarco
 url: https://github.com/pauldemarco
contributors:
 -
   image: https://avatars2.githubusercontent.com/u/126604?v=4
   url: https://github.com/brianegan
 -
   image: https://avatars1.githubusercontent.com/u/269860?v=4
   url: https://github.com/ened
 -
   image: https://avatars3.githubusercontent.com/u/6687929?v=4
   url: https://github.com/mehmetf
 -
   image: https://avatars2.githubusercontent.com/u/16725750?v=4
   url: https://github.com/pauldemarco
 -
   image: https://avatars1.githubusercontent.com/u/24929993?v=4
   url: https://github.com/bsheen
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
 on_date: July 3, 2019
layout: fa_project
---
[![pub package](https://img.shields.io/pub/v/flutter_blue.svg)](https://pub.dartlang.org/packages/flutter_blue)

<br>
<p align="center">
<img alt="FlutterBlue" src="https://github.com/pauldemarco/flutter_blue/blob/master/site/flutterblue.png?raw=true" />
</p>
<br><br>

## Introduction

FlutterBlue is a bluetooth plugin for [Flutter](http://www.flutter.io), a new mobile SDK to help developers build modern apps for iOS and Android.

## Alpha version

This library is actively developed alongside production apps, and the API will evolve as we continue our way to version 1.0.

**Please be fully prepared to deal with breaking changes.**

Having trouble adapting to the latest API?   I'd love to hear your use-case, please contact me.

## Cross-Platform Bluetooth LE
FlutterBlue aims to offer the most from both platforms (iOS and Android).

Using the FlutterBlue instance, you can scan for and connect to nearby devices ([BluetoothDevice](#bluetoothdevice-api)).
Once connected to a device, the BluetoothDevice object can discover services ([BluetoothService](lib/src/bluetooth_service.dart)), characteristics ([BluetoothCharacteristic](lib/src/bluetooth_characteristic.dart)), and descriptors ([BluetoothDescriptor](lib/src/bluetooth_descriptor.dart)).
The BluetoothDevice object is then used to directly interact with characteristics and descriptors.

## Usage
### Obtain an instance
```dart
FlutterBlue flutterBlue = FlutterBlue.instance;
```

### Scan for devices
```dart
/// Start scanning
var scanSubscription = flutterBlue.scan().listen((scanResult) {
    // do something with scan result
    device = scanResult.device;
    print('${device.name} found! rssi: ${scanResult.rssi}');
});

/// Stop scanning
scanSubscription.cancel();
```

### Connect to a device
```dart
/// Connect to the device
await device.connect();

/// Disconnect from device
device.disconnect();
```

### Discover services
```dart
List<BluetoothService> services = await device.discoverServices();
services.forEach((service) {
    // do something with service
});
```

### Read and write characteristics
```dart
// Reads all characteristics
var characteristics = service.characteristics;
for(BluetoothCharacteristic c in characteristics) {
    List<int> value = await c.read();
    print(value);
}

// Writes to a characteristic
await c.write([0x12, 0x34])
```

### Read and write descriptors
```dart
// Reads all descriptors
var descriptors = characteristic.descriptors;
for(BluetoothDescriptor d in descriptors) {
    List<int> value = await d.read();
    print(value);
}

// Writes to a descriptor
await d.write([0x12, 0x34])
```

### Set notifications and listen to changes
```dart
await characteristic.setNotifyValue(true);
characteristic.value.listen((value) {
    // do something with new value
});
```

## Reference
### FlutterBlue API]

| State |      Android       |         iOS          |             Description            |
| :--------------- | :----------------: | :------------------: |  :-------------------------------- |
| scan             | :white_check_mark: |  :white_check_mark:  | Starts a scan for Bluetooth Low Energy devices. |
| state            | :white_check_mark: |  :white_check_mark:  | Gets the current state of the Bluetooth Adapter. |
| onStateChanged   | :white_check_mark: |  :white_check_mark:  | Stream of state changes for the Bluetooth Adapter. |

### BluetoothDevice API

|                             |       Android        |         iOS          |             Description            |
| :-------------------------- | :------------------: | :------------------: |  :-------------------------------- |
| connect                     |  :white_check_mark:  |  :white_check_mark:  | Establishes a connection to the device. |
| disconnect                  |  :white_check_mark:  |  :white_check_mark:  | Cancels an active or pending connection to the device. |
| discoverServices            |  :white_check_mark:  |  :white_check_mark:  | Discovers services offered by the remote device as well as their characteristics and descriptors. |
| services                    |  :white_check_mark:  |  :white_check_mark:  | Gets a list of services. Requires that discoverServices() has completed. |
| state                       |  :white_check_mark:  |  :white_check_mark:  | Gets the current state of the device. |
| onStateChanged              |  :white_check_mark:  |  :white_check_mark:  | Notifies of state changes for the device. |

### BluetoothCharacteristic API

|                             |       Android        |         iOS          |             Description            |
| :-------------------------- | :------------------: | :------------------: |  :-------------------------------- |
| read                        |  :white_check_mark:  |  :white_check_mark:  | Retrieves the value of the characteristic.  |
| write                       |  :white_check_mark:  |  :white_check_mark:  | Writes the value of the characteristic. |
| setNotifyValue              |  :white_check_mark:  |  :white_check_mark:  | Sets notifications or indications on the characteristic. |
| value                       |  :white_check_mark:  |  :white_check_mark:  | Stream of characteristic's value when changed. |

### BluetoothDescriptor API


|                             |       Android        |         iOS          |             Description            |
| :-------------------------- | :------------------: | :------------------: |  :-------------------------------- |
| read                        |  :white_check_mark:  |  :white_check_mark:  | Retrieves the value of the descriptor.  |
| write                       |  :white_check_mark:  |  :white_check_mark:  | Writes the value of the descriptor. |

## Troubleshooting
### Scanning for service UUID's doesn't return any results
Make sure the device is advertising which service UUID's it supports.  This is found in the advertisement
packet as **UUID 16 bit complete list** or **UUID 128 bit complete list**.