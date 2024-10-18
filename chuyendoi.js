
function feetToMeter(feet) {
    feet = document.getElementById('ftinput').value;
    let meter = 0.305 * feet;
    document.getElementById('m')
        .innerHTML = `${feet} to meters is ${meter}`;
}
function meterToFeet(meter) {
    meter = document.getElementById('minput').value;
    let feet = 3.279 * meter;
    document.getElementById('ft')
        .innerHTML = `${meter} to feet is ${feet}`;
}