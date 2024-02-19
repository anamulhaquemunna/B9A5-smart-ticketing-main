const availableSeat = document.getElementsByClassName('kbd');
let count = 0;
for (const chair of availableSeat) {
    chair.addEventListener("click", function (e) {
    if( count < 4 && !chair.classList.contains('booked')){

      
   
    e.target.classList.add('bg-green-400');
    e.target.classList.add('text-white');
   
    chair.classList.add('booked');
    count = count + 1;
    setElement('ticketTake', count);

    
    const seatBooked = parseInt(document.getElementById('unbookedSeat').innerText);
    const seatAvailable = seatBooked - 1;
    setElement('unbookedSeat', seatAvailable);


    
    const seatName = e.target.innerText;
    const price = document.getElementById('priceOfOneTicket').innerText;
    const convertedPrice = parseInt(price);

    const createList = document.getElementById('create-container');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = seatName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economy';
    const p3 = document.createElement('p');
    p3.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3)
    createList.appendChild(li);

   

    const total = document.getElementById('totalAmount').innerText;
    const afterConvertTheTotal = parseInt(total);

    const updatedTotal = afterConvertTheTotal + convertedPrice;
    setElement('totalAmount', updatedTotal);

  

    const convertGrandTotal = parseInt(document.getElementById('finalTotal').innerText);
    const afterGettingTheDiscount = convertGrandTotal + convertedPrice;
    setElement('finalTotal', afterGettingTheDiscount);

   
    if(count >= 4){
      couponApplyButton.disabled = false;
  
    }
    else{
      couponApplyButton.disabled = true;
    }
  
  }

  else if ( count>= 4){
    alert("you can not buy more than 4 tickets");
  }


    

  });
}





function setElement(id, value) {

  document.getElementById(id).innerText = value;

}



const couponApplyButton = document.getElementById('coupon15');

couponApplyButton.addEventListener('click', function () {

  const OfferCode = document.getElementById('couponText').value;
  const totalPrice = document.getElementById('totalAmount').innerText;
  const FirstGrandTotal = parseInt(document.getElementById('finalTotal').innerText);
  if (count >= 4) {
    if (OfferCode === "NEW15") {
      const firstCreateList = document.getElementById('create-container1');
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText = "Discount Price";
      const p2 = document.createElement('p');
      const discountPrice = totalPrice * 0.15;
      p2.innerText = discountPrice;
      li.appendChild(p);
      li.appendChild(p2);
      firstCreateList.appendChild(li);
      const restTotal = document.getElementById('finalTotal');
      restTotal.innerText = FirstGrandTotal - discountPrice;
      document.getElementById('couponText').value = "";
      const offerTextInput = document.getElementById('FirstInput');
      offerTextInput.classList.add('hidden');

    }
    else if(OfferCode === "Couple 20"){
      const firstCreateList = document.getElementById('create-container1');
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText = "Discount Price";
      const p2 = document.createElement('p');
      const discountPrice = totalPrice * 0.20;
      p2.innerText = discountPrice;
      li.appendChild(p);
      li.appendChild(p2);
      firstCreateList.appendChild(li);
      const restTotal = document.getElementById('finalTotal');
      restTotal.innerText = FirstGrandTotal - discountPrice;
      document.getElementById('couponText').value = "";
      const offerTextInput = document.getElementById('FirstInput');
      offerTextInput.classList.add('hidden');

    }
    else {
      alert("Please type a valid coupon code");
      document.getElementById('couponText').value = "";
    }
  }
  else {
    alert("Select minimum 4 tickets");
  }

  


});