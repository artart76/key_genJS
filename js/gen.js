var res2 = [1,2,3,4,5,6,7,8,9,0];
var res3 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z'];
var res4 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];
var res5 = ['!','@','#','$','%','^','&','*','~','/','|','<','>'];


document.getElementById('inst-1').oninput = function () {
//Получаем данные ползунка и делаем его активным
    document.getElementById('password-lenght').innerHTML = this.value;
}

document.getElementById('clickgen').onclick = genPass;
//
function genPass() {
    var result = []; // в эту переменную получаю данные из массивов
    if (document.getElementById('inst-2').checked) {
        //Проверяю включены ли цифры
        result = result.concat(res2);
    }
    if (document.getElementById('inst-3').checked) {
         //Проверяю включены ли строчные буквы
        result = result.concat(res3);
    }
    if (document.getElementById('inst-4').checked) {
         //Проверяю включены ли заглавные буквы
        result = result.concat(res4);
    }
    if (document.getElementById('inst-5').checked) {
         //Проверяю включены ли символы
        result = result.concat(res5);
    }
    result.sort(compareRandom); //перемешиваю массив который получился в итоге
    var pass = ''; // будущий результат
    var passLenght = parseInt(document.getElementById('inst-1').value);//длина пароля
    for(var i = 0; i < passLenght; i++) {
        //запускаю цикл по длинне пароля
        // выбираю случайное значение из массива result
        pass += result[randomInteger(0, result.length - 1)];
    }
    //console.log(pass);
    document.getElementById('out').innerHTML = '<p>'+ pass +'</p>'; // вывод результата на страницу
}
function compareRandom(a,b) {
    //данная функция перемешивает массив
    return Math.random() - 0.5;
}
function randomInteger(min, max) {
    //данная функция генерирует рандомный результат на основе полученных данных 
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

