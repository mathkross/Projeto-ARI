window.addEventListener('load', () =>{ 
    const canvas = document.querySelector("#canvas");
    const contexto = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;

    function posicaoInicial(){
        painting = true;
        desenhar(e);
    }

    function posicaoFinal(){



        painting = true;
        contexto.beginPath();
    }

    function desenhar(e){
        if (!paiting) return;
        contexto.lineWidth = 10;
        contexto.lineCap = "round";

        contexto.lineTo(e.clientX, e.clientY);
        contexto.stroke();
        contexto.beginPath();
        contexto.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", posicaoInicial);
    canvas.addEventListener("mouseup", posicaoFinal);
    canvas.addEventListener("mousemove", desenhar);
});