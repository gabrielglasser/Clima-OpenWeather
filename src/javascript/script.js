document.querySelector('#search').addEventListener('submit', (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if (!cityName) {
        return showAlert('Voce precisa digitar uma cidade...')
    }

    console.log(cityName)

    const apiKey = `076e2c8df2924aa7fe8e9893f9dc603f`
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
});

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}