

let unitOfMeasurement = "км"; // ініціалізується одиниця вимірювання
let amount = 1; // ініціалізується кількість 

// перевірка декількох умов за допомогою switch
switch (unitOfMeasurement) {
    case "км":
        console.log(amount + " км дорівнює " + (amount * 1000) + " м.");
        break;
    case "год":
        console.log(amount + " год дорівнює " + (amount * 60) + " хв.");
        break;
    case "кг":
        console.log(amount + " кг дорівнює " + (amount * 1000) + " гр.");
        break;
    default:
        console.log("Невідома одиниця виміру"); //варіант якщо буде введена якась інша одиниця виміру
}