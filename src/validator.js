const validator = {
  isValid: (numberCreditCard) =>{
    const numCard = numberCreditCard;
    const arr = numCard.split("");
    const reverseArr = arr.reverse();
    for(let i = 0; i<reverseArr.length; i++){
      if(i%2==1){
        reverseArr[i] = parseInt(reverseArr[i])*2;
        if(reverseArr[i]<10){
          reverseArr[i];
        }
        else{
          reverseArr[i] = reverseArr[i]-9;
        }
      }
      else{
        reverseArr[i] = parseInt(reverseArr[i]);
      }
    }
    let sumArr = 0;
    for(let n=0; n<reverseArr.length; n++){
     
      sumArr += reverseArr[n];
    }
    if(sumArr%10==0){
      return true;
    }
    else{
       return false;
    }
  },
  maskify: (numberCreditCard)=>{
    const numCard=numberCreditCard;
    const sliceMask=numCard.slice(0,-4);
    let michi="";
    for (let i=0; i<sliceMask.length;i++){
      michi+="#";
    }
    const numberMask=numCard.replace(sliceMask,michi);
    return numberMask;
  }


  

}


export default validator;

