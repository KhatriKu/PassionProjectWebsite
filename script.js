
var video = document.getElementById('video1'); 

function dosomething(){
    document.getElementById("greeting").innerHTML= "Hello and Goodbye";
    
}

function posture(){
    document.getElementById("posture").innerHTML= "In the video the correcct posture demonstrated is hips open, the passing foots placement is perpendicular to that of the target, with the center of gravity being a bisector of the right angle legs and knees are facing outwards, center of gravity is lowered for power";
} 

function updateText(elementName, text){
    document.getElementById(elementName).innerHTML=text;
}

function playVideo() {
            video.play();
        }

function pauseVideo() {
            video.pause();
        }

function forwardVideo() {
            video.currentTime += 1; // Move forward by 1 seconds
        }

function backwardVideo() {
            video.currentTime -= 1; // Move backward by 2 seconds
            if (video.currentTime < 0) { 
                video.currentTime = 0; 
            }
        }
