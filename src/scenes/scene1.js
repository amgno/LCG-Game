let img_background;
let player;
let ss_player;
let floor;
let background;
let isnoclip = false;
let txt_score;
let vecchia;
let deathimg;


let hpimg;
let hpi;
let hpi2;
let hpi3;

let testcamera;


let fagioliimg;
let fagioli;
let fagioli2;
let fagioli3;
let fagioli4;
let fagioli5;
let text_inst;
let passedtime=0;
let rain;

function collision(s, player, platform){
    // console.log("a")
    if(player.geometry.y <= platform.geometry.y){
        player.is_on_platform = true;
        }
}


function preload(s) {
    fagioliimg = PP.assets.image.load(s, "assets/images/fagioli.png")
    img_background = PP.assets.image.load(s, "assets/images/background.png");
    // ss_player = PP.assets.sprite.load_spritesheet(s, "assets/", 223, 190);
    ss_player = PP.assets.sprite.load_spritesheet(s, "assets/images/sprite.png", 82.5, 165);
    // preload_platforms(s);
    vecchia = PP.assets.image.load(s, "assets/images/vecchia.png")
    preload_mushrooms(s);
    preload_rain(s);
    hpimg = PP.assets.image.load(s, "assets/images/cuoreimg.png")


};



function create(s) {
    
    PP.gameState.set_variable("vita", 0);
    // background = PP.assets.tilesprite.add(s, img_background, 0, -4520, 2280, 5300, 0, 0);
    background = PP.assets.image.add(s, img_background, 0, -4540, 0, 0);

    PP.assets.image.add(s, vecchia, 70, 460, 0,0);

    hpi = PP.assets.image.add(s, hpimg, 50, 60, 0,0)
    hpi2 = PP.assets.image.add(s, hpimg, 120, 60, 0,0)
    hpi3 = PP.assets.image.add(s, hpimg, 190, 60, 0,0)
    hpi.tile_geometry.scroll_factor_x = 0;
    hpi.tile_geometry.scroll_factor_y = 0;
    hpi2.tile_geometry.scroll_factor_x = 0;
    hpi2.tile_geometry.scroll_factor_y = 0;
    hpi3.tile_geometry.scroll_factor_x = 0;
    hpi3.tile_geometry.scroll_factor_y = 0;




    
    background.tile_geometry.flip_y = 1;

    // background = PP.assets.image.add(s, img_background, 0 , 0, 0, 0);
    player = PP.assets.sprite.add(s, ss_player, 390, 640, 0.5, 1);


    floor = PP.shapes.rectangle_add(s, 1040, 639, 3080, 1, "0x000000", 0);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    PP.physics.add_collider_f(s, player, floor, collision);

    // create_platforms(s, player);
    configure_player_animation(s, player);

    // testcamera = PP.shapes.rectangle_add(s, 641, 230, 1, 1, "0xFFFFFF", 1);
    // PP.camera.start_follow(s, testcamera, 0, 0);
    // PP.physics.add(s, testcamera, PP.physics.type.DYNAMIC);
    // PP.physics.set_allow_gravity(testcamera, false);

    create_mushrooms(s, player);

    create_rain(s, player);


    let colliderl = PP.shapes.rectangle_add(s, 290, 300, 1, 2000, "0xABCDEF", 0)
    PP.physics.add(s, colliderl, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, colliderl);

    let colliderr = PP.shapes.rectangle_add(s, 2520, 300, 1, 600, "0xABCDEF", 0)
    PP.physics.add(s, colliderr, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, colliderr);


    fagioli = PP.assets.image.add(s, fagioliimg, 2100, -617, 0, 0);
    fagioli2 = PP.assets.image.add(s, fagioliimg, 3557, -850, 0, 0);
    fagioli3 = PP.assets.image.add(s, fagioliimg, 1607.75, -3200, 0, 0);
    fagioli4 = PP.assets.image.add(s, fagioliimg, 738.5, -3465, 0, 0);
    fagioli5 = PP.assets.image.add(s, fagioliimg, 2697.25, -3550, 0, 0);


    PP.physics.add(s, fagioli, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, fagioli, regenhp);

    PP.physics.add(s, fagioli2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, fagioli2, regenhp);

    PP.physics.add(s, fagioli3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, fagioli3, regenhp);

    PP.physics.add(s, fagioli4, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, fagioli4, regenhp);

    PP.physics.add(s, fagioli5, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, fagioli5, regenhp);


    // configure_player_animation(s, player);v
};

function deathhandler(s, num){
    PP.gameState.set_Variable("deathimg", num);
    PP.scenes.start("death");
}


function regenhp(s, player, fagiolis){
    // console.log("a")
    PP.shapes.destroy(fagiolis);
    hp = 3;
}

function update(s) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.J)){
        player.geometry.x = 2000.5;
        player.geometry.y = -617;
    }

    if (hp === 0){
        if(diedfromrain){
            deathhandler(s, 6);
        }
        if (diedfromfall){
            deathhandler(s, 3)
        }
    }


    if (hp === 3){
        PP.shapes.destroy(hpi);
        PP.shapes.destroy(hpi2);
        PP.shapes.destroy(hpi3);

        hpi = PP.assets.image.add(s, hpimg, 50, 60, 0,0)
        hpi2 = PP.assets.image.add(s, hpimg, 120, 60, 0,0)
        hpi3 = PP.assets.image.add(s, hpimg, 190, 60, 0,0)
        hpi.tile_geometry.scroll_factor_x = 0;
        hpi.tile_geometry.scroll_factor_y = 0;
        hpi2.tile_geometry.scroll_factor_x = 0;
        hpi2.tile_geometry.scroll_factor_y = 0;
        hpi3.tile_geometry.scroll_factor_x = 0;
        hpi3.tile_geometry.scroll_factor_y = 0;
    }

    if (hp === 2){
        PP.shapes.destroy(hpi);
        PP.shapes.destroy(hpi2);
        PP.shapes.destroy(hpi3);
        hpi = PP.assets.image.add(s, hpimg, 50, 60, 0,0)
        hpi2 = PP.assets.image.add(s, hpimg, 120, 60, 0,0)
        hpi.tile_geometry.scroll_factor_x = 0;
        hpi.tile_geometry.scroll_factor_y = 0;
        hpi2.tile_geometry.scroll_factor_x = 0;
        hpi2.tile_geometry.scroll_factor_y = 0;
    }


    if (hp === 1){
        PP.shapes.destroy(hpi);
        PP.shapes.destroy(hpi2);
        PP.shapes.destroy(hpi3);
        hpi = PP.assets.image.add(s, hpimg, 50, 60, 0,0);
        hpi.tile_geometry.scroll_factor_x = 0;
        hpi.tile_geometry.scroll_factor_y = 0;
    }
    

    PP.camera.start_follow(s, player, -320, 300);
    // if(PP.camera.geometry.x > 900){
    //     PP.camera.geometry.x = 200;
    // }
    // PP.txt_score.start_follow(s, player, -320, 100);

    // PP.physics.set_velocity_y(testcamera, -110);


    // update_platforms(s, player);

    PP.physics.set_allow_gravity(player, true);

    if (isnoclip) {
        PP.physics.set_velocity_y(testcamera, 0);
    }


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.P)) {
        isnoclip = true;
        noclip(s, player, testcamera);

    } else {
        isnoclip = false;
        manage_player_update(s, player);
    }


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.B)){
        // console.log("x:"+player.geometry.x)
    }


    background.tile_geometry.y = PP.camera.get_scroll_y(s) * 0.05;

    // console.log(player.geometry.y);
    if (player.geometry.y <= -3950) {
        PP.scenes.start("scene2");
    }
    
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L)) {

        PP.scenes.start("scene2");
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K)) {
        PP.scenes.start("scene3");
    }



    if (PP.interactive.kb.is_key_down(s, PP.key_codes.Y)){
        console.log("x"+ " "+player.geometry.x);
        console.log("y"+ " "+player.geometry.y);
    }

};


function destroy(s) {
};




PP.scenes.add("scene1", preload, create, update, destroy);






