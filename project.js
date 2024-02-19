let isPassengerName = false;
let isPhoneNumber = false;

let couponInput;
let price;
const selectSeatNumber = document.getElementById('selectSeatNumber');
const seats = document.getElementsByClassName('seat');
const seatDetails = document.getElementById('seatDetails');
const totalPrice = document.getElementById('totalPrice');
const apply = document.getElementById('apply');
const couponCode = document.getElementById('couponCode');
const grandPrice = document.getElementById('grandPrice');
const leftSeat = document.getElementById('leftSeat');
const passengerName = document.getElementById('passengerName');
const phoneNumber = document.getElementById('phoneNumber');
const next = document.getElementById('next');
const smApply = document.getElementById('smApply');


const seatHolder = [];



function ticketChecker(event) {
    console.log(event.target.innerText);



    const newTagPera = document.createElement('div');

    if (seatHolder.length < 4) {
        seatHolder.push(event.target.innerText);

        event.target.classList.add('bg-lime-500');

        const newPera1 = document.createElement('p');
        const newPera2 = document.createElement('p');
        const newPera3 = document.createElement('p');

        const seatName = document.createTextNode(event.target.innerText);
        newPera1.appendChild(seatName);

        const seatClass = document.createTextNode('Economy');
        newPera2.appendChild(seatClass);

        const seatPrice = document.createTextNode('550');
        newPera3.appendChild(seatPrice);

        newTagPera.appendChild(newPera1);
        newTagPera.appendChild(newPera2);
        newTagPera.appendChild(newPera3);


        newTagPera.classList.add('flex');
        newTagPera.classList.add('justify-between');
        newTagPera.classList.add('items-center');

        // total price

        price = 550 * seatHolder.length;


        totalPrice.innerText = 'BDT' + price;
    }
    console.log(seatHolder);

    selectSeatNumber.innerText = seatHolder.length;




    seatDetails.appendChild(newTagPera);


    leftSeat.innerText = 40 - seatHolder.length;
}

function couponCodeChecker(event) {
    console.log(event.target.value);
    couponInput = event.target.value;

    let isCoupon = false;

    if (couponInput === 'NEW15' || couponInput === 'Couple 20') {
        isCoupon = true;
    }

    if (isCoupon === true) {
        apply.removeAttribute('disabled');
    }

    if (isCoupon === true) {
        smApply.removeAttribute('disabled');
    }


}

function applyCoupon(event) {
    if (couponInput === 'NEW15' && seatHolder.length === 4) {
        price = price - (price * 0.15);
    }
    else if (couponInput === 'Couple 20' && seatHolder.length === 2) {
        price = price - (price * 0.20);
    }

    grandPrice.innerText = price;
}

function checkPassengerName(event) {
    console.log("show:", event.target.value.length);
    if (event.target.value.length !== 0) {
        isPassengerName = true;
    }
}

function checkPhoneNumber(event) {
    if (event.target.value.length !== 0) {
        isPhoneNumber = true;
    }
    if (isPassengerName === true && isPhoneNumber === true) {
        next.removeAttribute('disabled');
    }


}

// add event listener

couponCode.addEventListener('change', couponCodeChecker);
apply.addEventListener('click', applyCoupon);
passengerName.addEventListener('change', checkPassengerName);
phoneNumber.addEventListener('change', checkPhoneNumber);
smApply.addEventListener('click', applyCoupon);


for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', ticketChecker);
}

// next button click
function nextClick() {
    // hide the home page

    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    // show the confirmation page

    const successSection = document.getElementById('success');
    successSection.classList.remove('hidden')
}

// continue button click

function continueClick() {
    // hide success page

    const successSection = document.getElementById('success');
    successSection.classList.add('hidden');

    // show the home page

    const homeSection = document.getElementById('home');
    homeSection.classList.remove('hidden');

}

