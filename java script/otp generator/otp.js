let generateotp = () => {
    let display = document.getElementById('display')
    let randomnum = Math.random() * 10000
    let otp = Math.floor(randomnum);
        (otp >= 1000) ? display.innerText = otp : generateotp()
}