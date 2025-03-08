# Burning subtitles into a Bink Video File (.bik)

While working on the [Czech localization of Enderal: Forgotten Stories](enderal-localization.md), I needed to burn subtitles into a `.bik` video. Upon realizing there isn't a guide on how to do this on the Internet yet, I decided to write this article. Note that there may be other, simpler methods.

## Goal

### Input files

1. A `.bik` video file
2. A `.srt` or `.txt` subtitle file

### Output file

1. A `.bik` video file with subtitles burned into it

## Required programs

1. FFmpeg
2. VLC Media Player
3. RAD Video Tools

## Steps

1. Convert `.bik` to `.mp4` using FFmpeg
2. Generate `.wav` from `.mp4` using FFmpeg
3. Convert `.srt` (or `.txt`) to `.ass` using FFmpeg
4. Optional: Configure `.ass` formatting
5. Burn `.ass` into `.mp4` using VLC Media Player
6. Convert `.mp4` to `.bik` using Rad Video Tools (with sound compression turned off)
7. Add sound from `.wav` to `.bik` using Rad Video Tools
