let x1=2;
let x2=5;
let y1=3;
let y2=6;

function distance(x1,x2,y1,y2)
{
    return Math.sqrt(((x2-x1)**2))+((y2-y1)**2);
}

console.log("Distance between the point is: " + distance(x1,x2,y1,y2));