const form = document.querySelector('#my-form');
const names = document.querySelector('#names');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const btn = document.querySelector('#btn');
const password = document.querySelector('#password');

var vailidity = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(names.value === '' || email.value === '' || password.value === ''){
        alert('Enter All Fields');
    }
    else{
        if(password.value.length <=6 || !password.value.match(vailidity)){
            alert('Enter valid password');
        }
        else if(names.value.length <4){
            alert('Enter valid Name');
        }
        else{
            alert('Successful Login');
            console.log("Succes");
            names.value='';
            email.value='';
            password.value='';
        }
    }
}



