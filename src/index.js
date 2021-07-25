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
  let arr = output.split(" ");
  arr.pop();
  if (arr.length === 3) {
    arr.splice(1, 0, "hundred");
    arr[2] = arr[2] + "ty";
  }
  if (arr.length === 4) arr[0] = arr[0] + "ty";
  return arr.join(" ");
}
