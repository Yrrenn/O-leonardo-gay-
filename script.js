let botaoSim = document.getElementById("Sim"); // Cria os dois botoes 
let botaoNao = document.getElementById("Nao");

botaoSim.addEventListener("click", function (){     //Da funciona lidade ao botao sim
    alert("Eu ja sabia kkkkkkkkk")
});

botaoNao.addEventisterner("click", function (){     //Da funcionalidade ao botao nao 
    alert("Boa tentativa kkkkkkk")
});

botaoNao.addEventListener("mouseover", function(){
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    botaoNao.style.left = x + "px";
    botaoSim.style.top = y + "px";  
});
