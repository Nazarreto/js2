let count = 0

let ask = prompt(`2+2`)
if(ask===`4`){
    count++
}

let ask2 = prompt(`3+2`)
if(ask2===`5`){
    count++
}

let ask3 = prompt(`4+2`)
if(ask3===`6`){
    count++
}

let ask4 = prompt(`5+2`)
if(ask4===`7`){
    count++
}

let ask5 = prompt(`10+2`)
if(ask5===`12`){
    count++
}

let ask6 = prompt(`12+2`)
if(ask6===`14`){
    count++
}

let ask7 = prompt(`14+2`)
if(ask7===`16`){
    count++
}

let ask8 = prompt(`16+2`)
if(ask8===`18`){
    count++
}


let ask9 = prompt(`18+2`)
if(ask9===`20`){
    count++
}

let ask10 = +prompt(`20+2`)
if(ask10===`22`){
    count++
}


else if(count===1){
    alert(`гірше не буває`)
}

else if(count===2){
    alert(`дуже погано`)
}

else if(count===3){
    alert(`погано`)
}
else if(count===4){
    alert(`можна краще`)
}
else if(count===5){
    alert(`треба краще`)
}

else if(count===6){
    alert(`ти міг би краще`)
}

else if(count===7){
    alert(`молодець`)
}
else if(count===8){
    alert(`дуже добре`)
}
else if(count===9){
    alert(`красавчик`)
}
else if (count===10){
    alert(`супер`)
}

document.write('у тебе ', count, ' відповідей правельних з 10 питань')







// let userName = prompt("Хто це?", '');

// if (userName === 'Назар') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'ЛОГОС') {
//     alert( 'Ласкаво просимо!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Вхід скасований' );
//   } else {
//     alert( 'Неправельний пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Вхід скасований' );
// } else {
//   alert( "Я вас не знаю" );
// }








// let season = +prompt('Введіть число')

// if(season <=5 && season >=3){
//     alert('Весна')
// }
// else if(season <=8 && season >=5){
//   alert('Літо')
// }
// else if(season <=11 && season >=9){
//   alert('Осінь')
// }
// else if(season <=2 || season ==12){
//   alert('Зима')
// }
// else {
//   alert( "???" );
// }
