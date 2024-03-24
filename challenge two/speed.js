// describe a function 
function detectingSpeed (speed){
    // declare a variable
    let response = "";
    let demerits;  
    if (speed < 0){
          response = "null";
    }else if (speed  >= 0 && speed <= 70){
         response ="Ok"
    } else {
        let perPoint = 5;
        let difference = speed - 70;
        demerits = Math.floor (difference/perPoint);
        response = "points:" + demerits;

        if (demerits > 12){
            response = "License suspended"+ demerits;
        }
} 
return response;
}
console.log(detectingSpeed(154));