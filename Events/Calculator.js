function earse(){
    document.getElementById('a1').value=""
    document.getElementById('a2').value=""
}
function add(){
    let a = eval(document.getElementById('a1').value)
    let b = eval(document.getElementById('a2').value)
    alert(a+b)
}
function sub(){
    let a = eval(document.getElementById('a1').value)
    let b = eval(document.getElementById('a2').value)
    alert(a-b)
}
function mul(){
    let a = eval(document.getElementById('a1').value)
    let b = eval(document.getElementById('a2').value)
    alert(a*b)
}
function div(){
    let a = eval(document.getElementById('a1').value)
    let b = eval(document.getElementById('a2').value)
    alert(a/b)
}
function mod(){
    let a = eval(document.getElementById('a1').value)
    let b = eval(document.getElementById('a2').value)
    alert(a%b)
}

