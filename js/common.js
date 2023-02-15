  //Get element text 
  function getElementById(elementId){
    const phonePrice= document.getElementById(elementId);
    const phonePriceString = phonePrice.innerText;
    const phonePriceParse = parseInt(phonePriceString);
    return phonePriceParse;
  }

function setTextElementById(elementId,value){
    let subTotalElement = document.getElementById(elementId);
      subTotalElement.innerText = value;
}

//   function calculate sub total 
function CalculateSubTotal(){
      // calculate Price 
      const currentPhoneTotal = getElementById("phone-price");
      const currentCaseTotal = getElementById("case-price");
      const currentSubTotal = currentPhoneTotal + currentCaseTotal;
      //Sub Total Text;
      setTextElementById("sub-total",currentSubTotal)
    //   calculate Tex
    const texAmountString = (currentSubTotal * 0.1).toFixed(2);
    const texAmountParse =parseFloat(texAmountString)
    setTextElementById("text-amount",texAmountParse);

    //final Amount 
    const totalAmount = currentSubTotal + texAmountParse;
    setTextElementById("total",totalAmount);

}