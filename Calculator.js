function Solve(val) {
    var output = document.getElementById('res');
    output.value += val;
 }
 function Calculate() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    var output = document.getElementById('res');
    output.value = '';
 }
 function Del() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }