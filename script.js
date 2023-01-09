let prato;
let drink;
let doce;
let precoC;
let precoB;
let precoS;
function SelecionarComida(Cselcionada){
    const JaSelecionda = document.querySelector(".principal .selecionado");
    if ((JaSelecionda !== null ) & (JaSelecionda !== Cselcionada)){
        JaSelecionda.classList.remove("selecionado");
    }
    Cselcionada.classList.add("selecionado");
    prato = document.querySelector(".principal .selecionado .comida").innerHTML;
    precoC = document.querySelector(".principal .selecionado .preço span").innerHTML;
    HabilitarBotao();
}
function SelecionarBebida(Bselcionada){
    const JaSelecionda = document.querySelector(".bebida .selecionado");
    if ((JaSelecionda !== null ) & (JaSelecionda !== Bselcionada)){
        JaSelecionda.classList.remove("selecionado");
    }
    Bselcionada.classList.add("selecionado");
    drink = document.querySelector(".bebida .selecionado .comida").innerHTML;
    precoB = document.querySelector(".bebida .selecionado .preço span").innerHTML;
    HabilitarBotao();
}
function SelecionarSobremesa(Sselcionada){
    const JaSelecionda = document.querySelector(".sobremesa .selecionado");
    if ((JaSelecionda !== null ) & (JaSelecionda !== Sselcionada)){
        JaSelecionda.classList.remove("selecionado");
    }
    Sselcionada.classList.add("selecionado")
    doce = document.querySelector(".sobremesa .selecionado .comida").innerHTML;
    precoS = document.querySelector(".sobremesa .selecionado .preço span").innerHTML;
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
            }
        }
    }
}
function BotaoClicado(){
    let total = (Number(precoB.replace(",","."))+Number(precoC.replace(",","."))+Number(precoS.replace(",","."))).toFixed(2)
    const texto = ("Olá, gostaria de fazer o pedido:" + "\n" +
        "- Prato: " + prato + "\n" +
        "- Bebida: " + drink + "\n" +
        "- Sobremesa: " + doce + "\n" +
        "Total: R$ " + total);
    const link = encodeURIComponent(texto)
    window.open(`https://wa.me/+55999999999?text=${encodeURIComponent(texto)}`)
        
}
