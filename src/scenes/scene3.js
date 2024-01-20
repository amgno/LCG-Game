//aggiungere hud, con chiavi sbiatite
//aggiungere punti riferimenti
//aggiungere tavole finali 


let img_background;
let player;
let ss_player;
let floor;
let background;
let isnoclip = false;


let vecchia;
let numkey;




let tubo1;
let tubo2;
let tubo3;
let tubo4;
let tubo5;
let tubo6;
let tubo7;
let tubo8;
let tubo9;
let tubo10;
let tubo11;
let tubo12;
let tubo13;
let tubo14;
let tubo15;
let tubo16;
let tubo17;
let tubo18;
let tubo19;
let tubo20;
let tubo21;
let tubo22;
let tubo23;
let tubo24;
let tubo25;
let tubo26;
let tubo27;
let tubo28;
let tubo29;
let tubo30;
let tubo31;
let tubo32;
let tubo33;
let tubo34;
let tubo35;
let tubo36;


let kimage;

let key1;
let key2;
let key3;





function collision(s, player, platform){
    if (player.geometry.y <= platform.geometry.y) {
        player.is_on_platform = true;
        }
}

function preload(s){
    ss_player = PP.assets.sprite.load_spritesheet(s, "assets/images/sprite.png", 82.5, 165);
    img_background = PP.assets.image.load(s, "assets/images/level3bg.png");
    kimage = PP.assets.image.load(s, "assets/images/key.png");
    vecchia = PP.assets.image.load(s, "assets/images/vecchia3.png")

}
function create(s){
    numkey = 0;
    background = PP.assets.image.add(s, img_background, -420, -858, 0, 0);
    player = PP.assets.sprite.add(s, ss_player, 100, 644, 0.5, 1);
    key1 = PP.assets.image.add(s, kimage, 4682, 1350, 0,0) //ok
    key2 = PP.assets.image.add(s, kimage, 3586, -606, 0,0)
    key3 = PP.assets.image.add(s, kimage, 400, 200, 0,0)
    configure_player_animation(s, player);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);
    // PP.shapes.rectangle_add(s, 100,200 ,100,220, "0x000000", 1)

    floor = PP.shapes.rectangle_add(s, 232, 722, 1277, 156, "0x000000", 0);

    PP.camera.start_follow(s, player,0,250);
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor, collision);

    tubo1 = PP.shapes.rectangle_add(s, 410, 489, 143.7152, 309.9965, "0x000000", 0);
    tubo2 = PP.shapes.rectangle_add(s, 990, 991, 239, 693, "0x000000", 0);
    tubo3 = PP.shapes.rectangle_add(s, 1308, 1032, 395, 85, "0x000000", 0);
    tubo4 = PP.shapes.rectangle_add(s, 1018, 1425, 1267, 175, "0x000000", 0);
    tubo5 = PP.shapes.rectangle_add(s, 718, 12, 1283, 234, "0x000000", 0);
    tubo6 = PP.shapes.rectangle_add(s, 1266, 218, 186, 177, "0x000000", 0);
    tubo7 = PP.shapes.rectangle_add(s, 1593, 242, 468, 131, "0x000000", 0);
    tubo8 = PP.shapes.rectangle_add(s, 1891, 61, 126, 1123, "0x000000", 0);
    tubo9 = PP.shapes.rectangle_add(s, 1455, -402, 744, 195, "0x000000", 0);
    tubo10 = PP.shapes.rectangle_add(s, 2076, -13, 243, 60, "0x000000", 0);
    tubo11 = PP.shapes.rectangle_add(s, 2545, 292, 877, 131, "0x000000", 0);
    tubo12 = PP.shapes.rectangle_add(s, 2586, 872, 1678, 143, "0x000000", 0);
    tubo13 = PP.shapes.rectangle_add(s, 2965, 599, 335, 124, "0x000000", 0);
    tubo14 = PP.shapes.rectangle_add(s, 3279, -27, 292, 1656, "0x000000", 0);
    tubo15 = PP.shapes.rectangle_add(s, 3606, 599, 361, 124, "0x000000", 0);
    tubo16 = PP.shapes.rectangle_add(s, 2731, -234, 803, 179, "0x000000", 0);
    tubo17 = PP.shapes.rectangle_add(s, 3816, -431, 782, 110, "0x000000", 0);
    tubo18 = PP.shapes.rectangle_add(s, 4289, -534, 163, 315, "0x000000", 0);
    tubo19 = PP.shapes.rectangle_add(s, 2822, 1255, 1988, 164, "0x000000", 0);
    tubo20 = PP.shapes.rectangle_add(s, 3650, 1486, 332, 297, "0x000000", 0);
    tubo21 = PP.shapes.rectangle_add(s, 4342, 1574, 1051, 122, "0x000000", 0);
    tubo22 = PP.shapes.rectangle_add(s, 4526, 1100, 110, 310, "0x000000", 0);
    tubo23 = PP.shapes.rectangle_add(s, 4217, 887, 1209, 114, "0x000000", 0);
    tubo24 = PP.shapes.rectangle_add(s, 4941, 691, 238, 505, "0x000000", 0);
    tubo25 = PP.shapes.rectangle_add(s, 4547, 307, 1026, 262, "0x000000", 0);
    tubo26 = PP.shapes.rectangle_add(s, 5360, -179, 1556, 117, "0x000000", 0);
    tubo27 = PP.shapes.rectangle_add(s, 5481, -407, 400, 337, "0x000000", 0);
    tubo28 = PP.shapes.rectangle_add(s, 5849, -514, 336, 121, "0x000000", 0);



    PP.physics.add(s, tubo1, PP.physics.type.STATIC);
    PP.physics.add(s, tubo2, PP.physics.type.STATIC);
    PP.physics.add(s, tubo3, PP.physics.type.STATIC);
    PP.physics.add(s, tubo4, PP.physics.type.STATIC);
    PP.physics.add(s, tubo5, PP.physics.type.STATIC);
    PP.physics.add(s, tubo6, PP.physics.type.STATIC);
    PP.physics.add(s, tubo7, PP.physics.type.STATIC);
    PP.physics.add(s, tubo8, PP.physics.type.STATIC);
    PP.physics.add(s, tubo9, PP.physics.type.STATIC);
    PP.physics.add(s, tubo10, PP.physics.type.STATIC);
    PP.physics.add(s, tubo11, PP.physics.type.STATIC);
    PP.physics.add(s, tubo12, PP.physics.type.STATIC);
    PP.physics.add(s, tubo13, PP.physics.type.STATIC);
    PP.physics.add(s, tubo14, PP.physics.type.STATIC);
    PP.physics.add(s, tubo15, PP.physics.type.STATIC);
    PP.physics.add(s, tubo16, PP.physics.type.STATIC);
    PP.physics.add(s, tubo17, PP.physics.type.STATIC);
    PP.physics.add(s, tubo18, PP.physics.type.STATIC);
    PP.physics.add(s, tubo19, PP.physics.type.STATIC);
    PP.physics.add(s, tubo20, PP.physics.type.STATIC);
    PP.physics.add(s, tubo21, PP.physics.type.STATIC);
    PP.physics.add(s, tubo22, PP.physics.type.STATIC);
    PP.physics.add(s, tubo23, PP.physics.type.STATIC);
    PP.physics.add(s, tubo24, PP.physics.type.STATIC);
    PP.physics.add(s, tubo25, PP.physics.type.STATIC);
    PP.physics.add(s, tubo26, PP.physics.type.STATIC);
    PP.physics.add(s, tubo27, PP.physics.type.STATIC);
    PP.physics.add(s, tubo28, PP.physics.type.STATIC);


    PP.physics.add_collider_f(s, player, tubo1, collision);
    PP.physics.add_collider_f(s, player, tubo2, collision);
    PP.physics.add_collider_f(s, player, tubo3, collision);
    PP.physics.add_collider_f(s, player, tubo4, collision);
    PP.physics.add_collider_f(s, player, tubo5, collision);
    PP.physics.add_collider_f(s, player, tubo6, collision);
    PP.physics.add_collider_f(s, player, tubo7, collision);
    PP.physics.add_collider_f(s, player, tubo8, collision);
    PP.physics.add_collider_f(s, player, tubo9, collision);
    PP.physics.add_collider_f(s, player, tubo10, collision);
    PP.physics.add_collider_f(s, player, tubo11, collision);
    PP.physics.add_collider_f(s, player, tubo12, collision);
    PP.physics.add_collider_f(s, player, tubo13, collision);
    PP.physics.add_collider_f(s, player, tubo14, collision);
    PP.physics.add_collider_f(s, player, tubo15, collision);
    PP.physics.add_collider_f(s, player, tubo16, collision);
    PP.physics.add_collider_f(s, player, tubo17, collision);
    PP.physics.add_collider_f(s, player, tubo18, collision);
    PP.physics.add_collider_f(s, player, tubo19, collision);
    PP.physics.add_collider_f(s, player, tubo20, collision);
    PP.physics.add_collider_f(s, player, tubo21, collision);
    PP.physics.add_collider_f(s, player, tubo22, collision);
    PP.physics.add_collider_f(s, player, tubo23, collision);
    PP.physics.add_collider_f(s, player, tubo24, collision);
    PP.physics.add_collider_f(s, player, tubo25, collision);
    PP.physics.add_collider_f(s, player, tubo26, collision);
    PP.physics.add_collider_f(s, player, tubo27, collision);
    PP.physics.add_collider_f(s, player, tubo28, collision);




    PP.physics.add(s, key1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, key1, collectkey);

    PP.physics.add(s, key2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, key2, collectkey);

    PP.physics.add(s, key3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, key3, collectkey);

    PP.assets.image.add(s, vecchia, -260, 465, 0,0);
}


function collectkey(s, player, keys){
    PP.shapes.destroy(keys);
    numkey = numkey + 1;
}



function deathhandler(s, num){
    PP.gameState.set_Variable("deathimg", num);
    PP.scenes.start("death");
}

let diedfromlost = 0

function update(s){
    manage_player_update(s, player);


    if (numkey === 1){
        key1 = PP.assets.image.add(s, kimage, 50, 60, 0,0) //ok
        key1.tile_geometry.scroll_factor_x = 0;
        key1.tile_geometry.scroll_factor_y = 0;
    }
    if (numkey === 2){
        key2 = PP.assets.image.add(s, kimage, 120, 60, 0,0) //ok
        key2.tile_geometry.scroll_factor_x = 0;
        key2.tile_geometry.scroll_factor_y = 0;
    }
    if (numkey === 3){
        key3 = PP.assets.image.add(s, kimage, 190, 60, 0,0) //ok
        key3.tile_geometry.scroll_factor_x = 0;
        key3.tile_geometry.scroll_factor_y = 0;
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.O)) {
        console.log(player.geometry.x + " " + player.geometry.y)
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.J)) {
        player.geometry.x = 3586;
        player.geometry.y = -606;
    }

    if(player.geometry.y > 2400) {
        hp = 0;
        diedfromlost = 1;
        deathhandler(s, 5)
    }



    if(numkey === 3){
        deathhandler(s, 20);
    }


}
function destroy(s){

}



PP.scenes.add("scene3", preload, create, update, destroy);