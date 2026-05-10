// type coercion (implicit)
console.log( "1" + 1); //  11
console.log( 1 + "1" ); // 11

// explicit conversion
let danaMBG = 100;
console.log("nilai " + danaMBG + " | type " + typeof(danaMBG)); // number
danaMBG = danaMBG.toString();
console.log("nilai " + danaMBG + " | type:" + typeof(danaMBG));
