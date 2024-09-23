let myTotalBalance = getElementsInINT("total-balance");
console.log(myTotalBalance);

const historyBtn = getElementsId("history-btn");
const donationBtn = getElementsId("donation-btn");

// sections
const donationSection = getElementsId("donation");
const historySection = getElementsId("history");

// menu btn click handles
historyBtn.addEventListener("click", function () {
  donationSection.classList.add("hidden");
  historySection.classList.remove("hidden");

  historyBtn.classList.add("bg-[#B4F461]", "text-black");
  historyBtn.classList.remove(
    "border-2",
    "border-[#111111B3]",
    "text-[#111111B3]"
  );

  donationBtn.classList.remove("bg-[#B4F461]", "text-black", "btn-outline");
  donationBtn.classList.add(
    "border-2",
    "border-[#111111B3]",
    "text-[#111111B3]"
  );
});

donationBtn.addEventListener("click", function () {
  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  donationBtn.classList.add("bg-[#B4F461]", "text-black");
  donationBtn.classList.remove(
    "border-2",
    "border-[#111111B3]",
    "text-[#111111B3]"
  );

  historyBtn.classList.remove("bg-[#B4F461]", "text-black", "btn-outline");
  historyBtn.classList.add(
    "border-2",
    "border-[#111111B3]",
    "text-[#111111B3]"
  );
});

function card1Donation() {
  getElementsId("btn-1").addEventListener("click", function () {

    const inputAmount = getInputValue("input-1");

    console.log(inputAmount);
    if (inputAmount < 0 || isNaN(inputAmount)) {
      return alert("Please Give Valid Input");
    } else if (myTotalBalance < inputAmount) {
      return alert("You Do Not Have Sufficient Balance");
    } else {
      const localTotalDonations = getElementsInINT("card-1-donation");

      const newTotalDonated = inputAmount + localTotalDonations;
      document.getElementById("card-1-donation").innerText = newTotalDonated;

      const newTotalBalance = myTotalBalance - inputAmount;
      getElementsId("total-balance").innerText = newTotalBalance;

      
    }
    my_modal_1.showModal();
    getElementsId("input-1").value = "";
    historyCreation(inputAmount, 'card-1-tittle')
  });
}
function card2Donation() {
    getElementsId("btn-2").addEventListener("click", function () {
  
      const inputAmount = getInputValue("input-2");
  
      console.log(inputAmount);
      if (inputAmount < 0 || isNaN(inputAmount)) {
        return alert("Please Give Valid Input");
      } else if (myTotalBalance < inputAmount) {
        return alert("You Do Not Have Sufficient Balance");
      } else {
        const localTotalDonations = getElementsInINT("card-1-donation");
  
        const newTotalDonated = inputAmount + localTotalDonations;
        document.getElementById("card-2-donation").innerText = newTotalDonated;
  
        const newTotalBalance = myTotalBalance - inputAmount;
        getElementsId("total-balance").innerText = newTotalBalance;
  
        
      }
      my_modal_1.showModal();
      getElementsId("input-2").value = "";
      historyCreation(inputAmount, 'card-2-tittle')
    });
}

function card3Donation() {
    getElementsId("btn-3").addEventListener("click", function () {
  
      const inputAmount = getInputValue("input-3");
  
      console.log(inputAmount);
      if (inputAmount < 0 || isNaN(inputAmount)) {
        return alert("Please Give Valid Input");
      } else if (myTotalBalance < inputAmount) {
        return alert("You Do Not Have Sufficient Balance");
      } else {
        const localTotalDonations = getElementsInINT("card-3-donation");
  
        const newTotalDonated = inputAmount + localTotalDonations;
        document.getElementById("card-3-donation").innerText = newTotalDonated;
  
        const newTotalBalance = myTotalBalance - inputAmount;
        getElementsId("total-balance").innerText = newTotalBalance;
  
        
      }
      my_modal_1.showModal();
      getElementsId("input-3").value = "";
      historyCreation(inputAmount, 'card-3-tittle')
    });
}

card1Donation();
card2Donation();
card3Donation();


