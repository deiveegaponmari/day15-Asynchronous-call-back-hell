
//timer();

//const displaydata=document.getElementById("displaydata");
//alert("clicked")
const timer = (cb) => {
    const displaydata = document.getElementById("displaydata");
    displaydata.innerText = 10;
    setTimeout(() => {
        displaydata.innerText = 9;
        setTimeout(() => {
            displaydata.innerText = 8;
            setTimeout(() => {
                displaydata.innerText =7;
                setTimeout(() => {
                    displaydata.innerText = 6;
                    setTimeout(() => {
                        displaydata.innerText =5;
                        setTimeout(() => {
                            displaydata.innerText = 4;
                            setTimeout(() => {
                                displaydata.innerText = 3;
                                setTimeout(() => {
                                    displaydata.innerText = 2;
                                    setTimeout(() => {
                                        displaydata.innerText = 1;
                                        setTimeout(() => {
                                            displaydata.innerText = "Happy Independence Day"
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}
const button = document.getElementById("clickbutton");
button.addEventListener('click', () => {
    timer();
})
