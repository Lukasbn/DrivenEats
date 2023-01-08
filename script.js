let prato
let drink
let doce
let preçoC
let preçoB
let preçoS
function SelecionarComida(Cselcionada){
    const JaSelecionda = document.querySelector(".principal .selecionado");
    if ((JaSelecionda !== null ) & (JaSelecionda !== Cselcionada)){
        JaSelecionda.classList.remove("selecionado");
    }

    Cselcionada.classList.add("selecionado");

    prato = document.querySelector(".principal .selecionado .comida").innerHTML;

    preçoC = document.querySelector(".principal .selecionado .preço span").innerHTML

    HabilitarBotao();
}
function SelecionarBebida(Bselcionada){
    const JaSelecionda = document.querySelector(".bebida .selecionado");
    if ((JaSelecionda !== null ) & (JaSelecionda !== Bselcionada)){
        JaSelecionda.classList.remove("selecionado");
    }

    Bselcionada.classList.add("selecionado");

    drink = document.querySelector(".bebida .selecionado .comida").innerHTML;

    preçoB = document.querySelector(".bebida .selecionado .preço span").innerHTML

    HabilitarBotao();
}
function SelecionarSobremesa(Sselcionada){
    const JaSelecionda = document.querySelector(".sobremesa .selecionado");
    if ((JaSelecionda !== null ) & (JaSelecionda !== Sselcionada)){
        JaSelecionda.classList.remove("selecionado")
    }

    Sselcionada.classList.add("selecionado")

    doce = document.querySelector(".sobremesa .selecionado .comida").innerHTML;

    preçoS = document.querySelector(".sobremesa .selecionado .preço span").innerHTML

    HabilitarBotao()
}
function HabilitarBotao(){
    if ((prato!==null) & (prato !==undefined)) {
        if ((drink!==null) & (drink!==undefined)) {
            if ((doce!==null) & (doce!==undefined)) {
                const botão = document.querySelector("button");

                botão.classList.add("habilitado");
                
                botão.removeAttribute("disabled");

                botão.innerHTML = "Fechar pedido";

                console.log(preçoC);
                console.log(preçoB);
                console.log(preçoS);
            }
    
        }
        
    }
}