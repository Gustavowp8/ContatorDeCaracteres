var desc = document.getElementById('descricao')

console.log(desc);

desc.addEventListener("keypress", function(e){

    var inputLength = desc.value.length;
    const maxChars = 40; 
    res.innerHTML= `Digitados ${inputLength} | 40 caracteres`
    if(inputLength >= maxChars){
        e.preventDefault();
        alert('Não pode digitar mais!')
    }

})

function apagar() {
    window.location = 'index.html'
}