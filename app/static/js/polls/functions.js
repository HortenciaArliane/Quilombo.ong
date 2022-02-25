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