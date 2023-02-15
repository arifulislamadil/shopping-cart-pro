function updateCaseNumber(isIncrease) {
  let caseNumberField = document.getElementById("case-number-field");
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
function updateTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const getCasePrice = document.getElementById("case-price");
  const casePrice = (getCasePrice.innerText = caseTotalPrice);
}

//Handle Button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateTotalPrice(newCaseNumber);
  CalculateSubTotal();
});

document.getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateTotalPrice(newCaseNumber);
    CalculateSubTotal();
});
