// 1.
/*
let res;
for(let i = 1; i <= 10; i++) {
    res = i ** 2
    console.log(res);
}
*/

// 2.
/*
let userPassword = prompt('Введіть Ваш пароль');
const correctPassword = 'qwerty123';

if(userPassword === correctPassword) {
    console.log('Ви успішно увійшли в систему');
} else {
    while(userPassword !== correctPassword) {
        userPassword = prompt('Ви ввели невірний пароль! Спробуйте ще раз.');
        if(userPassword === correctPassword) {
            console.log('Ви успішно увійшли в систему');
        }
    }
}
*/

// 3.
/*
let res = 0;
for(let i = 1; i <= 100; i++) {
    res = res + i;
}
console.log(res);
*/

// 4.
/*
for(let i = 10; i <= 50; i++) {
    if(i % 5 === 0) {
        console.log(i);
    }
}
*/

// 5.
/*
let value1 = Number(prompt('Введіть бажаємий розмір трикутника:'));
let res = '*';

for(let i = 1; i <= value1; i++) {
    console.log(res);
    res = res + '*';
}
*/

// 6.
/*
let value = Number(prompt('Введіть бажаємий розмір діагоналі: '));
let res = '\u{3164}' + '*';

for(let i = 1; i <= value; i++) {
    console.log(res);
    res = '\u{3164}\u{3164}' + res;
}
*/

// 7.
/*
let value = Number(prompt('Введіть бажаний розмір діагоналі: '));

for (let i = 0; i < value; i++) {
    let line = '';

    for (let j = 0; j < value - i - 1; j++) {
        line += '\u{3164}\u{3164}';
    }

    line += '*';
    
    console.log(line);
}
*/