---
title: side_header_list_view
name: side_header_list_view
category: Free
tag: ""
excerpt: "Listview with sticky headers like the Android contact page"
github: https://github.com/renefloor/side_header_list_view
license:
 name: BSD 3-Clause "New" or "Revised" License
 url: http://choosealicense.com/licenses/bsd-3-clause/
rating: 5
version: NA
last_updated: Jun 24, 2019
owner:
 profile_image: https://avatars3.githubusercontent.com/u/15101411?v=4
 name: renefloor
 on_date: June 27, 2019
contributors:
 -
   image: https://avatars3.githubusercontent.com/u/1890890?v=4
   url: https://github.com/procedurallygenerated
 -
   image: https://avatars3.githubusercontent.com/u/15101411?v=4
   url: https://github.com/renefloor
registered_by:
 image: https://avatars3.githubusercontent.com/u/7826138?s=460&v=4
 url: https://github.com/karx
layout: fa_project
---
# side_header_list_view

[![pub package](https://img.shields.io/pub/v/side_header_list_view.svg)](https://pub.dartlang.org/packages/side_header_list_view)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/renefloor)

Listview with sticky headers like the Android contact page



![alt text](https://raw.githubusercontent.com/renefloor/side_header_list_view/master/example.gif "Example for SideHeaderListView")

## Usage


````
  new SideHeaderListView(
    // Set how many items the list has
    itemCount: items.length,
    
    // Set the height of the item widgets. For now this has to be a fixed height
    itemExtend: 150.0,
    
    // Set the header builder, this needs to return the widget for the side header
    headerBuilder: (BuildContext context, int index){
      return new HeaderWidget(items[index].startDate);
    },
    
    // Set the item builder, this is everything in the row without the header
    itemBuilder: (BuildContext context, int index){
      return new ListItem(items[index]);
    },
    
    // HasSameHeader will be used to know whether the header has to be shown for a position 
    hasSameHeader: (int a, int b){
      return items[a].day == items[b].day;
    },
  );
````