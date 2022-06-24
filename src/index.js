module.exports = function toReadable (number) {
    if (number === 0) {

        return "zero";
    }

    var hund = Math.floor(number / 100); 
    number = number % 100; 
    var ten = Math.floor(number / 10);
    var one = Math.floor(number % 10);
    var res = "";

    if (hund) {
        res += (((res == "") ? "" : " ") + toReadable(hund) + " hundred");
    }

    var ones = Array("", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");
    var tens = Array("", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety");

    if (ten > 0 || one > 0) {
        if (!(res == "")) {
            res += " ";
        }
        if (ten < 2) {
            res += ones[ten * 10 + one];
        } else {

            res += tens[ten];
            if (one > 0) {
                res += (" " + ones[one]);
            }
        }
    }

    if (res == "") {
        console.log("Empty = " + number);
        res = "";
    }
    return res;
}
