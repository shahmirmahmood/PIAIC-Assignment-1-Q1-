var ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_num.length; i++) {
    if (ordinal_num[i] == 1) {
        console.log(ordinal_num[i] + "st");
    }
    if (ordinal_num[i] == 2) {
        console.log(ordinal_num[i] + "nd");
    }
    if (ordinal_num[i] == 3) {
        console.log(ordinal_num[i] + "rd");
    }
    if (ordinal_num[i] >= 4)
        console.log(ordinal_num[i] + "th");
}
