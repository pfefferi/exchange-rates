/// <reference types = 'jquery'/>

// function setDate() {
//     let day = new Date();
//     let month = new Date();
//     let year = new Date();
//     let date = `${year.getFullYear()}-${month.getMonth()}-${day.getDate()}`;
//     const $date = document.querySelector('#date');
//     console.log(date);
//     $date.value = date;
// }

const $button = $('button');

$($button).on('click', () => {
    getRatesAJAX();
});

// function getRates() {
//     fetch('https://api.exchangeratesapi.io/latest')
//         .then((response) => response.json())
//         .then((response) => {
//             $result = $('#result');
//             $result.text(JSON.stringify(response));
//             //showResults(response)
//         })
//         .catch((error) => console.log('error', error));
// }

function getRatesAJAX() {
    $.ajax({
        method: 'GET',
        url: 'https://api.exchangeratesapi.io/latest',
        success: (response) => {
            $result = $('#result');
            $result.text(JSON.stringify(response));
        },
    });
}

function showReults(response) {
    $result = $('#result');
    $result.html(`<li>${JSON.stringify(response)}</li>`);
}

const response = {
    rates: {
        CAD: 1.56,
        HKD: 9.025,
    },
    base: 'EUR',
    date: '2020-09-24',
};

/*



*/
