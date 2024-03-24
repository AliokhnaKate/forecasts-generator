/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const container = document.querySelector('.container');
const button = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastText = document.querySelector('.current-forecast p');
const forecasts = document.querySelector('.forecasts');
const forecastItem = document.querySelector('#forecast-item');

function generateRandomValue(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

button.addEventListener('click', function() {
    const generateNumber = generateRandomValue(0, 5);
    const generatePercent = generateRandomValue(0, 101);

    let generateText = '';

    if (generateNumber === 0) {
        generateText = 'Скоро будет прибавка к зарплате';
    } else if (generateNumber === 1) {
        generateText = 'Все будет хорошо';
    } else if (generateNumber === 2) {
        generateText = 'Ты найдешь вещь, которую теряла';
    } else if (generateNumber === 3) {
        generateText = 'Тебя ждет сногсшибательный день!';
    } else {
        generateText = 'Сегодня вечером тебя ждет сюрприз';
    }

    currentForecastTitle.textContent = generateText;
    currentForecastText.textContent = 'Вероятность:' + ' ' + generatePercent + '%';

    function makeForecastsTemplate(text, percent) {
        const forecast = forecastItem.content.cloneNode(true);

        forecast.querySelector('h3').textContent = text;
        forecast.querySelector('p').textContent = 'Вероятность:' + ' ' + percent + '%';

        forecasts.prepend(forecast);
    }
    makeForecastsTemplate(generateText, generatePercent)
});