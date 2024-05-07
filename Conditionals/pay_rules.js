const prompt = require("prompt-sync")();

function pay_calculator(rate,hours)
{
        if(hours>40)
        {
            let extra = hours-40;
            return ((extra*1.5*rate)+(rate*hours));
        }
        else
        {
            return rate*hours;
        }
}

let rate = prompt("enter the rate for work:");
let hours = prompt("enter the hours of work:");


console.log("Total pay is :" + pay_calculator(rate,hours));






