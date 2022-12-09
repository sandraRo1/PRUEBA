const seccionBatalla = document.getElementById('batalla1');
const btnTijeras = document.getElementById('tijeras');
const msjBatalla = document.getElementById('mensaje batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const imgAtaquePc = document.getElementById('img-ataque-pc');

let Jugador;
let opcionPc;
let imgenJugador;
let juego;


const imagenes = [
    {
        name: "Piedra",
        url: "IMAGENES/Piedra.PNG" 
    },
    {
        name: "Papel",
        url: "IMAGENES/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "IMAGENES/Tijeras.PNG" 
    }
];



function iniciar(){
    seccionBatalla.style.display = 'none';
};

btnPiedra.addEventListener('click', function(){
    Jugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    Jugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    Jugador = "Tijeras";
    opPc();
})


function opPc(){
    var aleaorio = nAleatorio();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras"
    };

    batalla();

};

function batalla(){
    if(Jugador == opcionPc){
        msjBatalla.innerHTML = "Empataste!!";
    }else if(Jugador == "Piedra" && opcionPc == "Tijeras"){
        msjBatalla.innerHTML = "Felicidades Ganaste!";
    }else if(Jugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.innerHTML = "Felicidades Ganaste!!!";
    }else if(Jugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.innerHTML = " Felicidades Ganaste!";
    }else{
        msjBatalla.innerHTML = "Perdiste Sigue intentando";
    };

    addImagenes();

}


function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(Jugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            juego = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${juego} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    
};


window.addEventListener('load', iniciar);