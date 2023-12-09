function fnA(value, callback) {
  callback(2);
  console.log(value);
}

function fnB(item) {
  console.log("This is callback", item);
}

fnA(23, fnB);

function doMath(a, b, callback) {
    const result = callback(a, b);
    console.log("Result:", result);
    return result;
}

function add(x, y) {
    return x+y;
}

doMath(2, 3, add);

function onGetPositionSucess(position) {
    console.log("onGetPositionSucess");
    console.log(position);
}

function onGetPositionError(error) {
    console.log("onGetPositionError");
    console.log(error);
}

// console.dir(window);
window.navigator.geolocation.getCurrentPosition(
    onGetPositionSucess, onGetPositionError
)