'use strict';

const db = [
    {'titulo':'SENAI', 'link':'https://s3-sa-east-1.amazonaws.com/wordpress-direta/wp-content/uploads/sites/99/2020/05/26121454/Senai.jpg', 'descricao':'Serviço Nacional de Aprendizagem Industrial'}, 
    {'titulo':'FATEC', 'link':'https://jcconcursos.uol.com.br/media/_versions/noticia/fatec_widemd.jpg', 'descricao':'Faculdade de Tecnologia do Estado de São Paulo'}, 
    {'titulo':'SENAC', 'link':'https://cn1.com.br/fotos/noticias/70430/IMAGEM_NOTICIA_1.jpg', 'descricao':'Serviço Nacional de Aprendizagem Comercial'}
];

const container = document.querySelector('#container');

const criarDiv = (titulo, link, descricao) => {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add ('card');
    novaDiv.innerHTML = `
        <div class='titulo'>
            ${titulo}
        </div>
        <div class='imagem'>
            <img src='${link}'>
        </div>
        <div class='descricao'>
            ${descricao}
        </div>
        `;
    return novaDiv;
}

// const tamanhoDB = db.length - 1;
// for ( let index=0; index<=tamanhoDB;index++ ){
//     container.appendChild(criarDiv(db[index].titulo,db[index].descricao) );
// }

const mostrarDiv = (escola) => {
    container.appendChild ( criarDiv(escola.titulo, escola.link, escola.descricao) );
};

db.forEach ( mostrarDiv );