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

function continueClick(){
    // hide success page

    const successSection = document.getElementById('success');
    successSection.classList.add('hidden');

    // show the home page

    const homeSection = document.getElementById('home');
    homeSection.classList.remove('hidden');


}