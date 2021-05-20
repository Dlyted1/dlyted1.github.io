//determine day of week//
let thedate = new Date();
// console.Log(thedate.getDay());

// if it's Friday -day 5 or true then turn the aside display property to block
if (thedate.getDay() == 4) {
    document.querySelector('#banner').getElementsByClassName.display = 'block';
}