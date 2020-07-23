//submit-btn handler
const submit = document.getElementById('submit-btn');
submit.addEventListener('click',function(){
    const submitAct = document.getElementById('login-area');
    submitAct.style.display = "none"
    const transaction = document.getElementById('transaction-area');
    transaction.style.display = "block"

})

// deposit button event handler

const depositvalue = document.getElementById('depositAmount');
    depositvalue.addEventListener('click',function(){
   
    const depositNumber = getInput("depositCount");

    

    

    updateTwoAmount("currentDeposit", depositNumber);

    document.getElementById('depositCount').value = "";

    updateTwoAmount("currentBalance", depositNumber);
    

    
    // updateAmount("afterWithdraw", total);

    
})  

function updateTwoAmount(id, depositNumber){
    const current= document.getElementById(id).innerText;
    const presentBalance = parseFloat(current);
    const total = presentBalance + depositNumber;
    document.getElementById(id).innerText = total;
}

//withdraw button event handler
document.getElementById("withdrawBtn").addEventListener("click", function(){
   const withdrawCount = getInput("withdrawInput");
   updateTwoAmount("afterWithdraw" ,withdrawCount)
   updateTwoAmount("currentBalance", -1* withdrawCount)
   document.getElementById("withdrawInput").value = "";

    

})
function getInput(id){
    const Value = document.getElementById(id).value;
    const amountNumber = parseFloat(Value);
    return amountNumber;
}




    

