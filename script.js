console.log("Kushal add different types of videos like webm and ogg so things work now matter the browser!!(and more lines of code)");

var video = document.getElementById('Video1');  playVideo();

//var video = document.getElementById('myVideo');

function dosomething(){
    document.getElementById("greeting").innerHTML= "Hello and Goodbye";
    
}

function posture(){
    document.getElementById("posture").innerHTML= "In the video the correcct posture demonstrated is hips open, the passing foots placement is perpendicular to that of the target, with the center of gravity being a bisector of the right angle legs and knees are facing outwards, center of gravity is lowered for power";
} 

function updateText(elementName, text){
    document.getElementById(elementName).innerHTML=text;
}

var video = document.getElementById('Video1');  playVideo();
        function playVideo() {
            video.play();
        }

        function pauseVideo() {
            video.pause();
        }

        function forwardVideo() {
            video.currentTime += 2; // Move forward by 2 seconds
        }

        function backwardVideo() {
            video.currentTime -= 2; // Move backward by 2 seconds
            if (video.currentTime < 2) { 
                video.currentTime = 0; 
            }
        }