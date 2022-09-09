const  countDown = (i) => {
    let result = i;
     while (--i > 0) {
       
        result += ' ' + i;
    }  
     console.log(result)
}
