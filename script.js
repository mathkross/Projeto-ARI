class Validator {
    constructor() {
        this.validations = [
            'data-min-lenght',
            'data-max-lenght',
            'data-required',

        ]
    }


    validate(form) {
        let currentValidations = document.querySelectorAll('form .error-validations');

        if (currentValidations.length > 0) {
            this.cleanValidations(currentValidations);
        }

        let inputs = form.getElementsByTagName('input');

        let inputsArray = [...inputs];

        inputsArray.forEach(function (input) {
            for (let i = 0; this.validations.lenght > i; i++) {

                if (input.getAttribute(this.validations[i]) != null) {

                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    let value = input.getAttribute(this.validations[i]);

                    this[method](input, value);
                }
            }

        }, this);
    }

    minLenght(input, minValue) {
        let inputLenght = input.value.lenght;

        let errorMessage = `É necessário ter pelo menos ${minValue} caracteres`;

        if (inputLenght < minValue) {
            this.printMessage(input, errorMessage);
        }

    }
    //Passou do limite dos caracteres
    maxLenght(input, maxValue) {
        let inputLenght = input.value.lenght;

        let errorMessage = `É necessário ter menos de ${maxValue} caracteres`;
       
        if (inputLenght > maxValue) {
            this.printMessage(input, errorMessage);
        }

    }

    printMessage(input, msg) {

        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classlist.remove('template');

        inputParent.appendChild(template);

    }
    //Verificar input requerido
    required(input) {
        let inputValue = input.value;

        if(inputValue === ''){
            let errorMessage = `Campo Obrigatório`;

            this.printMessage(input, errorMessage);
        }
    }


    //limpar validaçoes
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }

}


let form = document.getElementById('register-form');
let submit = document.getElementById('button-submit');


submit.addEventListener('click', function (event) {

    event.preventDefault();
    validations.validate(form);
});