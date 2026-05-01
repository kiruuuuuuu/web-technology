let digitalclock=()=>{
    let elem=document.getElementsByTagName('h2')
    let dateobj=new Date()

    let curdate=dateobj.toLocaleDateString()
    let curtime=dateobj.toLocaleTimeString()
    let curday=dateobj.getDay()
    switch(curday){
        case 1 :elem[2].innerText='monday'
        break;
        case 2 :elem[2].innerText='tuesday'
        break;
        case 3 :elem[2].innerText='wednesday'
        break;
        case 4 :elem[2].innerText='thursday'
        break;
        case 5 :elem[2].innerText='friday'
        break;
        case 6 :elem[2].innerText='saturday'
        break;
        case 7 :elem[2].innerText='sunday'
        break;
    }


    elem[0].innerText=curdate
    elem[1].innerText=curtime
}