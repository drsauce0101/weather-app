## Weather App

Um aplicativo de clima simples e elegante, construído para demonstrar o consumo de APIs externas e a manipulação do DOM em tempo real. O aplicativo permite que o usuário pesquise por uma cidade e veja as informações de clima em um layout dinâmico.
Funcionalidades

    Pesquisa de Clima por Cidade: Obtenha a temperatura, a umidade e a velocidade do vento de qualquer cidade do mundo.

    Descrição do Tempo: Veja a condição do tempo atual (ex: "céu limpo", "nuvens dispersas").

    Ícone do Clima: Um ícone visual que muda de acordo com a condição do tempo.

    Background Dinâmico: O fundo da página muda para uma imagem da cidade pesquisada, com uma transição suave.

    Layout Responsivo: Funciona bem tanto em desktops quanto em dispositivos móveis.

    Tratamento de Erros: Mensagens de erro amigáveis para quando a cidade não é encontrada ou há problemas na conexão.

## Tecnologias Utilizadas

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- OpenWeatherMap API: Para obter os dados de clima.

- Unsplash API: Para obter as imagens de fundo das cidades.

- Font Awesome: Para os ícones de umidade e vento.

## Como Rodar o Projeto

Para rodar este projeto localmente, siga os seguintes passos:
Pré-requisitos

Você precisará de uma chave de API para o OpenWeatherMap e outra para o Unsplash.

    OpenWeatherMap:

        Crie uma conta gratuita em openweathermap.org.

        Obtenha sua chave de API na seção "My API keys".

    Unsplash:

        Crie uma conta de desenvolvedor em unsplash.com/developers.

        Crie uma nova aplicação e obtenha sua "Access Key".

Instalação

    Faça um clone deste repositório para o seu computador.

    git clone https://docs.github.com/articles/referencing-and-citing-content


    Abra o arquivo script.js e substitua os placeholders das chaves de API pelas suas chaves:

    const apiKey = "SUA_CHAVE_AQUI_OPENWEATHERMAP"; 
    const unsplashApiKey = "SUA_CHAVE_AQUI_UNSPLASH";


    Abra o arquivo index.html no seu navegador.

O aplicativo estará pronto para ser usado!

Sinta-se à vontade para sugerir melhorias, reportar bugs ou contribuir para o projeto.
