var students = [['Sanjna', 90], ['Shahid', 80], ['Temp', 75], ['Vansh', 60]];
var Avgmarks = 0;
let marks=[90,80,75,60];
function findAvg(){
        for (var i=0; i < students.length; i++) {
                Avgmarks += students[i][1];
                var avg = (Avgmarks/students.length);
        }

        console.log("Average grade: " + (Avgmarks)/students.length);
                if (avg < 60){
                console.log("Grade : D");      
                } 
                else if (avg < 70) {
                        console.log("Grade : C"); 
                } 
                else if (avg < 80)  {
                        console.log("Grade : B"); 
                }
                else if (avg < 90) {
                        console.log("Grade : A"); 
                }
                else if (avg < 100) {
                        console.log("Grade : O"); 
                }
}

function generateFrequency(marks){       
        var hm = new Map();
        for (var i=0; i< marks.length; i++){
                if(hm.has(marks[i]))
                {
                hm.set(marks[i], hm.get(marks[i])+1);
                }
                else
                {
                hm.set(marks[i], 1);
                }
        }
}

console.log(findAvg());
console.log( generateFrequency(marks));