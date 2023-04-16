// here i'm taking const i.e, taking the element not the value (in value, const cann't be update)
const countValue = document.querySelector("#count");

function increment() {
    // get value & convert string into int using parseInt
    let value = parseInt(countValue.innerText);

    // update(increment) the value
    value = value + 1;

    // set the value
    countValue.innerText = value;

}

function decrement() {
    // get value & convert string into int using parseInt
    let value = parseInt(countValue.innerText);

    // update(decrement) the value
    value = value - 1;

    // set the value
    countValue.innerText = value;

}

/*

//  we can also use arrow function ->

const increment = () => {
    // get value
    let value = parseInt(countValue.innerText);

    // update(increment) the value
    value = value + 1;

    // set the value
    countValue.innerText = value;

}

const decrement = () => {
    // get value
    let value = parseInt(countValue.innerText);

    // update(decrement) the value
    value = value - 1;

    // set the value
    countValue.innerText = value;

}

*/