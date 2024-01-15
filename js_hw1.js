Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, як відбувається перетворення в кожному прикладі:

'number' + 3 + 3 /* concatenation occurs in the case of string and + 
answer: number33 */

null + 3 /* 0 plus 3 equals 3
Answer: 3 */

5 && "qwerty" /* Opeartor AND returns first false operand or the last true operand if all is true. 
answer: qwerty */

+'40' + +'2' + "hillel"; /* plus before string gives number. number + string gives concatenation.
answer: 42hillel */

'10' - 5 === 6; /* concatenation does not occur with minus. if there is minus, the '10' string is converted to number. 5 is not equal to 6.
answer: false */

true + false /* true equals 1, false equals 0. 1+0=1. 
Is it correct to say 'equals' in this case? Should we say 'is converted to'?
answer: 1 */

'4px' - 3 /* 4px cannot be converted to a number 
answer: NaN */

'4' - 3 /* the '4' string is converted to number, because there is minus. 4-3=1
answer: 1 */

'6' + 3 ** 0; /* first we put 3 to 0 power that equals 1. '6' + 1 : concatenation occurs.
answer: 61 */

12 / '6' /* string '6' is converted to number 6. 12/6
answer: 2 */

'10' + (5 === 6); /* 5 is not equal to 6, so this is false. And before checking my notes from lecture,
I was thinking to convert false to 0. So the answer would be 100 in this case. But in my notes I saw that
you talked about concatenation of a boolean value that is not converted to a number. 
Question: is there an explanation why we convert true to 1 and false to 0 in the case of subtracting , but 
not in the case of adding? :) 

answer: 10false */

null == '' /* there is a rule that falsy value equals to another falsy value only in the case of null == undefined.
So the here the answer is: false. */

3 ** (9 / 3); /* we first divide 9 by 3, that equals 3. 3 to power of 3 equals 27.
answer: 27 */

!!'false' == !!'true' /* we consider 2 strings in the expression as truthy. So the first ! operator converts truthy to false and we have 
false == false. The second ! operator converts false to true and we have true == true.
Answer: true. */

0 || '0' && 1 /* in the first pair 0 || '0' the resut is '0' since 0 is falthy and '0' is truthy. so we have '0' && 1.The operator AND
returns the last operand if all are truthy.
Answer: 1 */


(+null == false) < 1; /* the unary plus before null gives converts null to 0. false is considered as 0. So 0 == 0 and that is true.
Now we have true < 1. We convert true to 1 and have 1 < 1, that is not true.
Answer: false. */

false && true || true   /* The AND operator returns the first false operand. Now we have false || true. The OR operator returns true if
one of the operadns is true.
Answer: true */

false && (false || true); /* first we evaluate the pair in the brackets: false or true gives true.
than we have false && true. So if one of the conditions is false, we have false output
answer: false */

(+null == false) < 1 ** 5; /* first we put 1 to power of 5 and this gives 1. From the previous task (line 57) we know that expression in the brackets 
equals to 1. So again we have 1 < 1.
Answer: false. */