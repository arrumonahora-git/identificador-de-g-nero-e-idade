function verificar() {
  var data = new Date ()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('Verifique os dados e tente novamente!')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ' '
    var img = document.createElement('img')
    img.setAttribute('id', "foto")
    if (fsex[0].checked) {
        genero = 'homen'
        if (idade >=0 && idade < 10) {
            //Crianca
            img.setAttribute('src', 'homen-bebe.png')
        }else if (idade > 21){
            //jovem
            img.setAttribute('src', 'homen-adulto.png')
        }else if (idade < 50 ) {
            //adulto
            img.setAttribute('src', 'homen-adulto.png')
        }else {
            //idoso
            img.setAttribute('src', 'homen-idoso.png')
        }
            
        
    }else if (fsex[1].checked) {
        genero = 'mulher'
        if (idade >=0 && idade < 10){
            //Crianca
            img.setAttribute('src', 'mulher-bebe.png')            
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'mulher-adulta.png')
        }else if (idade < 50 ) {
            //adulta
            img.setAttribute('src', 'mulher-idosa.png')
        }else {
            //idosa
            img.setAttribute('src', 'mulher-idosa.png')
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   
  }
}