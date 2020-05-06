// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    //buttons
    let takeoffButton = document.getElementById('takeoff');
    let landingButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');

    let buttons = document.getElementById("button-panel");
    let up = buttons.getElementsByTagName("button")[0];
    let down = buttons.getElementsByTagName("button")[1];
    let right = buttons.getElementsByTagName("button")[2];
    let left = buttons.getElementsByTagName("button")[3];

    
    let rocket = document.querySelector("#shuttleBackground img");
    // html elements
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoffButton.addEventListener("click", function(){
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(result){
            flightStatus.innerHTML="Shuttle in flight";
            shuttleBackground.style.backgroundColor="blue";
            shuttleHeight.innerHTML=10000;
        }
    });

    landingButton.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML="The shuttle has landed.";
        shuttleBackground.style.backgroundColor="green";
        shuttleHeight.innerHTML=0;
    })

    abortButton.addEventListener("click", function(){
        let result = window.confirm("Confirm that you want to abort the mission.");
        if(result){
            flightStatus.innerHTML="Mission aborted.";
            shuttleBackground.style.backgroundColor="green";
            shuttleHeight.innerHTML=0;
        }
    })

});