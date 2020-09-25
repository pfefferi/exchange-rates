/// <reference types = 'jquery'/>

const $date = document.querySelector('#date');
$date.value = setDate();

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
        rates += `${key}: ${response['rates'][key]}</br> `;
    });
    $result.html(`Base: ${response['base']} </br>${rates}`);
}

function getBase() {
    const $base = $('#base')[0].value;
    console.log($base);
    return $base;
}

function getDate() {
    if (checkDate()) {
        const $date = $('#date')[0].value;
        console.log($date);
        return $date;
    }
}

// Check if date is pre today:
// Check if date is post 1999
// Check if date

function setDate() {
    let day = new Date();
    day = day.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let month = new Date();
    month = month.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let year = new Date();
    let date = `${year.getFullYear()}-${month}-${day}`;

    console.log(date);
    return date;
}

function checkDate() {
    const currentDate = setDate();
    const $chosenDate = $('#date')[0].value;
    if ($chosenDate > currentDate || $chosenDate < '1999-01-01') {
        alert('Please pick a valid date.');
        return false;
    } else {
        return true;
    }
}
