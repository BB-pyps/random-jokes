const button = document.querySelector('.button');
let friendsQuote = document.querySelector('.quote');
let author = document.querySelector('.author');
let picture = document.querySelector('.tv-picture');
let tvSet = document.querySelector('.tv-set');
const langSwitcher = document.querySelector('.lang-switcher');
const engButton = document.querySelector('.eng-button');
const rusButton = document.querySelector('.rus-button');
let idString;

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data[0].text);
    const dataLength = data.length;
    insertContent(getRandomInt(0, dataLength), data); 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const findingInt = Math.floor(Math.random() * max);
    console.log(findingInt);
    return findingInt;  
}

function insertContent(someNumber, data) {
    idString = data[someNumber].author;
    changeLanguage(someNumber, data);
    insertPicture(idString);
}

function insertPicture(idString) {
    switch(idString){
        case 'Фиби Буффе': 
        picture.src = `./assets/phoebe.gif`;
        break;

        case 'Джоуи Триббиани': 
        picture.src = `./assets/joey.gif`;
        break;

        case 'Росс Геллер': 
        picture.src = `./assets/ross.gif`;
        break;

        case 'Моника Геллер': 
        picture.src = `./assets/monica.gif`;
        break;

        case 'Чендлер Бинг': 
        picture.src = `./assets/chandler.gif`;
        break;

        case 'Рейчел Грин': 
        picture.src = `./assets/rachel.gif`;
        break;
    }
    
}

button.addEventListener('click', getQuotes);
window.onload= getQuotes;

function changeClassActiveLang(event) {
    console.log(event);
    if(event.target.classList.contains('lang')){
        const allButtonsLang = document.querySelectorAll('.lang');
        allButtonsLang.forEach((el) => el.classList.remove('active-lang'));
        event.target.classList.add('active-lang');
        getQuotes();
    }
}

langSwitcher.addEventListener('click', changeClassActiveLang);

function changeLanguage(someNumber, data) {
    if(engButton.classList.contains('active-lang')){
        friendsQuote.textContent = `"${data[someNumber].engText}"`;
        author.textContent = `${data[someNumber].engAuthor}`;
    } 
    if(rusButton.classList.contains('active-lang')){
        friendsQuote.textContent = `"${data[someNumber].text}"`;
        author.textContent = `${data[someNumber].author}`;
    }
}

console.log('Оценка - 62.5 балла. 1.Вёрстка +10 \n 2.При загрузке страницы приложения отображается рандомная цитата +10 \n 3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10 \n 4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10 \n 5. Смена цитаты сопровождается любым другим эффектом - меняется gif-изображениие в телевизоре в зависимости от автора цитаты +10 \n 6.Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +7.5 (в этом пункте при нажатии смены языка не получается перевечти текущую фразу, а отображается новая фраза на выбранном языке. Если знаете, как это пофиксить, подскажите, пожалуйста) \n 7.Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения. (не знаю, что ставить за этот пункт, не всё реализовано, что хотелось, но задумка не плохая - поставлю 5 баллов');