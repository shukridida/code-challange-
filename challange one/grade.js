//  declare a function
function gradeCalculation (marks){
    // declare a variable
        let grade =""
        if (marks < 0 && marks > 100){
         grade = "null" 
    } else if (marks > 79){
        grade = "A"
    }else if (marks >= 60 && marks <= 79){
           grade = "B" 
    }else if (marks >49 && marks <= 59) {
        grade = "c"
    }else if (marks >= 40 && marks <= 49){
        grade = "D"
    }else {
       grade ="E"
    }   return grade
    } console.log(gradeCalculation(54));
    
    