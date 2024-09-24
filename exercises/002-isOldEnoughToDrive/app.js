let age=0;

function isOldEnoughToDrive(age) {
    let apodo =prompt('Como te gustaria que te llamara?');
    var age= prompt('que edad tienes?');
    if (age<16){
        consolole.log(' No puedes conducir con '+ age +'  años de edad  '+apodo);
        
    }
    else if(
        age>=16){
            var age=console.log('Ya puedes conducir '+ apodo+' tienes '+ age+' edad suficiente para beber')
        }
    
 return isOldEnoughToDrive(age)   // your code here
    
}
console.log(isOldEnoughToDrive(age));
