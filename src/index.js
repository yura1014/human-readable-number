module.exports = function toReadable (number) {
       let str = String(number);
  let output = "";
  // if (str.length === 2 && str[0] === "1") {
  //   switch (str) {
  //     case "10":
  //       str = "ten";
  //       break;
  //     case "11":
  //       str = "eleven";
  //       break;
  //     case "12":
  //       str = "twelve";
  //       break;
  //     case "13":
  //       str = "thirteen";
  //       break;
  //     case "15":
  //       str = "fifteen";
  //       break;
  //   }
  // }
  numbArray = str.split("");
  if (numbArray.length > 2) {
    numbArray.splice(1, 0, "hundred");
  }
  numbArray.forEach((element) => {
    switch (element) {
      case "0":
        output = output + "zero ";
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
      case "hundred":
        output = output + "hundred ";
    }
  });
  if (output.endsWith("one zero ")) {
    output = output.replace("one zero ", "ten");
  }
  if (output.endsWith("one one ")) {
    output = output.replace("one one ", "eleven");
  }
  if (output.endsWith("one two ")) {
    output = output.replace("one two ", "twelve");
  }
  if (output.endsWith("one three ")) {
    output = output.replace("one three ", "thirteen");
  }
  if (output.endsWith("one four ")) {
    output = output.replace("one four ", "fourteen");
  }
  if (output.endsWith("one five ")) {
    output = output.replace("one five ", "fifteen");
  }
  if (output.endsWith("one six ")) {
    output = output.replace("one six ", "sixteen");
  }
  if (output.endsWith("one seven ")) {
    output = output.replace("one seven ", "seventeen");
  }
  if (output.endsWith("one eight ")) {
    output = output.replace("one eight ", "eighteen");
  }
  if (output.endsWith("one nine ")) {
    output = output.replace("one nine ", "nineteen");
  }

  arr = output.split(" ");

  console.log(arr.length);
  if (arr.length === 5) {
    arr.pop();
    if (arr[2] === "two") {
      arr[2] = "twenty";
    }
    if (arr[2] === "three") {
      arr[2] = "thirty";
    }
    if (arr[2] === "four") {
      arr[2] = "forty";
    }
    if (arr[2] === "five") {
      arr[2] = "fifty";
    }
    if (arr[2] === "six") {
      arr[2] = "sixty";
    }
    if (arr[2] === "seven") {
      arr[2] = "seventy";
    }
    if (arr[2] === "eight") {
      arr[2] = "eigthty";
    }
    if (arr[2] === "nine") {
      arr[2] = "ninety";
    }
    if (arr[2] === "zero") {
      arr[2] = "";
    }
  }
  if (arr.length === 3) {
    if (arr[0] === "two") {
      arr[0] = "twenty";
    }
    if (arr[0] === "three") {
      arr[0] = "thirty";
    }
    if (arr[0] === "four") {
      arr[0] = "forty";
    }
    if (arr[0] === "five") {
      arr[0] = "fifty";
    }
    if (arr[0] === "six") {
      arr[0] = "sixty";
    }
    if (arr[0] === "seven") {
      arr[0] = "seventy";
    }
    if (arr[0] === "eight") {
      arr[0] = "eigthty";
    }
    if (arr[0] === "nine") {
      arr[0] = "ninety";
    }
    if (arr[1] === "zero") {
      arr[1] = "";
    }
  }
  //if (arr.length === 3 && output.endsWith("zero ")) arr.pop();
  return arr.join(" ");
}
