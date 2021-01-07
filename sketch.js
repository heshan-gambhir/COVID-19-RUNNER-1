var doctor;
var covid19;
var medicalKits;
var PPEKits;
var backgroundImg;

function preload(){
backgroundImg = loadImage("images/background.JPEG")
covid19 = loadImage("images/Covid-19.JPEG")
doctor = loadImage("images/doctor.JPEG")
medicalKits = loadImage("images/medical kit.JPEG")
PPEKits = loadImage("images/ppe kit.JPEG")
}

function setup(){
createCanvas(displayWidth-50,displayHeight-150)
 doctor = createSprite(200,390);
 covid19 = createSprite(500,390);
 
}
function draw(){
background(backgroundImg)
    drawSprites();

}

function keyPressed(){
    if(keyCode ===37 ){
    doctor.velocityX=-1
    doctor.velocityY=0
    }
    if(keyCode ===39){
    doctor.velocityX=1
    doctor.velocityY=0

    }
    if(keyCode ===38 ){
    doctor.velocityY=-2
    doctor.velocityX=0

    }

    if(keyCode === 97){
        covid19.velocityX=-1
        covid19.velocityY=0
        }
        if(keyCode === 119){
        covid19.velocityX=1
        covid19.velocityY=0
    
        }
        if(keyCode ===100 ){
        covid19.velocityY=-2
        covid19.velocityX=0
    
        }
    }