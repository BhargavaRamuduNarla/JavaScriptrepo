function earse() {
    document.getElementById('a1').value=""
    document.getElementById('b1').value=""
}
function Abcube(){
    let a = eval(document.getElementById('a1').value)
    let b = eval(document.getElementById('b1').value)
    let cube = ((a*a*a)+(b*b*b)+(3*(a*a)*b)+(3*(b*b)*a))
    alert(cube)
}