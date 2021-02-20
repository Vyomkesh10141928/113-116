noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/ZYBVfpzH/mustache.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}
function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 80, 35);

}
function take_snapshot(){
    save('myFilterImage.png');
    }
function modelLoaded(){
    console.log("Posenet Loaded");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX= result[0].pose.nose.x-40;
        noseY= result[0].pose.nose.y;
        console.log("nose x -"+noseX);
        console.log("nose y -"+noseY);
    }
}