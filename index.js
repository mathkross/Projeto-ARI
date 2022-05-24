class Validador {
    constructor(){
        this.validations = [
            'data-min-lenght',
            
        ]
    }
}

validando(form) {
    let inputs = form.getElementsByTagName('input');
    console.log(inputs);

    let inputsArray=[...inputs];
    
    inputsArray.forEach(function(input){

    });
}


let form = document.getElementById('register-form');
let submit = document.getElementById('button-submit');


submit.addEventListener('click', function(event){

    event.preventDefault();
    Validador.validate(form);
});