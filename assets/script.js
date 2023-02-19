const btcCadastro = document.getElementsByClassName('button-cdt');
const cadastroHidden = document.getElementById('cadastro-hidden');
const iconCarrinho = document.getElementById('carrinho');
const bandaOne = document.getElementById('band-One');
const bandaTwo = document.getElementById('band-two'); 
const bandaThree = document.getElementById('band-three');
const PageOne = document.getElementById('Page-01');
const onehidden = document.getElementById('one-hidden');
const twoHidden = document.getElementById('two-hidden');
const threeHidden = document.getElementById('three-hidden');
const button = document.getElementById('button');
const btnOneOne= document.getElementById('button-one');
const btnOneTwo = document.getElementById('button-two');
const btnOneThree = document.getElementById('button-three')
const btnTwoOne = document.getElementById('button-two-one')
const btnTwoTwo = document.getElementById('button-two-two') 
const btnTwoThree = document.getElementById('button-two-three')
const btnThreeOne = document.getElementById('button-three-one')
const btnThreeTwo = document.getElementById('button-three-two') 
const btnThreeThree = document.getElementById('button-three-three')
const resHidden = document.getElementById('res-hidden'); 
const resHiddenTwo = document.getElementById('res-hidden-two'); 
const resHiddenThree = document.getElementById('res-hidden-three'); 
const resSaldo = document.getElementById('res-saldo');
const resSaldoTwo = document.getElementById('res-saldo-two');
const resSaldoThree = document.getElementById('res-saldo-three');
const btcCadastroFinal = document.getElementById('cadastro');
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const finalDiv = document.getElementById('final-div');
const final = document.getElementById('final');
const finalMenu = document.getElementById('final-menu'); // fazer um botão para voltar para o menu em todas as abas com o class
const menuEstado = document.getElementById('menu-estado');
const menuUl = document.getElementById('menu-ul');
let imagetextOne;
let imagetextTwo;
let imagetextThree;


function bandaONE(){
   
    bandaOne.addEventListener("mouseover",function(){
        imagetextOne = document.createElement("p");
        imagetextOne.innerHTML = "<strong>19 OUTUBRO <BR> 2023</strong>";
        imagetextOne.classList.add('image-text-01');
        bandaOne.parentNode.insertBefore(imagetextOne, bandaOne.nextSibling); // parentNode = acessar o pai do bandaOne que e o grid

        let imageContainer = bandaOne.parentNode;
        imageContainer.style.position = 'relative';

        let oneImageText = document.getElementsByClassName("image-text-01")[0];
        oneImageText.style.position = "absolute";
        oneImageText.style.top = "45%";
        oneImageText.style.left = "50%";
        oneImageText.style.transform = "translate(-50%, -50%)";
        oneImageText.style.zIndex = "1";
        oneImageText.style.fontSize = "33px"
        oneImageText.style.fontFamily = "Open Sans"
        bandaOne.style.filter = "blur(0.8px)" // desfocar a imagem 

        
    })

    bandaOne.addEventListener("mouseout",function(){
        imagetextOne.style.display = "none";
        bandaOne.style.filter = "blur(0px)"

    });

    bandaOne.addEventListener("click", function(){
        this.style.boxShadow = "5px 5px 50px red";
        PageOne.style.display = "none";
        onehidden.style.display = 'inline';   
    })

    function arquicancada (){
        let resultOne = 0;
        let resultTwo = 0;
        let arquibancadaOne = ' Não selecionado';
        let arquibancadaTwo  = ' Não selecionado';
        const selectUm = document.getElementById("band-one-select-one-integral");
        const selectDois = document.getElementById("band-one-select-one-meia");

        selectUm.addEventListener('change', function(){
            let valueOne = selectUm.value;
            resultOne = parseInt(valueOne) * 50;
            arquibancadaOne = parseInt(valueOne); // parseInt =  converte uma string em um número inteiro.     
        })

        selectDois.addEventListener('change', function(){
            let valueTwo = selectDois.value;
            resultTwo = parseInt(valueTwo) * 25;
            arquibancadaTwo = parseInt(valueTwo);
        })

        btnOneOne.addEventListener('click', function(){
            if (resultOne === 0 && resultTwo === 0 ){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOne + resultTwo;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                onehidden.style.display = "none";
                resHidden.style.display = "inline";
                resSaldo.innerHTML = `Setor: Arquibancada <br> Inteira: ${arquibancadaOne} <br> Meia: ${arquibancadaTwo} <br>Valor da compra: R$${result},00`  
            }  
            
        })

    }
    arquicancada ();


    function pista(){
        let resultOnePista = 0;
        let resultTwoPista = 0;
        let pistaOne = ' Não selecionado';
        let pistaTwo = ' Não selecionado';
        const selectPistaOne = document.getElementById("band-one-select-two-integral");
        const selectPistaTwo = document.getElementById("band-one-select-two-meia");

        selectPistaOne.addEventListener('change', function(){
            let valuePistaOne = selectPistaOne.value;
            resultOnePista = parseInt(valuePistaOne) * 100;
            pistaOne = parseInt(valuePistaOne);
        })

        selectPistaTwo.addEventListener('change', function(){
            let valuePistaTwo = selectPistaTwo.value;
            resultTwoPista = parseInt(valuePistaTwo) * 50;
            pistaTwo = parseInt(valuePistaTwo);
        })

        btnOneTwo.addEventListener('click', function(){
            if(resultOnePista === 0 && resultTwoPista === 0){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOnePista + resultTwoPista;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                onehidden.style.display = "none";
                resHidden.style.display = "inline";
                resSaldo.innerHTML = `Setor: Pista <br> Inteira: ${pistaOne} <br> Meia: ${pistaTwo} <br>Valor da compra: R$${result},00`  
            }
        })


    }
    pista()

    function pistaVip(){
        let resultOnePistaVip = 0;
        let resultTwoPistaVip = 0;
        let pistaVipOne = ' Não selecionado';
        let pistaVipTwo = ' Não selecionado';
        const selectPistaVipOne = document.getElementById("band-one-select-three-integral");
        const selectPistaVipTwo = document.getElementById("band-one-select-three-meia");

        selectPistaVipOne.addEventListener('change', function(){
            let valuePistaVipOne = selectPistaVipOne.value;
            resultOnePistaVip = parseInt(valuePistaVipOne) * 150;
            pistaVipOne = parseInt(valuePistaVipOne);
        })

        selectPistaVipTwo.addEventListener('change', function(){
            let valuePistaVipTwo = selectPistaVipTwo.value;
            resultTwoPistaVip = parseInt(valuePistaVipTwo) * 75;
            pistaVipTwo = parseInt(valuePistaVipTwo);
        })

        btnOneThree.addEventListener('click', function(){
            if(resultOnePistaVip === 0 && resultTwoPistaVip === 0){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOnePistaVip + resultTwoPistaVip;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                onehidden.style.display = "none";
                resHidden.style.display = "inline";
                resSaldo.innerHTML = `Setor: Pista Vip<br> Inteira: ${pistaVipOne} <br> Meia: ${pistaVipTwo} <br>Valor da compra: R$${result},00`  
            }
        })

    }
    pistaVip()

}
bandaONE();


function bandaTWO(){
    bandaTwo.addEventListener("mouseover", function(){
        imagetextTwo = document.createElement("p");
        imagetextTwo.innerHTML = "<strong>02 NOVEMBRO <BR>2023<strong>";
        imagetextTwo.classList.add('image-text-02');
        bandaTwo.parentNode.insertBefore(imagetextTwo, bandaTwo.nextSibling);
        
        let imageContainer = bandaTwo.parentNode;
        imageContainer.style.position = 'relative';
    
        let twoImageText = document.getElementsByClassName("image-text-02")[0];
        twoImageText.style.position = 'absolute';
        twoImageText.style.top = "45%";
        twoImageText.style.left = "50%";
        twoImageText.style.transform = "translate(-50%, -50%)";
        twoImageText.style.zIndez = "1";
        twoImageText.style.fontSize = "32px";
        twoImageText.style.fontFamily = "Open Sans"
        bandaTwo.style.filter = "blur(0.8px)"
    })
    
    bandaTwo.addEventListener("mouseout", function(){
        imagetextTwo.style.display = "none";
        bandaTwo.style.filter = "blur(0px)"
    })
    bandaTwo.addEventListener("click", function(){
        this.style.boxShadow = "5px 5px 50px red";
        PageOne.style.display = "none";
        twoHidden.style.display = 'inline';  
    })

    function arquicancada (){
        let resultOne = 0;
        let resultTwo = 0;
        let arquibancadaOne = ' Não selecionado';
        let arquibancadaTwo  = ' Não selecionado';
        const selectUm = document.getElementById("band-two-select-one-integral");
        const selectDois = document.getElementById("band-two-select-one-meia");

        selectUm.addEventListener('change', function(){
            let valueOne = selectUm.value;
            resultOne = parseInt(valueOne) * 70;
            arquibancadaOne = parseInt(valueOne); // parseInt =  converte uma string em um número inteiro.     
        })

        selectDois.addEventListener('change', function(){
            let valueTwo = selectDois.value;
            resultTwo = parseInt(valueTwo) * 35;
            arquibancadaTwo = parseInt(valueTwo);
        })

        btnTwoOne.addEventListener('click', function(){
            if (resultOne === 0 && resultTwo === 0 ){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOne + resultTwo;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                twoHidden.style.display = "none";
                resHiddenTwo.style.display = "inline";
                resSaldoTwo.innerHTML = `Setor: Arquibancada <br> Inteira: ${arquibancadaOne} <br> Meia: ${arquibancadaTwo} <br>Valor da compra: R$${result},00`  
            }  
            
        })

    }
    arquicancada ();

    function pista(){
        let resultOnePista = 0;
        let resultTwoPista = 0;
        let pistaOne = ' Não selecionado';
        let pistaTwo = ' Não selecionado';
        const selectPistaOne = document.getElementById("band-two-select-two-integral"); 
        const selectPistaTwo = document.getElementById("band-two-select-two-meia");

        selectPistaOne.addEventListener('change', function(){
            let valuePistaOne = selectPistaOne.value;
            resultOnePista = parseInt(valuePistaOne) * 120;
            pistaOne = parseInt(valuePistaOne);
        })

        selectPistaTwo.addEventListener('change', function(){
            let valuePistaTwo = selectPistaTwo.value;
            resultTwoPista = parseInt(valuePistaTwo) * 60;
            pistaTwo = parseInt(valuePistaTwo);
        })

        btnTwoTwo.addEventListener('click', function(){
            if (resultOnePista === 0 && resultTwoPista === 0 ){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOnePista + resultTwoPista;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                twoHidden.style.display = "none";
                resHiddenTwo.style.display = "inline";
                resSaldoTwo.innerHTML = `Setor: Pista <br> Inteira: ${pistaOne} <br> Meia: ${pistaTwo} <br>Valor da compra: R$${result},00`  
            }  
            
        })
    }
    pista()

    function pistaVip(){
        let resultOnePistaVip = 0;
        let resultTwoPistaVip = 0;
        let pistaVipOne = ' Não selecionado';
        let pistaVipTwo = ' Não selecionado';
        const selectPistaVipOne = document.getElementById("band-two-select-three-integral");
        const selectPistaVipTwo = document.getElementById("band-two-select-three-meia");

        selectPistaVipOne.addEventListener('change', function(){
            let valuePistaVipOne = selectPistaVipOne.value;
            resultOnePistaVip = parseInt(valuePistaVipOne) * 170;
            pistaVipOne = parseInt(valuePistaVipOne);
        })

        selectPistaVipTwo.addEventListener('change', function(){
            let valuePistaVipTwo = selectPistaVipTwo.value;
            resultTwoPistaVip = parseInt(valuePistaVipTwo) * 85;
            pistaVipTwo = parseInt(valuePistaVipTwo);
        })

        btnTwoThree.addEventListener('click', function(){
            if(resultOnePistaVip === 0 && resultTwoPistaVip === 0){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOnePistaVip + resultTwoPistaVip;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                twoHidden.style.display = "none";
                resHiddenTwo.style.display = "inline";
                resSaldoTwo.innerHTML = `Setor: Pista Vip<br> Inteira: ${pistaVipOne} <br> Meia: ${pistaVipTwo} <br>Valor da compra: R$${result},00`  

            }
        })

    }
    pistaVip()

}
bandaTWO()

function bandaTHREE(){
    bandaThree.addEventListener("mouseover", function(){
        imagetextThree = document.createElement("p");
        imagetextThree.innerHTML = "<strong>12 DEZEMBRO<br>2023</strong>";
        imagetextThree.classList.add('image-text-03');
        bandaThree.parentNode.insertBefore(imagetextThree, bandaThree.nextSibling);

        let imageContainer = bandaThree.parentNode;
        imageContainer.style.position = 'relative';

        let threeImageText = document.getElementsByClassName("image-text-03")[0];
        threeImageText.style.position = 'absolute';
        threeImageText.style.top = '45%';
        threeImageText.style.left = '50%';
        threeImageText.style.transform = 'translate(-50%, -50%)';
        threeImageText.style.zIndex = '1';
        threeImageText.style.fontSize = '33px';
        threeImageText.style.fontFamily = 'Open Sans'
        bandaThree.style.filter = 'blur(0.8px)';
    })
    bandaThree.addEventListener('mouseout', function(){
        imagetextThree.style.display = 'none';
        bandaThree.style.filter = 'blur(0px)';
    })
    bandaThree.addEventListener('click', function(){
        this.style.boxShadow = "5px 5px 50px red";
        PageOne.style.display = "none";
        threeHidden.style.display = 'inline';  

    })

    function arquicancada (){
        let resultOne = 0;
        let resultTwo = 0;
        let arquibancadaOne = ' Não selecionado';
        let arquibancadaTwo  = ' Não selecionado';
        const selectUm = document.getElementById("band-three-select-one-integral");
        const selectDois = document.getElementById("band-three-select-one-meia");

        selectUm.addEventListener('change', function(){
            let valueOne = selectUm.value;
            resultOne = parseInt(valueOne) * 80;
            arquibancadaOne = parseInt(valueOne); // parseInt =  converte uma string em um número inteiro.     
        })

        selectDois.addEventListener('change', function(){
            let valueTwo = selectDois.value;
            resultTwo = parseInt(valueTwo) * 40;
            arquibancadaTwo = parseInt(valueTwo);
        })

        btnThreeOne.addEventListener('click', function(){
            if (resultOne === 0 && resultTwo === 0 ){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOne + resultTwo;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                threeHidden.style.display = "none";
                resHiddenThree.style.display = "inline";
                resSaldoThree.innerHTML = `Setor: Arquibancada <br> Inteira: ${arquibancadaOne} <br> Meia: ${arquibancadaTwo} <br>Valor da compra: R$${result},00`  
            }  
            
        })

    }
    arquicancada ();

    function pista(){
        let resultOnePista = 0;
        let resultTwoPista = 0;
        let pistaOne = ' Não selecionado';
        let pistaTwo = ' Não selecionado';
        const selectPistaOne = document.getElementById("band-three-select-two-integral"); 
        const selectPistaTwo = document.getElementById("band-three-select-two-meia");

        selectPistaOne.addEventListener('change', function(){
            let valuePistaOne = selectPistaOne.value;
            resultOnePista = parseInt(valuePistaOne) * 130;
            pistaOne = parseInt(valuePistaOne);
        })

        selectPistaTwo.addEventListener('change', function(){
            let valuePistaTwo = selectPistaTwo.value;
            resultTwoPista = parseInt(valuePistaTwo) * 65;
            pistaTwo = parseInt(valuePistaTwo);
        })

        btnThreeTwo.addEventListener('click', function(){
            if (resultOnePista === 0 && resultTwoPista === 0 ){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOnePista + resultTwoPista;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                threeHidden.style.display = "none";
                resHiddenThree.style.display = "inline";
                resSaldoThree.innerHTML = `Setor: Pista <br> Inteira: ${pistaOne} <br> Meia: ${pistaTwo} <br>Valor da compra: R$${result},00`  
            }  
            
        })
    }
    pista()

    function pistaVip(){
        let resultOnePistaVip = 0;
        let resultTwoPistaVip = 0;
        let pistaVipOne = ' Não selecionado';
        let pistaVipTwo = ' Não selecionado';
        const selectPistaVipOne = document.getElementById("band-three-select-three-integral");
        const selectPistaVipTwo = document.getElementById("band-three-select-three-meia");

        selectPistaVipOne.addEventListener('change', function(){
            let valuePistaVipOne = selectPistaVipOne.value;
            resultOnePistaVip = parseInt(valuePistaVipOne) * 180;
            pistaVipOne = parseInt(valuePistaVipOne);
        })

        selectPistaVipTwo.addEventListener('change', function(){
            let valuePistaVipTwo = selectPistaVipTwo.value;
            resultTwoPistaVip = parseInt(valuePistaVipTwo) * 90;
            pistaVipTwo = parseInt(valuePistaVipTwo);
        })

        btnThreeThree.addEventListener('click', function(){
            if(resultOnePistaVip === 0 && resultTwoPistaVip === 0){
                alert('Quantidade de ingressos inválido!')
            } else {
                let result = resultOnePistaVip + resultTwoPistaVip;
                iconCarrinho.src = "./assets/img/carrinho-compra-cheio.png";
                threeHidden.style.display = "none";
                resHiddenThree.style.display = "inline";
                resSaldoThree.innerHTML = `Setor: Pista Vip<br> Inteira: ${pistaVipOne} <br> Meia: ${pistaVipTwo} <br>Valor da compra: R$${result},00`  

            }
        })

    }
    pistaVip()
}
bandaTHREE()


// criar uma nova função que apenas uma pagina traz o resultado de todas as bandas.

function cadastro(){

    for (let i = 0; i < btcCadastro.length; i++){
        btcCadastro[i].addEventListener("click", function(){

            PageOne.style.display = 'none';
            resHidden.style.display = 'none';
            resHiddenTwo.style.display = 'none';
            resHiddenThree.style.display = 'none';
            cadastroHidden.style.display = 'inline';
        });
    }
   
}
cadastro()

function finalSite(){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        PageOne.style.display = 'none';
        onehidden.style.display = 'none';
        resHidden.style.display = 'none';
        cadastroHidden.style.display = 'none';
        finalDiv.style.display = 'flex';
        final.innerHTML = `Obrigado ${nome.value} pelo cadastro! Compra efetuada com sucesso!!!`
    }) 
}
finalSite();

function voltar(){
    finalMenu.addEventListener('click', function(){
        window.location.reload(); // resetar a pagina
    })
}
voltar()


    
