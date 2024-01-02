const anoInput = document.getElementById('ano');
const endpoint = "https://brasilapi.com.br/api/feriados/v1/";
const botao = document.querySelector("#buscar");
const imputNum = document.querySelector('#ano');
const ul = document.querySelector('#lista-feriados'); 


/* imputnum.addEventListener("change", (event) => console.log(event.target.value)); */
function popularFeriados(feriadosDados){
    ul.innerHTML = '';
    feriadosDados.forEach(feriado =>{
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');

        h4.innerText = feriado.date.split("-").reverse().join('/') /* + feriado.date.getDay */;
      /*  let  feriado.date.getDay = ["domingo", "segunda","terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];
         */
        p.innerText = feriado.name;

        li.appendChild(h4);
        li.appendChild(p);

        ul.appendChild(li);
        /* console.log(feriado.date.getDay); */

    })

}



botao.addEventListener('click', function () {
    event.preventDefault();
    console.log(imputNum.value)


    if (imputNum.value < 1900 || imputNum.value > 2199) {
        const mensagem = "por favor informe um ano em 4 dígitos entre 1900 e 2199";
        window.alert(mensagem);

        return;

    } else {

        fetch(endpoint + `${imputNum.value}`)
            .then(function (response) { return response.json(); })

            .then(function(dados){
                console.log(dados);
                popularFeriados(dados);
            })

            .catch(function (erro) {
                console.log(erro);
            })
    }

})




