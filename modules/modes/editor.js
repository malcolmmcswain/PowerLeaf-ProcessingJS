var editor = function() {
   noStroke();
   fill(237, 237, 237);
   rect(0,-3,16,438);
   fill(138, 138, 138);
   text("1",5,25);
   text("2",5,40);
   text("3",5,55);
   text("4",5,70);
   fill(255, 0, 0);
   text(script.minus.action, 20, 25);
   fill(0, 0, 0);
   text(script.sayhello.action, 20, 40);
   fill(0, 255, 255);
   text(script.comment.action, 20, 55);
};
