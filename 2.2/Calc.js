function zero(process) {

    if (process) return process(0);

    return 0;

}

function one(process) {

    if (process) return process(1);

    return 1;

}

function two(process) {

    if (process) return process(2);

    return 2;

}

function three(process) {

    if (process) return process(3);

    return 3;

}

function four(process) {

    if (process) return process(4);

    return 4;

}

function five(process) {

    if (process) return process(5);

    return 5;

}

function six(process) {

    if (process) return process(6);

    return 6;

}

function seven(process) {

    if (process) return process(7);

    return 7;

}

function eight(process) {

    if (process) return process(8);

    return 8;

}

function nine(process) {

    if (process) return process(9);

    return 9;

}



function plus(val1) {

    return function (val2) { return val1 + val2; }

}

function minus(val1) {

    return function (val2) { return val2 - val1; }

}

function times(val1) {

    return function (val2) { return val1 * val2; }

}

function dividedBy(val1) {

    return function (val2) { return Math.floor(val2 / val1); }

}
