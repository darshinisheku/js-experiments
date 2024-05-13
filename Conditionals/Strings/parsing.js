function parseAndDisplayName(fullName)
{
   // let fullName = "Brenda Kaye";
    let spacePos = fullName.indexOf(" ");
    
    let firstName = fullName.substring(0,spacePos);
    let lastNName = fullName.substring(spacePos+1);
    
    console.log('NAME :' + fullName);
    console.log('FIRST NAME :' + firstName);
    console.log('LAST NAME :' + lastNName);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
