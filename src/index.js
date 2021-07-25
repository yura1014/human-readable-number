module.exports = function toReadable (number) {
   numbArray = String(number).split("");
  console.log(numbArray);
  let output = "";
  numbArray.forEach((element) => {
    switch (element) {
      case "0":
        output = output + "null ";
        break;
      case "1":
        output = output + "one ";
        break;
      case "2":
        output = output + "two ";
        break;
      case "3":
        output = output + "three ";
        break;
      case "4":
        output = output + "four ";
        break;
      case "5":
        output = output + "five ";
        break;
      case "6":
        output = output + "six ";
        break;
      case "7":
        output = output + "seven ";
        break;
      case "8":
        output = output + "eight ";
        break;
      case "9":
        output = output + "nine ";
        break;
    }
  });
  return output;
}
