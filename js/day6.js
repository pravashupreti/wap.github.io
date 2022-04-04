// Q2. 
function printNumbers(from, to) {

    // from ,to and id variables will be on outerscope of anonymous function of setInterval
    let id = setInterval(() => {
        console.log(from)
        if (from === to) {
            clearInterval(id)
        }
        from++
    }, 1000)

}
printNumbers(10, 15)

// Q3. 
/*
The setinterval code will run after the loop
The alert will output 100000000
*/