let randomNumber = Math.floor(Math.random() * 1000);
while (true) {
    let yournumber = prompt("Введите любое число от 0 до 999:")
    if (yournumber === 'q') {
        alert("Вы вышли из игры");
        break;
    } else if (isNaN(yournumber) || yournumber < 0 && yournumber > 999) {
        alert("Проверте введеные данные");
    } else if (+yournumber < randomNumber) {
        alert("Ваша цифра меньше загадонной, крутите барабан еще раз");
    } else if (+yournumber > randomNumber) {
        alert("Ваша цифра больше загаданной, крутите барабан еще раз");
    } else if (+yournumber === randomNumber) {
        alert("Вы угадали правильную цифру");
        break;
    }
}