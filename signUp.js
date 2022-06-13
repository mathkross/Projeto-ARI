class SingUp {
    constructor() {
        this.formData = {
            email: '',
            name: '',
            lastname: '',
            password: '',
            passwordconfirmation: '',
            cpf: '',
            agreement: false
            
        }
        
        this.submmitButton = document.getElementById('btn-submit').addEventListener('click',  (event) => this.saveData(event, 'save'))

        this.inputName = document.getElementById('name')
        this.inputLname = document.getElementById('lastname')
        this.inputEmail = document.getElementById('email')
        this.inputSenha = document.getElementById('password')
        this.inputConfirmSenha = document.getElementById('passwordconfirmation')
        this.inputcpf = document.getElementById('cpf')
        this.inputTermos = document.getElementById('agreement')
        

        this.inputName.addEventListener('change',  (event) => this.updateFormData(event, 'name'))
        this.inputLname.addEventListener('change',  (event) => this.updateFormData(event, 'lastname'))
        this.inputEmail.addEventListener('change',  (event) => this.updateFormData(event, 'email'))
        this.inputSenha.addEventListener('change',  (event) => this.updateFormData(event, 'password'))
        this.inputConfirmSenha.addEventListener('change',  (event) => this.updateFormData(event, 'passwordconfirmation'))
        this.inputcpf.addEventListener('change',  (event) => this.updateFormData(event, 'cpf'))
        this.inputTermos.addEventListener('change',  (event) => this.updateFormData(event, 'agreement'))
      
    }

    updateFormData(event, keyName){
        if(keyName === 'cpf'){
            const cpfFormat =  event.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            this.formData.cpf = cpfFormat;
            document.getElementById(keyName).value = cpfFormat;
            return
        }
        this.formData[keyName] = event.target.value
        document.getElementById(keyName).value = event.target.value;

    }

    saveData(event){
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || []
        users.push(this.formData);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html';
        console.log(this.formData)

        // pag login
    }
    
}

const singUp = new SingUp();