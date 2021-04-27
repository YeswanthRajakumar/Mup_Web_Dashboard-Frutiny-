

// gas Reading
var fruitWidthObject = null;
let width = 0;

firebase
  .database()
  .ref("fruitiny_Width")
  .on("value", (snap) => {
    fruitWidthObject = snap.val();
    for (width in fruitWidthObject) {
      width = fruitWidthObject[width];
      console.log("Width of Fruit : " + width);
      break;
    }
  });


// gas Reading
var fruitGasObject = null;
let gas = 0;

firebase
  .database()
  .ref("fruitiny_gas")
  .on("value", (snap) => {
    fruitGasObject = snap.val();
    for (gas in fruitGasObject) {
      gas = fruitGasObject[gas];
      console.log("Gas of Fruit : " + gas);
      break;
    }
  });

// Height Reading
var fruitHeightObject = null;
let height = 0;

firebase
  .database()
  .ref("fruitiny_height")
  .on("value", (snap) => {
    fruitHeightObject = snap.val();
    for (height in fruitHeightObject) {
      height = fruitHeightObject[height];
      console.log("Height of Fruit : " + height);
      break;
    }
  });

  // IR Reading
var fruitHeightObject = null;
let ir = 0;

firebase
  .database()
  .ref("fruitiny_ir")
  .on("value", (snap) => {
    fruitIrObject = snap.val();
    for (irvalue in fruitIrObject) {
      ir = fruitIrObject[irvalue];
      console.log("IR value of Fruit : " + ir);
      break;
    }
  });

 
  // Volume Reading
var fruitVolumeObject = null;
let volume = 0;

firebase
  .database()
  .ref("fruitiny_volume")
  .on("value", (snap) => {
    fruitVolumeObject = snap.val();
    for (vol in fruitVolumeObject) {
      volume = fruitVolumeObject[vol];
      console.log("Volume of Fruit : " + volume);
      break;
    }
  });
