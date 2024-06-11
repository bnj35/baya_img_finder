document.addEventListener('DOMContentLoaded', ()=>{
    let loader = document.getElementById('loader');

loader.style.opacity = '0';
loader.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function() {

let btnA = document.getElementById('btnA');
let btnB = document.getElementById('btnB');
let btnC = document.getElementById('btnC');
let btnD = document.getElementById('btnD');

let btnW = document.getElementById('btnW');
let btnX = document.getElementById('btnX');
let btnY = document.getElementById('btnY');
let btnZ = document.getElementById('btnZ');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');


let file = document.getElementById('file');
let print = document.getElementById('img-print');
let btnDisplay = document.getElementById('btnDisplay');

var text = '';

function printName() {
    file.innerHTML = text + '.jpeg';
}

printName();

btnA.addEventListener('click', function() {
    if (text.length < 4) {
        btnA.src = 'aiku/blanc/formes_blancs-03.png'
        text += 'A';
        printName();
    }
    else {
        reset();
        btnA.src = 'aiku/blanc/formes_blancs-03.png'
        text = '';
        text += 'A';
        printName();
    }
    
});

btnB.addEventListener('click', function() {
    if (text.length < 4) {
        btnB.src = 'aiku/blanc/formes_blancs-04.png'
        text += 'B';
        printName();
    }
    else {
        reset();
        btnB.src = 'aiku/blanc/formes_blancs-04.png'
        text = '';
        text += 'B';
        printName();
    }
});

btnC.addEventListener('click', function() {
    if (text.length < 4) {
        btnC.src = 'aiku/blanc/formes_blancs-05.png'
        text += 'C';
        printName();
    }
    else {
        reset();
        btnC.src = 'aiku/blanc/formes_blancs-05.png'
        text = '';
        text += 'C';
        printName();
    }
});

btnD.addEventListener('click', function() {
    if (text.length < 4) {
        btnD.src = 'aiku/blanc/formes_blancs-06.png'
        text += 'D';
        printName();
    }
    else {
        reset();
        btnD.src = 'aiku/blanc/formes_blancs-06.png'
        text = '';
        text += 'D';
        printName();
    }});


btnW.addEventListener('click', function() {
    if (text.length < 4) {
        btnW.src = 'aiku/blanc/formes_blancs-08.png'
        text += 'W';
        printName();
    }
    else {
        reset();
        btnW.src = 'aiku/blanc/formes_blancs-08.png'
        text = '';
        text += 'W';
        printName();
    }}
);

btnX.addEventListener('click', function() {
    if (text.length < 4) {
        btnX.src = 'aiku/blanc/formes_blancs-09.png'
        text += 'X';
        printName();
    }
    else {
        reset();
        btnX.src = 'aiku/blanc/formes_blancs-09.png'
        text = '';
        text += 'X';
        printName();
    }}
);

btnY.addEventListener('click', function() {
    if (text.length < 4) {
        btnY.src = 'aiku/blanc/formes_blancs-10.png'
        text += 'Y';
        printName();
    }
    else {
        reset();
        btnY.src = 'aiku/blanc/formes_blancs-10.png'
        text = '';
        text += 'Y';
        printName();
    }}
);

btnZ.addEventListener('click', function() {
    if (text.length < 4) {
        btnZ.src = 'aiku/blanc/formes_blancs-07.png'
        text += 'Z';
        printName();
    }
    else {
        reset();
        btnZ.src = 'aiku/blanc/formes_blancs-07.png'
        text = '';
        text += 'Z';
        printName();
    }}
);

btn1.addEventListener('click', function() {
    if (text.length < 4) {
        btn1.src = 'aiku/blanc/formes_blancs-13.png'
        text += '1';
        printName();
    }
    else {
        reset();
        btn1.src = 'aiku/blanc/formes_blancs-13.png'
        text = '';
        text += '1';
        printName();
    }}
);

btn2.addEventListener('click', function() {
    if (text.length < 4) {
        btn2.src = 'aiku/blanc/formes_blancs-14.png'
        text += '2';
        printName();
    }
    else {
        reset();
        btn2.src = 'aiku/blanc/formes_blancs-14.png'
        text = '';
        text += '2';
        printName();
    }}
);

btn3.addEventListener('click', function() {
    if (text.length < 4) {
        btn3.src = 'aiku/blanc/formes_blancs-11.png'
        text += '3';
        printName();
    }
    else {
        reset();
        btn3.src = 'aiku/blanc/formes_blancs-11.png'
        text = '';
        text += '3';
        printName();
    }}
);

btn4.addEventListener('click', function() {
    if (text.length < 4) {
        btn4.src = 'aiku/blanc/formes_blancs-12.png'
        text += '4';
        printName();
    }
    else {
        reset();
        btn4.src = 'aiku/blanc/formes_blancs-12.png'
        text = '';
        text += '4';
        printName();
    }}
);

btn6.addEventListener('click', function() {
    if (text.length < 4) {
        btn6.src = 'aiku/blanc/formes_blancs-18.png'
        text += '6';
        printName();
    }
    else {
        reset();
        btn6.src = 'aiku/blanc/formes_blancs-18.png'
        text = '';
        text += '6';
        printName();
    }}
);

btn7.addEventListener('click', function() {
    if (text.length < 4) {
        btn7.src = 'aiku/blanc/formes_blancs-15.png'
        text += '7';
        printName();
    }
    else {
        reset();
        btn7.src = 'aiku/blanc/formes_blancs-15.png'
        text = '';
        text += '7';
        printName();
    }}
);

btn8.addEventListener('click', function() {
    if (text.length < 4) {
        btn8.src = 'aiku/blanc/formes_blancs-16.png'
        text += '8';
        printName();
    }
    else {
        reset();
        btn8.src = 'aiku/blanc/formes_blancs-16.png'
        text = '';
        text += '8';
        printName();
    }}
);

btn9.addEventListener('click', function() {
    if (text.length < 4) {
        btn9.src = 'aiku/blanc/formes_blancs-17.png'
        text += '9';
        printName();
    }
    else {
        reset();
        btn9.src = 'aiku/blanc/formes_blancs-17.png'
        text = '';
        text += '9';
        printName();
    }}
);


function display() {
print.innerHTML = '<img src=\'img/'+ text + '.jpg'+ '\' alt=\'image.'+text +'\'>';
    // text = '';
    printName();
}

function reset() {
    btnA.src = 'aiku/color/formes_color-rose (1).png';
    btnB.src = 'aiku/color/formes_color-rose (2).png';
    btnC.src = 'aiku/color/formes_color-rose (3).png';
    btnD.src = 'aiku/color/formes_color-rose (4).png';

    btnW.src = 'aiku/color/formes_color-orange (2).png';
    btnX.src = 'aiku/color/formes_color-orange (3).png';
    btnY.src = 'aiku/color/formes_color-orange (4).png';
    btnZ.src = 'aiku/color/formes_color-orange (1).png';

    btn1.src = 'aiku/color/formes_color-vert (4).png';
    btn2.src = 'aiku/color/formes_color-vert (1).png';
    btn3.src = 'aiku/color/formes_color-vert (2).png';
    btn4.src = 'aiku/color/formes_color-vert (3).png';

    btn6.src = 'aiku/color/formes_color-pomme (1).png';
    btn7.src = 'aiku/color/formes_color-pomme (2).png';
    btn8.src = 'aiku/color/formes_color-pomme (3).png';
    btn9.src = 'aiku/color/formes_color-pomme (4).png';
}

btnDisplay.addEventListener('click', ()=>{
    display();
    printDivContent();
    reset();

});

function printDivContent() {
    var windows = window.open('', '', 'height=100%, width=100%');
    windows.document.write('<html>');
    windows.document.write('<body>');
    windows.document.write('<style> img {width: 1263px; height: 894px; rotate:90deg; position: fixed; top:0; left:0;} body{height:200vh}</style>');
    windows.document.write('<img src=\'img/'+ text + '-card.jpg'+ '\' alt=\'image.'+text +'\'>');
    windows.document.write('</style></html>');
    windows.document.close();
    windows.print();
}


});

