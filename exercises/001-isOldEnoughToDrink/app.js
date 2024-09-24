let age=0;

function isOldEnoughToDrink(age) {
    let apodo =prompt('Como te gustaria que te llamara?');
    var age= prompt('que edad tienes?');
    if (age<21){
        consolole.log(' No puedes beber con '+ age +'  años de edad  '+apodo);
        
    }
    else if(
        age>=21){
            var age=console.log('Ya puedes beber '+ apodo+' tienes '+ age+' edad suficiente para beber')
        }
    
 return isOldEnoughToDrink(age)   // your code here
    
}
console.log(isOldEnoughToDrink(age));
