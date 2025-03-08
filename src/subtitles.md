# Burning subtitles into a Bink Video File (.bik)

While working on the [Czech localization of Enderal: Forgotten Stories](enderal-localization.md), I needed to burn subtitles into a `.bik` video. Upon realizing there isn't a guide on how to do this on the Internet yet, I decided to write this article. Note that there may be other, simpler methods.

## Goal

### Input files

1. `.bik` video file
2. `.srt` or `.txt` subtitle file

### Output file

1. `.bik` video file with subtitles burned into it

## Required programs

1. FFmpeg (Install via [this article](https://www.hostinger.com/tutorials/how-to-install-ffmpeg))
2. VLC Media Player (Download [here](https://www.videolan.org/vlc/))
3. RAD Video Tools (Download [here](https://www.radgametools.com/bnkdown.htm) - Mind the password)

## Process Overview

1. Convert `.bik` to `.mp4` using FFmpeg
2. Generate `.wav` from `.mp4` using FFmpeg
3. Convert `.srt` (or `.txt`) to `.ass` using FFmpeg
4. Optional: Configure `.ass` formatting
5. Burn `.ass` into `.mp4` using VLC Media Player
6. Convert `.mp4` to `.bik` using Rad Video Tools (with sound compression turned off)
7. Add sound from `.wav` to `.bik` using Rad Video Tools

## Detailed Guide

### 0. Prepare files

To make the process easier, put both the initial `.bik` video file and the `.srt` or `.txt` subtitle file in one folder together.

### 1. Convert `.bik` to `.mp4` using FFmpeg

To convert a Bink Video File (`.bik`) to `.mp4`, we will use FFmpeg. First, open the Command Prompt and navigate to the directory where your input files are located using the `cd` command. For example:

`cd "C:\Program Files\"` (or `D:` and then `cd "D:\Program Files\"` if navigating to a different drive)

You can then convert the `.bik` video file using:

`ffmpeg -i "input.bik" -c:v libx264 -preset fast -crf 23 -c:a aac` (replace `input.bik` with the name of your `.bik` file)

Setting the `crf` value (default = 23) lower will make the output `.mp4` video higher quality at the expense of its size (0 = lossless but largest file size).

### 2. Generate `.wav` from `.mp4` using FFmpeg

We will need a `.wav` sound file for later. You can generate it from the `.mp4` you just created using:

`ffmpeg -i "input.mp4" -acodec pcm_s16le -ar 44100 -ac 2 output.wav`
