
var x1 =100;
var y1 =20;
var x2 =300;
var y2 =50;
var x3 =100;
var y3 = 80;
var x4 = 300;
var y4 = 110;




draw = function() {
    
    background(5, 5, 5);
    fill(0, 221, 255);
    ellipse(200, mouseY, 30, 30);
    fill(255, 0, 0);
    ellipse(x1,y1,150,10);
    ellipse(x2,y2,150,10);
    ellipse(x3,y3,150,10);
    ellipse(x4,y4,150,10);
};
