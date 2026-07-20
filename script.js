    
  function fuja(){
    var bataoNao = document.getElementById("Nao");
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    bataoNao.style.position = "absolute";
    bataoNao.style.left = x + "px";
    bataoNao.style.top = y + "px";


  }
    
    
    const btnSim = document.querySelector('#Sim');
    const btnNao = document.querySelector('#Nao');

        btnNao.addEventListener('click', function(){

            alert('Para, tu é que eu sei! esse queima!');

        });

        btnSim.addEventListener('click', function (){
            alert('Sabia kkk!');
    });
