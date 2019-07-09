const weatherForm = document.querySelector('form')
const search = document.querySelector('.form-control')
const weatherDetails = document.querySelector('.weather-details')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                weatherDetails.innerHTML = data.error
                weatherDetails.classList.remove('d-none')
            } else {
                console.log(data.location)
                console.log(data.forecast)

                let output = `
                    <h4 class="mb-3 text-white">${data.location}</h4>
                    <p>${data.forecast}</p>
                `;

                weatherDetails.innerHTML = output
                weatherDetails.classList.remove('d-none')

            }

        })
    })
})