//XML
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

// Получаем все элементы <student>
const students = xmlDoc.getElementsByTagName('student');

// Преобразуем их в объекты
const studentArray = Array.from(students).map(studentNode => {
    const nameNode = studentNode.getElementsByTagName('name')[0];
    const firstName = studentNode.getElementsByTagName('first')[0].textContent;
    const secondName = studentNode.getElementsByTagName('second')[0].textContent;
    const age = studentNode.getElementsByTagName('age')[0].textContent;
    const prof = studentNode.getElementsByTagName('prof')[0].textContent;
    
    // Извлекаем атрибут lang
    const lang = nameNode.getAttribute('lang');

    return {
        name: `${firstName} ${secondName}`,
        age: parseInt(age, 10),
        prof,
        lang
    };
});

console.log(studentArray);