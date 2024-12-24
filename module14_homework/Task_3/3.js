const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const limit = parseInt(document.querySelector('.limit').value);

    if (limit < 1 || limit > 10 || isNaN(limit)) {
        document.querySelector('.result').innerHTML = 'Введено число вне диапозона'
    } else {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', ' https://jsonplaceholder.typicode.com/photos?_limit=' + limit);
        xhr.onload = function() {
            const response = JSON.parse(xhr.response);
            const resultContainer = document.querySelector('.result');

            response.forEach(photo => {
                const image = `
                <div>
                    <img src="${photo.thumbnailUrl}" class="image"/>
                </div>
                `;

                resultContainer.innerHTML += image;
            });
        };

        xhr.onerror = function() {
            document.querySelector('.result').innerHTML = 'Ошибка';
            console.log("Ошибка. Статус:", xhr.status);
        };

        xhr.send();
    };
});