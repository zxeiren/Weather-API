const input = document.getElementById('input')

checkWeather('Manila')

document.getElementById('search').addEventListener('click', () => {
    checkWeather(input.value)
    input.value = ''
    document.querySelector('.gridContainer').style.display = 'grid'
})

async function checkWeather(e) {
    try {
        const apiKey = '5bd72fcd09c998285c😞eaa7950e21421f'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${apiKey}&units=metric`);

        if (!response.ok) throw new Error(err)
        const data = await response.json()

        const { humidity, temp } = data.main
        const wind = data.wind.speed
        const cityName = data.name
        const country = data.sys.country
        const getCelsius = Math.ceil(temp)
        const getFahren = Math.ceil((temp) * (9/5) + 32)

        document.querySelector('.city').textContent = cityName
        document.querySelector('.country').textContent = country
        document.querySelector('.celsius').textContent = `${getCelsius}°C`
        document.querySelector('.fahren').textContent = `${getFahren}°F`
        document.querySelector('.humidity').textContent = `${humidity}%`
        document.querySelector('.wind').textContent = `${wind} km/h`

        console.log(data)
    } catch (err) {
        document.querySelector('.city').textContent = `Invalid City`
        document.querySelector('.country').textContent = ''
        document.querySelector('.celsius').textContent = ''
        document.querySelector('.fahren').textContent = ''

        document.querySelector('.gridContainer').style.display = 'none'
    }
}

animate()
function animate() {
    let x = -50
    let timer;

    timer = setInterval(move, 15)

    function move() {
        if (x <= 480) {
            x++
            if (x == 480) {x = -50}
            document.querySelector('.cloud3').style.left = `${x}px`
        }
    }
}
