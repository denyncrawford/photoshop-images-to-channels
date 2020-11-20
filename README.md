# Photoshop negatives to channels

*PNC* is a Photoshop script for merge opened negative images into spot colors channels in a multichannel file.  

This is very helpful for secreen printing.

## Installation

Clone this repo or download the file inside the `/dist` folder.

*Running once*: `File > Scripts > Browse and navigate to the picturesToChannels.js’ file and the script will run.`

*Installing*: Copy the file into the Photoshop Scripts directory:
  - MacOS: `/Applications/Adobe Photoshop [VERSION]/Presets/Scripts/`
  - Windows: `C:/Program Files/Adobe/Adobe Photoshop [VERSION]/Presets/Scripts/`

Restart Photoshop. Installed script should appear under File > Scripts menu.

## Usage

1. Open multiple negatives on Photoshop.
2. Run the script.
3. Wait for the file composition.
3. Edit your channels

## Video

[![Watch the video](https://imgur.com/a/jMpH0GV.jpg)](https://imgur.com/AqNBPJT.mp4)

## How it works:

*PCP* takes all the opened documents on photoshop and place them on a single multi channel document ready to edit.

## Context

I do work a lot with photoshop and all the adobe suite for screen printing. I'm also a good coder (I hope).

## Warnings

Sometimes it doesn't close all the documents.

## Development

1. Install all the dependencies

`$ npm install`

2. Install rollup

`$ npm install -g rollup`

3. Make some changes

4. Run this command to build the bundle.

 `$ npm run build`

5. If you want to automatic build when any file inside `/src` changes, then run:

`$ gulp`