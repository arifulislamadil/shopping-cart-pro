function updatePhoneNumber(isIncrease) {
    let caseNumberField = document.getElementById("phone-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease) {
      newCaseNumber = previousCaseNumber + 1;
    } else {
      newCaseNumber = previousCaseNumber - 1;
    }
  
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
  }
  //Update Total Price
  function updatePhoneTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 1219;
    const getCasePrice = document.getElementById("phone-price");
    const casePrice = (getCasePrice.innerText = caseTotalPrice);
  }


  
  //Handle Button
  document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const newCaseNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newCaseNumber);
    CalculateSubTotal();
  

  });
  
document.getElementById("btn-phone-minus").addEventListener("click", function () {
      const newCaseNumber = updatePhoneNumber(false);
      updatePhoneTotalPrice(newCaseNumber);
      CalculateSubTotal();
  });



  
  