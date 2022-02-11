/* function doubleIt(num){
    const result = num *2;
    return result;
}
console.log(doubleIt(5)) */

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    /* clear deposit input field */
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText); */
    const balanceTotalAmount = getCurrentBalance();
    
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + amount;
    }
    else{
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){
   /*  const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText); */
    const depositInputAmount = getInputValue('deposit-input');
    if(depositInputAmount > 0){
        updateTotalField('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);
    }
    
    /* get and update current deposit total */
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositInputAmount; */
    

    /* update balance */
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositInputAmount; */
    
    
});

/* handle withdraw total */

document.getElementById('withdraw-button').addEventListener('click', function(){
  /*  const withdrawInput = document.getElementById('withdraw-input');
   const withdrawInputText = withdrawInput.value;
   const withdrawInputAmount = parseFloat(withdrawInputText); */

   const withdrawInputAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
   if(withdrawInputAmount > 0 && withdrawInputAmount <= currentBalance){
    updateTotalField('withdraw-total', withdrawInputAmount);
    updateBalance(withdrawInputAmount, false);
   }
   if(withdrawInputAmount > currentBalance){
       console.log('you can not withdraw')
   }

   /* get and update withdraw total*/
   /* const withdrawTotal = document.getElementById('withdraw-total');
   const withdrawTotalText = withdrawTotal.innerText;
   const withdrawTotalAmount = parseFloat(withdrawTotalText);
   withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount; */
   

   /* update balance */
   /* const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const balanceTotalAmount = parseFloat(balanceTotalText);
   balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount;
    */

   
})