var arrayQuestions = [
'Are you a booklover?',
'Do you read a book?',
'Do they go to hell?',
'Do you like to travel?',
'Do you like your life?'
];

var answers = [
'not selected',
'yes',
'no'
];

window.onload = function arrayLoad() {
    var p = document.getElementById('question');
    var question;
    for (var i = 0; i < arrayQuestions.length; i++) {
        p.innerHTML = p.innerHTML + '<div id="'+ i + '"><p>' + arrayQuestions[i] + '</p>' + z(arrayQuestions[i]) + '<hr></div>';

        question = document.getElementsByName(arrayQuestions[i]);
        question[0].setAttribute("checked", "true");

        question[1].setAttribute("onclick", "b(" + (i+1) + ")");

        question[2].setAttribute("onclick", "o(" + (i+1) + ")");

        if(i!==0) {
            n(i);
        }
    }
};

var n = function (value) {
    document.getElementById(value).setAttribute("class", "none");
};

var b = function (id) {
    document.getElementById(id).setAttribute("class", "block");
};

var o = function (id) {
    for(var k = parseInt(id); k<arrayQuestions.length; k++) {
        document.getElementById(k).setAttribute("class", "none");
    }
};

var z = function (radioname) {
    var x = '';
    for (var k = 0; k < answers.length; k++) {
        x = x + '<label><input type="radio" name="' + radioname + '" value="' + answers[k] + '">' + answers[k] + '</label><br>';
    }
    return x;
};


// function questionsOneDefault() {
//     var questionsOne = document.getElementsByName('Are you a booklover?');
//     var questionsTwo = document.getElementsByName('Do you read a book?');
//     var questionsThree = document.getElementsByName('Do they go to hell?');
//     var questionsFour = document.getElementsByName('Do you like to travel?');


//     for (var b = 1; b < arrayQuestions.length; b++) {
//         document.getElementById(b).setAttribute("class", "none");
//     }
//     questionsOne[0].checked = true;
//     questionsOne[1].onclick = clickRadio;
//     questionsTwo[1].onclick = clickRadio1;
//     questionsThree[1].onclick = clickRadio2;
//     questionsFour[1].onclick =clickRadio3;
// }

// function clickRadio() {
//     document.getElementById('1').setAttribute("class", "block");
// }
// function clickRadio1() {
//     document.getElementById('2').setAttribute("class", "block");
// }
// function clickRadio2() {
//     document.getElementById('3').setAttribute("class", "block");
// }
// function clickRadio3() {
//     document.getElementById('4').setAttribute("class", "block");
// }

