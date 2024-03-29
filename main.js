function alert() {
    var num = Number(document.getElementById("txtnum").value);

    if (num % 2 == 0) {
        document.getElementById("spnresult").innerHTML = "<h1>Seu Número é <h4>Par</h4></h1>";
        document.getElementById("spnresult").classList.add("ativo")
    }

    else {
        document.getElementById("spnresult").innerHTML = "<h1>Seu Número é <h5>Impar</h5></h1>";
        document.getElementById("spnresult").classList.add("ativo")
    }
    if (num === 0) {
        document.getElementById("spnresult").classList.remove("ativo")
    }

};
const input = document.getElementById('txtnum');

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        alert()
    }
})
