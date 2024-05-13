let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(score){

    let sum = 0;
    let length = score.length;
    for(let i=0;i<length;i++)
        {
            sum += score[i];
        }
    return sum/length;
}
let avg =  getAverage(myScores);
console.log("my average is :" + avg);
