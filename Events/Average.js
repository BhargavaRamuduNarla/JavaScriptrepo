function earse() {
    document.getElementById('s1').value=""
    document.getElementById('s2').value=""
    document.getElementById('s3').value=""
    document.getElementById('s4').value=""
    document.getElementById('s5').value=""
    document.getElementById('s6').value=""
}
function Average(){
    let t = document.getElementById('s1').value
    let h = document.getElementById('s2').value
    let e = document.getElementById('s3').value
    let m = document.getElementById('s4').value
    let c = document.getElementById('s5').value
    let s = document.getElementById('s6').value

    let sum = eval(t)+eval(h)+eval(e)+eval(m)+eval(c)+eval(s)
    let Average=sum/6
    alert(Average)
}