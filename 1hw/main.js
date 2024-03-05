let num = 10;

if (isNaN(num)) {
    console.log("Введите только числа");
} else {
    if (num % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
}