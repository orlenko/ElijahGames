
var monsters = [];
var numMonsters = 4;

var monh =90;
var monw =150;

// Where monsters start from
var monsterStartX1 = -150;
var monsterStartX2 = 50;

var currentMonsterStartX = monsterStartX1;
var currentMonsterStartY = 50;

// Loop from 0 to numMonsters.
for (var i=0; i<numMonsters; i++) {
    var monster = {
        x: currentMonsterStartX,
        y: currentMonsterStartY,
        width: monw,
        height: monh
    };
    monsters.push(monster);
    if (currentMonsterStartX === monsterStartX1) {
        currentMonsterStartX = monsterStartX2;
    } else {
        currentMonsterStartX = monsterStartX1;
    }
    currentMonsterStartY += 100;
}

var speed =1;

draw = function() {
    
    background(5, 5, 5);
    fill(0, 221, 255);
    ellipse(200, mouseY, 50, 50);
    fill(255, 0, 0);
    monsters.forEach(function (monster) {
        ellipse(monster.x, monster.y, monster.width, monster.height);
        monster.x += speed;
        if (monster.x > 450) {
            monster.x = -150;
        }
    });
};
