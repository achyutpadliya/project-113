function preload(){

}

function setup(){
    cnavas = createCanvas(640,480);
    cnavas.position(110,250);
    video = createCapture(VIDEO)
    video.hide();
}

function draw(){
    fill("black")
    stroke("black")
    rect(0,0,640,480)
    image(video,20,20,600,440);
}

function take_snapshot(){
   save('achyut.png');
}


