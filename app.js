/* A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat" */

let letra_e = 'enter';
let letra_i = 'imes';
let letra_a = 'ai';
let letra_o = 'ober';
let letra_u = 'ufat';

function exibirtextoNaTela(tag, texto) {
    document.querySelector(tag).textContent = texto;
}

function txtsimultaneo(){
    let escrita = document.querySelector('textarea').value;
    exibirtextoNaTela('h1', escrita);
    exibirtextoNaTela('p', '');
    if (escrita === '') {
        // Se o texto estiver vazio, desative a função txtsimultaneo()
        document.querySelector('textarea').removeEventListener('input', txtsimultaneo);
    }
}

function Criptografar() {
    let mensagem = document.querySelector('textarea').value;
    let mensagemCriptografada = '';

    for (let i = 0; i < mensagem.length; i++) {
        let letra = mensagem[i];
        switch (letra) {
            case 'a':
                mensagemCriptografada += letra_a;
                break;
            case 'e':
                mensagemCriptografada += letra_e;
                break;
            case 'i':
                mensagemCriptografada += letra_i;
                break;
            case 'o':
                mensagemCriptografada += letra_o;
                break;
            case 'u':
                mensagemCriptografada += letra_u;
                break;
            default:
                mensagemCriptografada += letra;
        }
    }

    exibirtextoNaTela('h1', mensagemCriptografada);
    exibirtextoNaTela('p', '');

    function Descriptografar() {
        let mensagem = document.querySelector('textarea').value;
        let mensagemDescriptografada = '';
    
            }
        }
    
        exibirtextoNaTela('p', mensagemDescriptografada);
    
    

    