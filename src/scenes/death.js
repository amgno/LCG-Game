let img_death_1;
let img_death_2;
let img_death_3;
let img_death_4;
let img_death_5;
let img_death_6;
let deathimg;

let endfirst;
let endsecond;


// console.log(deathimg);

function preload(s) {


    endfirst = PP.assets.image.load(s, "assets/images/end/end1.png");
    endsecond = PP.assets.image.load(s, "assets/images/end/end2.png");
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
    else if (deathimg === 5) {
        PP.assets.image.add(s, img_death_5, 0,0,0,0)
    }
    else if (deathimg === 1) {
        PP.assets.image.add(s, img_death_1, 0,0,0,0)
    } else if(deathimg === 20){
        PP.assets.image.add(s, endfirst, 0,0,0,0)
    }

    hp = 3;
    hp2 = 3;
};

function update(s) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            if (deathimg === 1){
                PP.scenes.start("scene2");
            }
            if (deathimg === 2){
                PP.scenes.start("scene2");
            }
            if (deathimg === 6){
                PP.scenes.start("scene1");
            }
            if (deathimg === 3){
                PP.scenes.start("scene1");
            }
            if (deathimg === 5){
                PP.scenes.start("scene3");
            }
            if (deathimg === 20){

                PP.assets.image.add(s, endsecond, 0,0,0,0);
                setTimeout(function() {
                    PP.scenes.start("menu");
                    expandAndContract();
                }, 10000);
            }
    }
};

function destroy(s) { };



PP.scenes.add("death", preload, create, update, destroy);

