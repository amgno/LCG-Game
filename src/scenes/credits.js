let crediti;

function preload(s){
    crediti = PP.assets.image.load(s, "assets/images/crediti.png");
}


function create(s){
    // PP.assets.image.add(s, tavola3, 0, 0, 0, 0);
    // PP.assets.image.add(s, tavola2, 0, 0, 0, 0);
    PP.assets.image.add(s, crediti, 0, 0, 0, 0);
}

function next(s){
        PP.scenes.start("menu");
}

var isSelectFunctionCalled = false;
function update(s){

    // console.log(tavola);
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE) && !isSelectFunctionCalled) {
        next(s);
        isSelectFunctionCalled = true;
    } else if (!PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        isSelectFunctionCalled = false;
    }  
}
function destroy(s){}


PP.scenes.add("crediti", preload, create, update, destroy);