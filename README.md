Dungeons and Dragons Random Map Generator

The purpose of this project was to have a way of generating maps to play D&D campaigns on without having to find one on the internet or draw it myself. 

I utilised the HTML Canvas element to draw a 400px x 400px box filled with squares of light green (grass), dark green (forest), blue (water) and grey (rock). It creates an empty array and pushes a random number between 0 and 3 until the specified height and width have been reached. Each number corresponds with a different colour.

The most tricky part of this project was having the elements "group together" in a more natural way. To overcome this I used if/else statements to determine what number the previous array element is, and limit the options for the new element based on that.