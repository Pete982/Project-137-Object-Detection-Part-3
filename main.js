cocossd_status = "";

TheInputText = "";

objects = [];

function setup(){
 canvas = createCanvas(303, 303);

 canvas.position(480, 480);

 video = createCapture(VIDEO);

 video.size(303, 303);

 video.hide();


}

function start(){

objectDetector = ml5.objectDetector("cocossd", modelloaded);

document.getElementById("status").innerHTML = "The Status is Detecting Objects";

}

function modelloaded(){
    console.log("The Canvas Model is Loaded!!!")

  cocossd_status = true;
}
function gotResults(error, results){
   if(error )

    console.error(error);

   console.log(results);

   objects = results;
 
}

function draw(){

image(video, 0, 0, 303, 303);

 if(status1 != "")
      {
        r =  random(255);
        g =  random(255);
        b =  random(255);      
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
 
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

          if(objects[i].label == TheInputText);
          video.stop();

          object_detector.detect(gotResults);

          document.getElementById("object_found").innerHTML = TheTextInput+  "Found";

          var synth = window.speechSynthesis;

          var utterThis = new SpeechSynthesisUtterance(TheInputText + "Found");
          synth.speak(utterThis);
        }
          else { document.getElementById("object_found ").innerHTML = TheInputText + " It is Not found";

          }
        
      }    
    } 