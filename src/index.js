import validator from './validator.js';

// console.log(validator);

//constantes de barra de navegación
const home = document.getElementById("home");
const quienesSomos = document.getElementById("quienesSomos");
const purpose = document.getElementById("purpose");
const solicitud = document.getElementById("solicitud");
const contact = document.getElementById("contact");
const menu = document.querySelector(".menu");

//constantes principales de secciones
const pagMain = document.querySelector(".pagMain");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const btnSolicitud =document.getElementById("btnSolicitud");
const section5 = document.querySelector(".section5");
const request = document.querySelector(".request");
const pagValid = document.querySelector(".pagValid");
const copyR = document.querySelector(".copyR");

//Constantes a usarse en la Sección que indica validez de la tarjeta
    const validCard = document.getElementById("validCard");
    const invalidCard = document.getElementById("invalidCard");
    const incomplete = document.getElementById("incomplete");
    const nextVisa = document.getElementById("nextVisa");
    // const nextAmex = document.getElementById("nextAmex");
    const nextDiners = document.getElementById("nextDiners");
    const nextMaster = document.getElementById("nextMaster");
    const clean= document.getElementById("clean");

 //eventos de la barra de navegación
    //Haciendo Click en pag home
    home.addEventListener("click",() =>{
        copyR.classList.remove("hide");
        section1.classList.remove("hide");
        section5.classList.remove("hide");
        section3.classList.remove("hide");
        section2.classList.remove("hide")
        section4.classList.remove("hide");
    })
    //Haciendo click en la barra: quienes somos
    quienesSomos.addEventListener("click",() => {
        section1.classList.add("hide");
        section5.classList.add("hide");
        section3.classList.add("hide");
        section4.classList.add("hide");
        section2.classList.remove("hide")
    })
    //Haciendo click en la barra: Propósito
    purpose.addEventListener("click",() => {
        section1.classList.add("hide");
        section5.classList.add("hide");
        section2.classList.add("hide");
        section3.classList.remove("hide");
        section4.classList.add("hide");
    })
    //Haciendo click en la barra: Solicitud
    solicitud.addEventListener("click",() => {
        section1.classList.add("hide");
        section5.classList.add("hide");
        section2.classList.add("hide");
        section4.classList.remove("hide");
        section3.classList.add("hide");
    })
    //Haciendo click en la barra: contact
    contact.addEventListener("click",() => {
        section1.classList.add("hide");
        section3.classList.add("hide");
        section2.classList.add("hide");
        section4.classList.add("hide");
        section5.classList.remove("hide");

    })

//Haciendo Click en la sección 4
    btnSolicitud.addEventListener("click",() =>{
        menu.classList.add("hide");
        pagMain.classList.add("hide");
        section5.classList.add("hide");
        request.classList.remove("hide");
        incomplete.classList.add("hide");
        validCard.classList.add("hide");
        invalidCard.classList.add("hide");
        clean.classList.add("hide");
        nextVisa.classList.add("hide");
        // nextAmex.classList.add("hide");
        nextDiners.classList.add("hide");
        nextMaster.classList.add("hide");
        putName.value = "";
        putLastName.value = "";
        putDateValid.value = "";
        putMail.value = "";
        putNumberCard.value = "";

    })

//haciendo Click en el botón retornar al main desde el formulario

const btnBackMain = document.getElementById('btnBackMain');
btnBackMain.addEventListener('click',()=>{
    // pagValid.classList.add("hide");
    pagMain.classList.remove("hide");
    section5.classList.remove("hide");
    request.classList.add("hide");
    menu.classList.remove("hide");
    section1.classList.remove("hide");
    section2.classList.remove("hide");
    section3.classList.remove("hide");
})

//VALIDACIÓN DE TARJETA
//Constantes del llenado de formulario
const putName =document.getElementById("putName");
const putLastName =document.getElementById("putLastName");
const putDateValid = document.getElementById("putDateValid");
const putMail = document.getElementById("putMail");
const putNumberCard = document.getElementById("putNumberCard");
//constantes de elección de tarjeta
const cardVisa=document.getElementById("cardVisa");
// const cardAmericanExp=document.getElementById("cardAmericanExp");
const cardDiners=document.getElementById("cardDiners");
const cardMasterCard=document.getElementById("cardMasterCard");

//Constantes de monto a solicitar despues del maskify
const montoSolicitar = document.getElementById("montoSolicitar");
const btnRequest = document.getElementById("btnRequest");
const textConfirmation = document.querySelector(".textConfirmation");
const inputEmail = document.getElementById("inputEmail");
const returnMain = document.getElementById ("returnMain");
//Constantes a usarse en el diseño de la tarjeta VISA
    const pagVisa = document.querySelector(".pagVisa");
    const numCardVisa = document.querySelector(".numCardVisa");
    const nameUserVisa = document.querySelector(".nameUserVisa");
    const validUntilVisa = document.querySelector(".validUntilVisa");
//Constantes a usarse en el diseño de la tarjeta American Express
    // const pagAmex = document.querySelector(".pagAmex");
    // const numCardAmex = document.querySelector(".numCardAmex");
    // const nameUserAmex = document.querySelector(".nameUserAmex");
    // const validUntilAmex = document.querySelector(".validUntilAmex");
//Constantes a usarse en el diseño de la tarjeta Diners Club International
    const pagDiners = document.querySelector(".pagDiners");
    const numCarDiners = document.querySelector(".numCarDiners");
    const nameUserDiners = document.querySelector(".nameUserDiners");
    const validUntilDiners = document.querySelector(".validUntilDiners");
//Constantes a usarse en el diseño de la tarjeta MasterCard
    const pagMasterCard = document.querySelector(".pagMasterCard");
    const numCardMasterCard = document.querySelector(".numCardMasterCard");
    const nameUserMasterCard = document.querySelector(".nameUserMasterCard");
    const validUntilMasterCard = document.querySelector(".validUntilMasterCard");


    //TARJETA VISA
    cardVisa.addEventListener("click",() =>{
        if( putName.value =="" &&  putLastName.value == "" && putDateValid.value == "" && putMail.value =="" && putNumberCard.value =="" ){

            incomplete.classList.remove("hide");
            validCard.classList.add("hide");
            invalidCard.classList.add("hide");
            clean.classList.add("hide");
            nextVisa.classList.add("hide");
            // nextAmex.classList.add("hide")
            nextDiners.classList.add("hide");
            nextMaster.classList.add("hide");

        }
        else {

            if(validator.isValid(putNumberCard.value)==true){
                validCard.classList.remove("hide");
                incomplete.classList.add("hide");
                invalidCard.classList.add("hide");
                clean.classList.add("hide");
                nextVisa.classList.remove("hide");
                // nextAmex.classList.add("hide");
                nextDiners.classList.add("hide");
                nextMaster.classList.add("hide");
              }
              else if (validator.isValid(putNumberCard.value)==false){
                validCard.classList.add("hide");
                invalidCard.classList.remove("hide");
                incomplete.classList.add("hide");
                clean.classList.remove("hide");
                nextVisa.classList.add("hide");
                // nextAmex.classList.add("hide");
                nextDiners.classList.add("hide");
                nextMaster.classList.add("hide");
            }
        }
      })

    clean.addEventListener("click", () => {
            putName.value = "";
            putLastName.value = "";
            putDateValid.value = "";
            putMail.value = "";
            putNumberCard.value = "";
    })

    nextVisa.addEventListener("click",() => {
        pagValid.classList.remove("hide");
        menu.classList.add("hide");
        pagMain.classList.add("hide");
        section5.classList.add("hide");
        request.classList.add("hide");
        // pagAmex.classList.add("hide");
        pagDiners.classList.add("hide");
        pagMasterCard.classList.add("hide");
        textConfirmation.classList.add("hide");
        returnMain.classList.add("hide");
        numCardVisa.innerHTML = validator.maskify(putNumberCard.value);
        nameUserVisa.innerHTML = putLastName.value + " "+ putName.value;
        validUntilVisa.innerHTML = "Fecha de Validez: " + putDateValid.value;
    })

    btnRequest.addEventListener("click",() => {
        textConfirmation.classList.remove("hide");
        inputEmail.innerHTML = putMail.value;
        montoSolicitar.value ="";
        returnMain.classList.remove("hide");
    })
    returnMain.addEventListener("click",() => {
       pagValid.classList.add("hide");
       pagMain.classList.remove("hide");
       section5.classList.remove("hide");
       menu.classList.remove("hide");
       section1.classList.remove("hide");
       section2.classList.remove("hide");
       section3.classList.remove("hide");
    })

//TARJETA MASTERCARD
cardMasterCard.addEventListener("click",() =>{
    if( putName.value =="" &&  putLastName.value == "" && putDateValid.value == "" && putMail.value =="" && putNumberCard.value =="" ){

        incomplete.classList.remove("hide");
        validCard.classList.add("hide");
        invalidCard.classList.add("hide");
        clean.classList.add("hide");
        nextVisa.classList.add("hide")
        // nextAmex.classList.add("hide")
        nextDiners.classList.add("hide")
        nextMaster.classList.add("hide");

    }
    else {

        if(validator.isValid(putNumberCard.value)==true){
            validCard.classList.remove("hide");
            incomplete.classList.add("hide");
            invalidCard.classList.add("hide");
            clean.classList.add("hide");
            nextVisa.classList.add("hide");
            // nextAmex.classList.add("hide");
            nextDiners.classList.add("hide");
            nextMaster.classList.remove("hide");
          }
          else if (validator.isValid(putNumberCard.value)==false){
            validCard.classList.add("hide");
            invalidCard.classList.remove("hide");
            incomplete.classList.add("hide");
            clean.classList.remove("hide");
            nextVisa.classList.add("hide");
            // nextAmex.classList.add("hide");
            nextDiners.classList.add("hide");
            nextMaster.classList.add("hide");
        }
    }
  })

    nextMaster.addEventListener("click",() => {
    pagValid.classList.remove("hide");
    menu.classList.add("hide");
    pagMain.classList.add("hide");
    section5.classList.add("hide");
    request.classList.add("hide");
    pagVisa.classList.add("hide")
    // pagAmex.classList.add("hide");
    pagDiners.classList.add("hide");
    pagMasterCard.classList.remove("hide");
    textConfirmation.classList.add("hide");
    returnMain.classList.add("hide");
    numCardMasterCard.innerHTML = validator.maskify(putNumberCard .value);
    nameUserMasterCard.innerHTML = putLastName.value + " "+ putName.value;
    validUntilMasterCard.innerHTML = "Fecha de Validez: " + putDateValid.value;
})

//TARJETA DINERS CLUB INTERNATIONAL
cardDiners.addEventListener("click",() =>{
    if( putName.value =="" &&  putLastName.value == "" && putDateValid.value == "" && putMail.value =="" && putNumberCard.value =="" ){

        incomplete.classList.remove("hide");
        validCard.classList.add("hide");
        invalidCard.classList.add("hide");
        clean.classList.add("hide");
        nextVisa.classList.add("hide")
        // nextAmex.classList.add("hide")
        nextDiners.classList.add("hide")
        nextMaster.classList.add("hide");

    }
    else {

        if(validator.isValid(putNumberCard.value)==true){
            validCard.classList.remove("hide");
            incomplete.classList.add("hide");
            invalidCard.classList.add("hide");
            clean.classList.add("hide");
            nextVisa.classList.add("hide");
            // nextAmex.classList.add("hide");
            nextDiners.classList.remove("hide");
            nextMaster.classList.add("hide");
          }
          else if (validator.isValid(putNumberCard.value)==false){
            validCard.classList.add("hide");
            invalidCard.classList.remove("hide");
            incomplete.classList.add("hide");
            clean.classList.remove("hide");
            nextVisa.classList.add("hide");
            // nextAmex.classList.add("hide");
            nextDiners.classList.add("hide");
            nextMaster.classList.add("hide");
        }
    }
  })

    nextDiners.addEventListener("click",() => {
    pagValid.classList.remove("hide");
    menu.classList.add("hide");
    pagMain.classList.add("hide");
    section5.classList.add("hide");
    request.classList.add("hide");
    pagVisa.classList.add("hide")
    // pagAmex.classList.add("hide");
    pagDiners.classList.remove("hide");
    pagMasterCard.classList.add("hide");
    textConfirmation.classList.add("hide");
    returnMain.classList.add("hide");
    numCarDiners.innerHTML = validator.maskify(putNumberCard .value);
    nameUserDiners.innerHTML = putLastName.value + " "+ putName.value;
    validUntilDiners.innerHTML = "Fecha de Validez: " + putDateValid.value;
})


    // //TARJETA AMERICAN EXPRESS

    // cardAmericanExp.addEventListener("click",() =>{
    //     if( putName.value &&  putLastName.value && putDateValid.value && putMail.value && putNumberCard.value ){
    //         if(validator.isValid(putNumberCard.value)==true){
    //             validCard.classList.remove("hide");
    //             invalidCard.classList.add("hide");
    //             clean.classList.add("hide");
    //             next.classList.remove("hide");
    //           }
    //           else if (validator.isValid(putNumberCard.value)==false){
    //             validCard.classList.add("hide");
    //             invalidCard.classList.remove("hide");
    //             clean.classList.remove("hide");
    //             next.classList.add("hide");
    //         }
    //     } else{
    //         alert('llenar campo vacío')
    //     }
    //     })

    //   clean.addEventListener("click", () => {
    //       putName.value = "";
    //       putLastName.value = "";
    //       putDateValid.value = "";
    //       putMail.value = "";
    //       putNumberCard.value = "";
    //   })

    //   next.addEventListener("click",() => {
    //       pagValid.classList.remove("hide");
    //       menu.classList.add("hide");
    //       pagMain.classList.add("hide");
    //       section5.classList.add("hide");
    //       request.classList.add("hide");
    //       pagVisa.classList.add("hide");
    //       pagAmex.classList.remove("hide");
    //       pagDiners.classList.add("hide");
    //       pagMasterCard.classList.add("hide");
    //       textConfirmation.classList.add("hide");
    //       returnMain.classList.add("hide");
    //       numCardVisa.innerHTML = validator.maskify(putNumberCard.value);
    //       nameUserVisa.innerHTML = putLastName.value + " "+ putName.value;
    //       validUntilVisa.innerHTML = "Fecha de Validez: " + putDateValid.value;
    //   })

    //   btnRequest.addEventListener("click",() => {
    //       textConfirmation.classList.remove("hide");
    //       inputEmail.innerHTML = putMail.value;
    //       montoSolicitar.value ="";
    //       returnMain.classList.remove("hide");
    //   })
    //   returnMain.addEventListener("click",() => {
    //      pagValid.classList.add("hide");
    //      pagMain.classList.remove("hide");
    //      section5.classList.remove("hide");
    //      menu.classList.remove("hide");
    //   })







