const makeRequest = (value1, value2) => {
    return fetch(`https://dummyimage.com/${value1}x${value2}/`)
    .then((response) => { 
        return response;
    })
    .catch(() => { 
        document.querySelector('.result').innerHTML = 'Error';
        console.log('error');
    });
}

let btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
    const value1 = parseInt(document.querySelector('.width').value);
    const value2 = parseInt(document.querySelector('.length').value);
    if (!(100 <= value1 <= 300) || !(100 <= value2 <= 300)) {
        document.querySelector('.result').innerHTML = 
            'Одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await makeRequest(value1, value2);

        document.querySelector('.result').innerHTML += `<img src="${requestResult.url}">`;  
    }
});
