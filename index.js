let button = document.getElementById("inputButton")
let inputText = document.getElementById("inputText")


function translit(word){
	let answer = '';
	let converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',

		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};

	for (let i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}

	return answer;
}


button.addEventListener('click', function () {
  //объявляю перменные
  translitBox = document.getElementById("translit")
  normalBox = document.getElementById("normal")
  //забираю техт из input
  let baseText = inputText.value
  console.log(baseText)
  //создаю p
  let newWord = document.createElement("p");
  //собираю в две переменные оригинальный текст

  let originalText = baseText
  let originalTranslit = translit(baseText)
  let transWord = document.createElement("p");

  if (baseText.length > 100) {
    baseText = baseText.slice(0,100) + "..."
    newWord.className = "textInLong"
    transWord.className = "textInLong"
    newWord.setAttribute('data-tooltip', originalText)
    transWord.setAttribute('data-tooltip', originalTranslit)
  } else {
    newWord.className = "textIn"
    transWord.className = "textIn"
  }

  newWord.innerText = baseText
  transWord.innerText = translit(baseText)
  //добавляем слова в словарь
  normalBox.appendChild(newWord)
  translitBox.appendChild(transWord)

  inputText.value = null
});








