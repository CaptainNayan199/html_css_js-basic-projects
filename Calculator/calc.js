

function num(e) {
    var textbox = document.getElementById("textbox");
    var num
    num = textbox.value + e
    textbox.value = num
}


function calculate() {
        var num1 = document.getElementById("textbox").value
        let result = eval(num1)
        textbox.value = 0
        textbox.value = result 
}

function ac(){
    textbox.value = 0
}

function off(){
    textbox.value = " "
}
function del(){
    let str = document.getElementById("textbox").value
    str = str.slice(0, -1)
    textbox.value = str

}
