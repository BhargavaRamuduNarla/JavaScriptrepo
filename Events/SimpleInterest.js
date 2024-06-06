function earse() {
    document.getElementById('p1').value=""
    document.getElementById('t1').value=""
    document.getElementById('r1').value=""
}
function si(){
    let p = eval(document.getElementById('p1').value)
    let t = eval(document.getElementById('t1').value)
    let r = eval(document.getElementById('r1').value)
    let si = (p*t*r)/100
    alert(si)
}