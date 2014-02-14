void setup() {
  size(200, 200);
  stroke(0);
  fill(0);
  textFont(createFont("Arial",fontsize));
  noLoop();
}

void draw() {
  background(#F0F0E0);
  String textstring = "PowerLeaf";
  float twidth = textWidth(textstring);
  text(textstring, (width-twidth)/2, height/2);
}
