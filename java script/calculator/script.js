let input = document.querySelector("input");
let getvalue = (e) => {
    let text = e.target.innerText;
    input.value += text;
}
let calculate = () => {
    let res = eval(input.value);
    input.value = res;
}
let remove=()=>{
    let currentValue = input.value;
    input.value = currentValue.slice(0,-1);
}