function showFirst() {
    // alert('You clicked First button')
    document.querySelector('#pr h4').innerHTML = 'You clicked First button';
}

function showSecond() {
    // alert('You clicked Second button')
    document.querySelector('#pr h4').innerHTML = 'You clicked Second button';
}

function showThird() {
    alert('You clicked Third button')
}

document.getElementById('second').onclick = showSecond;

document.querySelector('.third').addEventListener('click', showThird)
