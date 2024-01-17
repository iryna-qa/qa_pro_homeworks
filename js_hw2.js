/* Для початку я створила базовий prompt, щоб перевірити, чи він працює. 
Він працює добре. І програма працює тільки з додатними числами. Якщо ми вводимо дані іншого типу, ніж число, виводиться повідомлення 'You should enter correct number'.

Але на лекції ти згадував функцію isNaN для перевірки, чи введені дані є числом. Чому моя програма працює навіть без цієї перевірки? */

let age = prompt ('Скільки тобі років ?', '18')
if (age >=0){
    console.log(+age + ' років');
} else {
    console.log('You should enter correct number')
} 

/*Тут я додала isNaN. Працює як в першому варіанті: */

let age = prompt ('Скільки тобі років ?', '18')
if (age >=0 && !isNaN(+age)){
    console.log(+age + ' років');
} else {
    console.log('You should enter correct number')
}


/* Я не придумала як зробити щоб показувало рік / років / роки залежно від віку. Але якісь спроби зробила: */

let age = prompt ('Скільки тобі років ?', '18')
if (age ==0 || age >= 5 && age <= 20 && !isNaN(+age)){
    console.log(+age + ' років') }
    else if (age >= 2 && age <= 4 && !isNaN(+age)) {
        console.log(+age + ' роки')  
    }
    else if (age == 1 || age == 21 && !isNaN(+age)) /*Why does it work with == and = but does not work with === ?) */
    {
        console.log(+age + ' рiк')  
    }
else {
    console.log('You should enter a valid number')
}