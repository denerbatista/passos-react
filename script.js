// Seleciona o elemento onde o Markdown será exibido
const markdownContainer = document.getElementById('markdown-content');

// Função para carregar e renderizar o arquivo Markdown
fetch('README.md')
    .then(response => response.text())
    .then(text => {
        // Converte o conteúdo Markdown para HTML usando marked.js
        markdownContainer.innerHTML = marked(text);
    })
    .catch(error => console.error('Erro ao carregar o arquivo Markdown:', error));