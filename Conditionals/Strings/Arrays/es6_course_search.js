let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];
//  When does the PROG200 course start?

function programStart(arrayValue){
    if(arrayValue.CourseId=="PROG400")
        {
            return arrayValue.StartDate;
        }
}

let pgm = courses.find(programStart);

if(pgm!=undefined){
    console.log("the program start at :" + pgm.StartDate);
}
else{
    console.log("no such program")
}


//  What is the title of the PROJ500 course?
function programTitle(arrayValue){
    if(arrayValue.CourseId=="PROG500")
        {
            return arrayValue.courses;
        }
}

let title = courses.find(programTitle);

if(title!=undefined){
    console.log("the program start at :" + title.Title);
}
else{
    console.log("no such program")
}


//  What are the titles of the courses that cost $50 or less?
function findFee(arrayValue){
    if(arrayValue.Fee<=50){
        return arrayValue;
    }

}

let coursesUnder50 = courses.filter(findFee);
if(coursesUnder50.length>0)
    {
        console.log(coursesUnder50);
    }
else{
     console.log("no such program");
}

//  What  classes meet in "Classroom 1"?

function filterByLoc(arrayValue)
{
    if(arrayValue.Location=="Classroom 1"){
        return arrayValue;
    }
}

let couresClass1 = courses.filter(filterByLoc);
if(couresClass1.length>0){
    console.log(couresClass1);
}
else{
    console.log("No such program");
}

