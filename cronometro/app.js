var hrs = document.getElementById('hrs')
var sec = 00;
var min = 00;

var btnIniciar = document.getElementById('iniciar')
var btnPausar = document.getElementById('pause')
var btnZerar = document.getElementById('zerar')
var myInterval;

function contar(){myInterval = setInterval(function(){
   sec++
   if(sec==60){
      sec = 0;
      min++;
   }
   // }else if(min==60){
   //    min = 0;
   // }

   if(min<10  && sec<10){
      hrs.innerHTML = `0${min}:0${sec}`;
   }
   else if(min<10 && sec>=10){
      hrs.innerHTML = `0${min}:${sec}`;
   }else if(min>=10 && sec<10){
      hrs.innerHTML = `${min}:0${sec}`;
   }
   else{
      hrs.innerHTML = `${min}:${sec}`;
   }
},1000)}

function pausar(){
   clearInterval(myInterval);
}

function zerar(){
   min=0;
   sec=0;
   hrs.innerHTML = `0${min}:0${sec}`;
}

btnIniciar.addEventListener('click', contar)
btnPausar.addEventListener('click', pausar)
btnZerar.addEventListener('click', zerar)