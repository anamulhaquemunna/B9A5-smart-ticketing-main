const availableSeat = document.getElementsByClassName('kbd');
let count = 0;
for (const chair of availableSeat) {
    chair.addEventListener("click", function (e) {
    if( count < 4 && !chair.classList.contains('booked')){

      
   
    e.target.classList.add('bg-green-400');
   
    chair.classList.add('booked');
    count = count + 1;
    setElement('ticketTake', count);

    
    const seatBooked = parseInt(document.getElementById('seatLeft').innerText);
    const seatAvailable = seatBooked - 1;
    setElement('seatLeft', seatAvailable);


    
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
    const convertedTotal = parseInt(total);

    const updatedTotal = convertedTotal + convertedPrice;
    setElement('totalAmount', updatedTotal);

  

    const grandTotal = parseInt(document.getElementById('finalTotal').innerText);
    const updatedGrandTotal = grandTotal + convertedPrice;
    setElement('finalTotal', updatedGrandTotal);

   
    if(count >= 4){
      cuponBtn.disabled = false;
  
    }
    else{
      cuponBtn.disabled = true;
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



const cuponBtn = document.getElementById('coupon15');

cuponBtn.addEventListener('click', function () {

  const cuponCode = document.getElementById('couponText').value;
  const totalPrice = document.getElementById('totalAmount').innerText;
  const grandTotal1 = parseInt(document.getElementById('finalTotal').innerText);
  if (count >= 4) {
    if (cuponCode === "NEW15") {
      const createList1 = document.getElementById('create-container1');
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText = "Discount Price";
      const p2 = document.createElement('p');
      const discountPrice = totalPrice * 0.15;
      console.log(discountPrice);
      p2.innerText = discountPrice;
      li.appendChild(p);
      li.appendChild(p2);
      createList1.appendChild(li);
      const restTotal = document.getElementById('finalTotal');
      restTotal.innerText = grandTotal1 - discountPrice;
      document.getElementById('couponText').value = "";
      const cuponInput = document.getElementById('FirstInput');
      cuponInput.classList.add('hidden');

    }
    else if(cuponCode === "Couple 20"){
      const createList1 = document.getElementById('create-container1');
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText = "Discount Price";
      const p2 = document.createElement('p');
      const discountPrice = totalPrice * 0.20;
      console.log(discountPrice);
      p2.innerText = discountPrice;
      li.appendChild(p);
      li.appendChild(p2);
      createList1.appendChild(li);
      const restTotal = document.getElementById('finalTotal');
      restTotal.innerText = grandTotal1 - discountPrice;
      document.getElementById('couponText').value = "";
      const cuponInput = document.getElementById('FirstInput');
      cuponInput.classList.add('hidden');

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