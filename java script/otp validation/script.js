let otp;

let generateotp = () => {
    let display=document.getElementById('display')
    let randomnum = Math.random() * 10000
    otp = Math.floor(randomnum);
        (otp >= 1000) ? display.innerText = otp : generateotp()
}


let validateotp = () => {
    let input = document.getElementById('otpinput').value
    let text = input;

    if(text==otp){
            alert('otp validation successful')
        } else{
            alert('invalid otp')
        }
}