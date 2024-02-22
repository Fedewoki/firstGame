const config = {

    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload : preload,
        create: create,
        update: update 
    }

}

var game = new Phaser.Game(config);


function preload(){
    this.load.image("jugador","./assets/jugador.png");

}
function create(){
    console.log("Soy 2");
}
function update(time,delta){
    console.log(delta);
   
}