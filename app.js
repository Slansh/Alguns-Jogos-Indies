function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    //se o campo for for ums string vazia, sem nada, sem vida
    if(campoPesquisa == ""){
      section.innerHTML = "<p>Nenhum jogo foi encontrado (BAKA)!</p>"
      return
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada jogo no array 'jogos'
    for (let dado of jogos) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        

        // Concatena HTML formatado para cada jogo, incluindo título, descrição e link
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Visite a sua página na steam!</a>
        </div>
      `;
       
    }
    if(!resultados ) {
      resultados = "<p>Nenhum jogo foi encontrado (BAKA)!</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
}