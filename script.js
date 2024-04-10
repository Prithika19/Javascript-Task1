const button =document.querySelector('button')

let resultdiv =document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)
//eventliostner

button.addEventListener('click' ,displaystatus)
function displaystatus(){

   const input = document.getElementById("input");
   const city=input.options[input.selectedIndex].value
 
   let population=0,literacyRate=0;language=0;
switch(city){
    case 'Banglore':
        population =4646732
        literacyRate=90.20
        language='kanadam'
        break;

  case 'Chennai':
        population =4646732
        literacyRate=90.20
        language='Tamil'
        break
  case 'Delhi':
        population =4646732
        literacyRate=90.20
        language='hindhi'
        break;
  case 'Coimbatore':
        population =4646732
        literacyRate=90.20
        language='Tamil'
        break;
}

   let text = `The  Indian city ${city} has a Population of ${population} and the  Language spoken is ${language} and the literaracyRate is ${literacyRate} `
  console.log(text)

document.getElementById('result').innerHTML=text

}