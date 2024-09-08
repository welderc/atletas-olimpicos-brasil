function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa)

    // se campoPesquisa for uma String sem nada
    if (campoPesquisa == "") {
        return section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        console.log(campoPesquisa)
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
             // Constrói o HTML para um item de resultado, formatando os dados do objeto
                    resultados += `
                    <div class="item-resultado">
                        <h2 class="descricao-meta"><a href="#" target="_blank">${dado.titulo}</a></h2>
                        <p>${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                `;
        }
        
        if(!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
       
    }

    // Adiciona os resultados construídos à seção HTML
    section.innerHTML += resultados;
}
// Loga a lista de dados no console para fins de depuração (pode ser removido em produção)
// console.log(dados);