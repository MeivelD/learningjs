const myTable = document.querySelector('.tabledetails');
const nameInput = document.getElementById('#name');
const psno = document.getElementById('#ps_no');
const dob = document.getElementById('#dob');
const emailIdInput = document.getElementById('#email');
const dateOfFilling = document.getElementById('#date');
const gender = document.getElementById('#gender');
const designationInput = document.getElementById('#designation');
const experienceInput = document.getElementById('#experience');
const msg = document.querySelector('.msg');

myTable.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || psno.value === '' || dob.value === '' || emailIdInput.value === '' || dateOfFilling.value === '' || gender.value === '' || designationInput.value === '' || experienceInput.value === '') {
        //alert("Please fill the details");
        msg.innerHTML('Please fill all fields');
    } else {
        console.log('SUCCESS');
    }
}