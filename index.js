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
    date = getDate();
    base = getBase();
    getRates(date, base);
});

function getRates(date, base) {
    $.ajax({
        method: 'GET',
        url: `https://api.exchangeratesapi.io/${date}?base=${base}`,
        success: (response) => {
            showReults(response);
        },
    });
}

function showReults(response) {
    const $result = $('#result');
    rates = '';
    const keys = Object.keys(response['rates']);
    keys.forEach((key) => {
        rates += `${key}: ${response['rates'][key]};</br> `;
    });
    $result.html(`Base:${response['base']} </br>${rates}`);
}

function getBase() {
    const $base = $('#base')[0].value;
    console.log($base);
    return $base;
}

function getDate() {
    const $date = $('#date')[0].value;
    console.log($date);
    return $date;
}
