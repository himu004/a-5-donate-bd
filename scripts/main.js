let totalBalance = getElementsId("total-balance");

console.log(totalBalance.innerText);

function card1Donation() {
    getElementsId("btn-1").addEventListener("click", function () {
   
        const inputAmount = getInputValue("input-1");
        const amount = parseInt(inputAmount);
        const totalDonation = getElementsId("card-1-donation");
        const valueTotal = totalDonation.innerText;
        const totalDonationNumber = parseInt(valueTotal);
      
        const newTotal = totalDonationNumber + amount;
        totalDonation.innerText = newTotal;
      
        const myBalance = parseInt(totalBalance.innerText);
        const newBalance = myBalance - amount;
        totalBalance.innerText = newBalance;
      
          
        my_modal_1.showModal()
      
        
      });
}

card1Donation();
