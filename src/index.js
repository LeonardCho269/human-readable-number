module.exports = function toReadable (number) {
    if (number === 0) {

        return "zero";
    }

    var Dn = Math.floor(number / 100); /* Tens (deca) */
    number = number % 100; /* Ones */
    var tn = Math.floor(number / 10);
    var one = Math.floor(number % 10);
    var res = "";

    if (Dn) {
        res += (((res == "") ? "" : " ") + toReadable(Dn) + " hundred");
    }

    var ones = Array("", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");
    var tens = Array("", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety");

    if (tn > 0 || one > 0) {
        if (!(res == "")) {
            res += " ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {

            res += tens[tn];
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
