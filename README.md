## Overview

![SpoilerAlert Icon](http://jamesmedd.co.uk/images/spoiler_alert/sa_icon.png)

A while back, I made a browser extension that linked up to a hardware peripheral, which would flash and beep when potential spoilers were encountered on the web. I never got around to working on a version that allowed me to simply type the names of shows to automatically retrieve a list of 'blacklisted' terms. I've decided to finally build that version.

Right now, I've not re-written the Arduino portion, management of the fetched spoilers depends on a [third-party extension](https://chrome.google.com/webstore/detail/storage-area-explorer/ocfjjjjhkpapocigimmppepjgfdecjkb), the icon is ugly, and the the code's pretty grim. BUT, I intend to work on this some more.

## Usage

![Spoiler Alert Adding Spoiler](http://jamesmedd.co.uk/images/spoiler_alert/sa_add_spoilers.png)

Plenty of documentation exists out there for how to load an unpackaged Chrome extension, and how to then package it, so I won't cover that here. Once it's installed, you can search for shows using 'Options' in chrome://extensions. Once they're added, you'll see notifications on the extension icon, and can check specifics in the console (I'll add a menu for this later!)

![Spoiler Alert Spoiler Count](http://jamesmedd.co.uk/images/spoiler_alert/sa_spoiler_count.png)
