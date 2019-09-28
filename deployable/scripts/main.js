document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.dot-button')
        .addEventListener('click', function () {
            var reservationForm = document.querySelector('.flyout-reservation-form');
            reservationForm.className += ' active';
        });
    
    document.querySelector('.close-button')
        .addEventListener('click', function () {
            document.querySelector('.flyout-reservation-form').className = 'flyout-reservation-form';
        });

    document.querySelector('.submit-reservation')
        .addEventListener('click', function () {
            const headCount = document.querySelector('#headCountSelector').value;
            const day = document.querySelector('#daySelector').value;
            const time = document.querySelector('#timeSelector').value;
            const email = document.querySelector('#reservationEmail').value;
            /* an json object */
            const reservationPayload = {
                headCountValue: headCount,
                dayValue: day,
                timeValue: time,
                emailValue: email
            };

            fetch('https://reqres.in/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applicatiion/json'
                },
                body: JSON.stringify(reservationPayload)
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    document.querySelector('#reservationForm').className = 'hide';
                    document.querySelector('.reservation-widget .thank-you').className = 'thank-you';
                })
        });
    });
    