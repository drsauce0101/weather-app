document.addEventListener("DOMContentLoaded", () => {

"use strict";

// Variables and constants here

//Weather API key
const apiKey = "dca111c725ec53945b4044777e0e456d";
const unsplashApiKey = "M3SAluVbrLEclMSHZiSL9bKbxLRE21M51tN0esdxzB8"

//HTML Ref

const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const weatherData = document.getElementById("weather-data");

const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const weatherIconElement = document.getElementById("weather-icon");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value;

    try {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;
        const weatherResponse = await fetch(weatherUrl);

        if (weatherResponse.status === 200) {
            const weatherAPIdata = await weatherResponse.json();

            // Atualiza a tela com os dados do clima
            cityElement.textContent = weatherAPIdata.name;
            temperatureElement.querySelector("#temp-value").textContent = parseInt(weatherAPIdata.main.temp);
            descriptionElement.textContent = weatherAPIdata.weather[0].description;
            weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherAPIdata.weather[0].icon}.png`;
            humidityElement.querySelector("span").textContent = weatherAPIdata.main.humidity;
            windElement.querySelector("span").textContent = parseInt(weatherAPIdata.wind.speed);

            weatherData.classList.remove("hide");

            // --- Unsplash API search ---
            const unsplashUrl = `https://api.unsplash.com/search/photos?query=${city}&per_page=1&client_id=${unsplashApiKey}`;
            const unsplashResponse = await fetch(unsplashUrl);
            const unsplashData = await unsplashResponse.json();

            if (unsplashData.results.length > 0) {
                const imageUrl = unsplashData.results[0].urls.regular;

                // Transição de imagem
                document.body.classList.add('changing-background');
                setTimeout(() => {
                    document.body.style.backgroundImage = `url('${imageUrl}')`;
                    document.body.classList.remove('changing-background');
                }, 10);
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                document.body.style.backgroundAttachment = "fixed";
            } else {
                console.warn("Nenhuma imagem encontrada para a cidade. Usando fundo padrão.");
                document.body.style.backgroundImage = "none";
            }
        } else if (weatherResponse.status === 404) {
            weatherData.classList.add("hide");
            alert("Cidade não encontrada. Por favor, verifique o nome e tente novamente.");
        } else {
            console.error("Erro na API de clima:", weatherResponse.status);
            weatherData.classList.add("hide");
            alert("Ocorreu um erro na API do clima. Tente novamente mais tarde.");
        }
    } catch (error) {
        console.error("Request error:", error);
        weatherData.classList.add("hide");
        alert("Ocorreu um erro ao buscar o clima. Verifique sua conexão e tente novamente.");
    }
})
});