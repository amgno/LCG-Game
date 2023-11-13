let img_mushroom_1
let img_mushroom_2

function preload_mushrooms(s){
    img_mushroom_1 = PP.assets.image.load(s, "assets/images/mushroom_1.png")
    img_mushroom_2 = PP.assets.image.load(s, "assets/images/mushroom_2.png")
}

function collision_mushroom(s, player, m){
    PP.assets.destroy(m);
    let previous_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", previous_score+10);
}

function create_mushrooms(s, player){
    for (let i=0; i<10; i++) {
        
        let mush_img;
        //Probabilità 50%
        if (Math.random() < 0.5) {
            mush_img = img_mushroom_1;
        } else {
            mush_img = img_mushroom_2;
        }
        
        let x = 300+200*i;
        let mushroom = PP.assets.image.add(s, mush_img, x, 580, 0, 0, 0)
        PP.physics.add(s, mushroom, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, mushroom, collision_mushroom);
    }
}
