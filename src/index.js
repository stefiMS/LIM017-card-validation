import validator from './validator.js';

console.log(validator);

const pagInicio=document.querySelector(".pagInicio");
const putName=document.getElementById("putName");
const putLastName=document.getElementById("putLastName");
const putDateValid= document.getElementById("putDateValid");
const numberCard=document.getElementById("numberCard");
const cardVisa=document.getElementById("cardVisa");
const pagVisa=document.querySelector(".pagVisa");
const numCardVisa=document.querySelector(".numCardVisa");
const nameUser=document.querySelector(".nameUser");
const validUntil=document.querySelector(".validUntil");
//const btnValidCard=document.getElementById("btnValidCard");--- eliminar

//Página de CardVisa
cardVisa.addEventListener("click",() =>{
    if (putName.value.length==0 && putLastName.value.length==0 && putDateValid.value.length==0 
    && numberCard.value.length==0){
        alert("Debes completar todos los campos solicitados")
    }
    else if(validator.isValid(numberCard.value)==true){
        
        pagInicio.classList.add("hide");
        pagVisa.classList.remove("hide");
        numCardVisa.innerHTML=validator.maskify(numberCard.value);
        nameUser.innerHTML= putName.value + "  " + putLastName.value;
        validUntil.innerHTML= "Válido hasta: " + putDateValid.value;
        
    }
    
})
