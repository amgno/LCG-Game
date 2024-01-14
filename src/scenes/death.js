let img_death_1;
let img_death_2;
let img_death_3;
let img_death_4;
let img_death_5;
let img_death_6;
let deathimg;


// console.log(deathimg);

function preload(s) {

    img_death_1 = PP.assets.image.load(s, "assets/images/deaths/spriteeggdeath.png");
    img_death_2 = PP.assets.image.load(s, "assets/images/deaths/spritefallcloud.png");
    img_death_3 = PP.assets.image.load(s, "assets/images/deaths/spritefalldmg.png");
    img_death_4 = PP.assets.image.load(s, "assets/images/deaths/spriteidk.png");
    img_death_5 = PP.assets.image.load(s, "assets/images/deaths/spritelost.png");
    img_death_6 = PP.assets.image.load(s, "assets/images/deaths/spriteraindeath.png");
};
function create(s) {
    deathimg = PP.gameState.get_Variable("deathimg");
    console.log(deathimg);
    if (deathimg === 6) {
        PP.assets.image.add(s, img_death_6, 0, 0, 0, 0);
    }
    else if (deathimg === 3) {
        PP.assets.image.add(s, img_death_3, 0, 0, 0, 0);
    } 
    else if (deathimg === 2) {
        PP.assets.image.add(s, img_death_2, 0, 0, 0, 0);
    }
};

function update(s) {
};

function destroy(s) { };



PP.scenes.add("death", preload, create, update, destroy);

