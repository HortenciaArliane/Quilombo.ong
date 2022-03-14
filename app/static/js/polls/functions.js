function exibirImagem() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
            exibir()
        };       
        file.readAsDataURL(this.files[0]);
    }
}

function exibir(){
    document.getElementById("preview").style.display = 'flex';
    document.getElementById("div-preview").style.display = 'flex';
}

function apagarImg(){
    document.getElementById('img-input').value = ''
    document.getElementById("preview").src = ""
    document.getElementById("div-preview").style.display = 'none';

}

document.getElementById("img-input").addEventListener("change", exibirImagem, false);

function abrirMenu(){
    display = document.getElementById('navbarScroll').style.display;
    if(display == "none")
    document.getElementById('navbarScroll').style.display = 'block';
    else
    document.getElementById('navbarScroll').style.display = 'none';

}

/*function HabiDsabi() {
    if (document.getElementById('habi').checked == true) {
        document.getElementById('envia').disabled = ""

    } if (document.getElementById('habi').checked == false) {
        document.getElementById('envia').disabled = "disabled"

    }
}

function Cad() {
    window.open("{% url 'account_signup' %}");
} */

