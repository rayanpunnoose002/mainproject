
let function1=function(){

 input=document.getElementById('error').value
 const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://typewise-ai.p.rapidapi.com/correction/whole_sentence",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"X-RapidAPI-Key": "6ba0726751msh4f8635c3603ab07p18b3fcjsn91e3bfd04292",
		"X-RapidAPI-Host": "typewise-ai.p.rapidapi.com"
	},
	"processData": false,
	"data":` {"text": "${input} ","keyboard": "QWERTY","languages": ["en"]}`
};

$.ajax(settings).done(function (response) {
    
	console.log(response);
    document.getElementById('corrected').innerHTML=response.corrected_text
    const map=document.getElementById('div');
    let cc="";
    for(i=0;i<1;i++){
    
     cc += `<div><li>${response.corrected_text }</li></div>`
     
     
    }
    map.innerHTML=cc
     console.log(response.tokens.length);
});

    }
   
