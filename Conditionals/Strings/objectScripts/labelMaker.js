let myInfo = {
    name: "Pursalane Faye", 
    address: "121 Cardinal Street",
    city:"newyork",
    state:"Texas",
    zip:"76126"
 };
 printContact(myInfo);

 function printContact(object){

    console.log(object.name);
    console.log(object.address);
    console.log(object.city+","+object.state+" "+object.zip);

 }