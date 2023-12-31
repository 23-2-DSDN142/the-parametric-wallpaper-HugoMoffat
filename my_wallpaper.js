//your parameter variables go here!

//Variables for the Center Square
let CentSqX = 50
let CentSqY = 150
let CentSqLength = 100
let CentSqHeight = 100
let CentSqX2 = CentSqX + CentSqLength
let CentSqY2 = CentSqY + CentSqHeight

//Variables for the "Synapses"
let Syn1X = 60
let Syn3Y = 70
let Syn4Y = 80
let Syn1Length = 20
let Syn3Height = 20
let Syn4Height = 20
let Syn1X2 = Syn1X + Syn1Length
let Syn3Y2 = Syn3Y + Syn3Height
let Syn4Y2 = Syn4Y + Syn4Height

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
 if(CentSqY > 100) {
 background(126, 107, 128) //grey matter grey
 }
 else {
 background(240, 156, 230); //brain pink
 }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 noFill();
 
 strokeWeight(0.5) // Background
 arc(25, 0, 50, 50, 0, 90)
 arc(25, 25, 50, 50, 90, 270)
 arc(25, 50, 50, 50, 270, 90)
 arc(25, 75, 50, 50, 90, 270)
 arc(25, 100, 50, 50, 270, 90)
 arc(25, 125, 50, 50, 90, 270)
 arc(25, 150, 50, 50, 270, 90)
 arc(25, 175, 50, 50, 90, 270)
 arc(25, 200, 50, 50, 270, 0)
 arc(75, 0, 50, 50, 90, 180)
 arc(75, 25, 50, 50, 270, 90)
 arc(75, 50, 50, 50, 90, 270)
 arc(75, 75, 50, 50, 270, 90)
 arc(75, 100, 50, 50, 90, 270)
 arc(75, 125, 50, 50, 270, 90)
 arc(75, 150, 50, 50, 90, 270)
 arc(75, 175, 50, 50, 270, 90)
 arc(75, 200, 50, 50, 180, 270)
 arc(125, 0, 50, 50, 0, 90)
 arc(125, 25, 50, 50, 90, 270)
 arc(125, 50, 50, 50, 270, 90)
 arc(125, 75, 50, 50, 90, 270)
 arc(125, 100, 50, 50, 270, 90)
 arc(125, 125, 50, 50, 90, 270)
 arc(125, 150, 50, 50, 270, 90)
 arc(125, 175, 50, 50, 90, 270)
 arc(125, 200, 50, 50, 270, 0)
 arc(175, 0, 50, 50, 90, 180)
 arc(175, 25, 50, 50, 270, 90)
 arc(175, 50, 50, 50, 90, 270)
 arc(175, 75, 50, 50, 270, 90)
 arc(175, 100, 50, 50, 90, 270)
 arc(175, 125, 50, 50, 270, 90)
 arc(175, 150, 50, 50, 90, 270)
 arc(175, 175, 50, 50, 270, 90)
 arc(175, 200, 50, 50, 180, 270)

 if(CentSqX > 100) { //Colour changer
 fill(81, 255, 0) // electric green
 } 
 else {
 fill(90, 232, 242) // electric blue
 }
 
 strokeWeight(1) //Synapse heads
 rect(Syn1X, 1, Syn1Length, 5)
 rect(Syn1X, 194, Syn1Length, 5)
 rect(1, Syn3Y, 5, Syn3Height)
 rect(194, Syn4Y, 5, Syn4Height)
 strokeWeight(2) //Synapse arms
 line(Syn1X, 6, CentSqX, CentSqY)
 line(Syn1X2, 6, CentSqX2, CentSqY)
 line(194, Syn4Y, CentSqX2, CentSqY)
 line(194, Syn4Y2, CentSqX2, CentSqY2)
 line(Syn1X2, 194, CentSqX2, CentSqY2)
 line(Syn1X, 194, CentSqX, CentSqY2)
 line(6, Syn3Y2, CentSqX, CentSqY2)
 line(6, Syn3Y, CentSqX, CentSqY)
 
}
