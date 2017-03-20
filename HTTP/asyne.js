var c = 0;

function printIt () {
    console.log(c);
}

function plus1 (callback) {
    setTimeout(function() {
        c += 1;
        callback();
    },1000);
}

function plus1 () {
    setTimeout(function () {
        c += 1;
    },1000)
}

plus1(printIt);