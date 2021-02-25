#!/bin/sh

# Doesn't recognize stylesheets
# convert favicon.svg -size 50x50 favicon.png

google-chrome --headless --screenshot=favicon.png --window-size=64,64 --default-background-color=00000000 favicon.svg
google-chrome --headless --screenshot=logo192.png --window-size=192,192 --default-background-color=00000000 favicon.svg
google-chrome --headless --screenshot=logo512.png --window-size=512,512 --default-background-color=00000000 favicon.svg
