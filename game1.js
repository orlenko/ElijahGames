
var x1 =100;
var y1 =50;
var x2 =300;
var y2 =150;
var x3 =100;
var y3 = 250;
var x4 = 300;
var y4 = 350;
var monh =90;
var monw =150;
var speed =1;



draw = function() {
    
    background(5, 5, 5);
    fill(0, 221, 255);
    ellipse(200, mouseY, 50, 50);
    fill(255, 0, 0);
    ellipse(x1,y1,monw,monh);
    ellipse(x2,y2,monw,monh);
    ellipse(x3,y3,monw,monh);
    ellipse(x4,y4,monw,monh);
 x1+=speed;
 x2+=speed;
 x3+=speed;
 x4+=speed;
 if (
};
