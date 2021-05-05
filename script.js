    //// Verificar tamanho máximo da tela //// 
let vidas = 1
let tempo = 100

function ajustaTamanhoJogo(){
   largura = window.innerWidth;
   altura = window.innerHeight;
}
   ajustaTamanhoJogo()

let cronometro = setInterval(function(){
   document.getElementById('id-cronometro').innerHTML = tempo
   tempo -= 1
   if(tempo <= -1){
      clearInterval(cronometro)
      window.location.href = 'derrota.html'
   }
   if(tempo <= -1 && vidas < 3){
      window.location.href = 'vitoria.html'
      
   }
},1000)  

   //// Scope Global ////

function posicaoAleatoriaMosca(){
   let mosca = document.getElementById('mosquito')
   let posicaoX = Math.floor((Math.random() * largura)) - 90;
   let posicaoY =  Math.floor((Math.random() * altura)) - 90;
   var mosquito = document.createElement('img');
   posicaoX = posicaoX < 0 ? 0 : posicaoX; 
   posicaoY = posicaoY < 0 ? 0 : posicaoY; 
   mosquito.src = 'img/mosca.png';
   mosquito.className = (`${tamanhoAleatorio()} ${ladoAleatorio()}`);
   mosquito.style.position = 'absolute';
   mosquito.style.left = posicaoX + 'px';
   mosquito.style.top = posicaoY + 'px';
   mosquito.id = 'mosquito'
   mosquito.onclick = function(){
      this.remove()
   }
   document.body.appendChild(mosquito);
   if(mosca){
      mosca.remove()
   }
   if(vidas > 3){
      window.location.href = 'derrota.html'
   }else{
      document.getElementById('v' + vidas).src ='img/coracao_vazio.png'
      vidas++
   }
}
   setInterval(() => {
      posicaoAleatoriaMosca() 
   }, 1000);

   //// Cria um número aléatorio, Retorna um  valor em class ////

function tamanhoAleatorio(){
   let classes = Math.floor(Math.random() * 3);
   if(classes === 0){
     return 'mosquitoW2';
   }else if(classes === 1){
      return 'mosquitoW3';
   }else{
      return 'mosquitoW1';
   }
}

   //// Cria um número aléatorio que retorna uma class ////

function ladoAleatorio(){
   let lado = Math.floor(Math.random() * 2)
   if(lado === 0){
     return 'positionRight'
   }
}

//// Cronometro //// 
