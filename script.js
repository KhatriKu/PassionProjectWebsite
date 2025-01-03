var clicks = 0;
if(clicks==3){
    clicks = 1;
}
function playPause(btn, Video1) {
    var video = document.getElementById(Video1);
    if(video.pause){
        video.play();
        btn.innerHTML = "Click To Pause(currently bugged)";
        //We use the btn.innerhtml to change what it says on the button
        //use a if then and a boolen with the % comparison for pause
    } else if(video.play){
        video.pause();
        btn.innerHTML = "Click To Play";
    }
}
console.log("//Kushal add different types of videos like webm and ogg so things work now matter the browser!!(and more lines of code)");

function dosomething(){
    document.getElementById("greeting").innerHTML= "Hello and Goodbye";
    
}
function posture(){
    document.getElementById("posture").innerHTML= "In the video the correcct posture demonstrated is hips open, the passing foots placement is perpendicular to that of the target, with the center of gravity being a bisector of the right angle legs and knees are facing outwards, center of gravity is lowered for power";
} 
