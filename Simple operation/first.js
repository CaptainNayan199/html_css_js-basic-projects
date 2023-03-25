function calc() {
    var num1 = parseInt(document.getElementById("input1").value)
    var num2 = parseInt(document.getElementById("input2").value)
    var oper = document.getElementById("sel").value
    switch (oper) {
        case "Add":
            result = num1 + num2;
            break;
        case "Sub":
            result = num1 - num2;
            break;
        case "Mul":
            result = num1 * num2;
            break;
        case "Div":
            result = num1 / num2;
            break;
        default:
            document.write("Code wrong bro");
    }
    document.getElementById("div2").innerHTML = "<br>The result is : " + result;

}