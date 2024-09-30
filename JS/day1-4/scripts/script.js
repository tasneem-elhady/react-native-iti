function task1(){
    myWin = open("","","width=300,height=300");
    function move_on_diagonal(){
        if(myWin.screenX > window.screen.availWidth-350){
            clearInterval(Interval)
            myWin.close();
        }
        myWin.moveBy(140,50)
        console.log(window.screen.availWidth)
        console.log(myWin.screenX)
    }
    Interval = setInterval(move_on_diagonal,300)
}

function task2(){
    myWin2 = open("","","width=300,height=300");
    var str = "good morning";
    let i = 0;
    function Write(){
        if( i<str.length ){
            console.log(i);
            myWin2.document.write(str[i]);
            i++;
            setTimeout(Write,200);
        }
        else
            setTimeout(function(){myWin2.close(),600})
    }
    Write();
}

function task3(){
    myWin3 = open("","","width=100,height=200");
    myWin3.document.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    // myWin3.scrollBy(0,50);
    console.log((myWin3.innerHeight + myWin3.scrollY) >= myWin3.document.body.offsetHeight);
    function pageScroll(){
        if(!((myWin3.innerHeight + myWin3.scrollY) >= myWin3.document.body.offsetHeight) ){
            console.log(myWin3.innerHeight + myWin3.scrollY)
            console.log(myWin3.document.body.offsetHeight);
            myWin3.scrollBy(0,10);
            setTimeout(pageScroll,50);
        }
        else
            setTimeout(function(){myWin3.close(),200})
    }
    pageScroll();
}