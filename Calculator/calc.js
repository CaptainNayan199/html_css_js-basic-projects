// working for operator
// var num2
// var num1 = num1 + num2;
// document.getElementById("textbox").value = num1 || "0";

// Hyaaaaaaaa ka saknu esari tw , event listener use garnai parxa 
// navae dimakh khanxa. kun button thicho vanera tha pauna
// event chaihinxa esari simple xaina


// function off() {
//     document.getElementById("textbox").value = " ";
//     clear()
// }

// function clear(){
//     document.getElementById("textbox").value = " ";

//     tempval = 0
//     nume = 0
//     n = 0
// }

// function on() {
//     document.getElementById("textbox").value = 0;
// }
// var n = 0;
// var tempval

// function hey(e) {
//     var textbox = document.getElementById("textbox");
//     var num
//     if(textbox.value == 0)
//     textbox.value = ''
//      num = textbox.value + e
//     textbox.value = num
//     if(n == 0)
//     tempval = textbox.value

// }
// var nume,operation 
// var output

// function add(){

//     nume = document.getElementById("textbox").value
//     document.getElementById("textbox").value = " "

//     if(n!=0){
//          var OUT = parseInt(nume) + parseInt(tempval);
//         output = OUT
//     }
//     document.getElementById("textbox").value = " "

//     n = 1



// }

// function equal(){
//     document.getElementById("textbox").value = output
//     output = 0

// }

function num(e) {
    var textbox = document.getElementById("textbox");
    var num
    // if (textbox.value == 0) {
    //     textbox.value = ''
    // 
    num = textbox.value + e
    textbox.value = num
}


function add() {
    for (var i = 0; i < 4; i++) {
        var num1 = document.getElementById("textbox").value
        // alert(num1)
        temp = num1 + 0
        // document.getElementById("textbox").value = temp
        // textbox.value = " "
        var getValue= document.getElementById("textbox");
        if (getValue.value !="") {
            getValue.value = "";
        }
        var num1 = document.getElementById("textbox").value
        alert(num1)

        // textbox.value = reset()
    }




    // if (textbox.value == 0) {
    //     var num2 = document.getElementById("textbox").value
    //     alert(num2)
    // }
    // alert(num1+num2)






}