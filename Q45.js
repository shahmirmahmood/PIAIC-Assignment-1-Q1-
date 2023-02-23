function make_car(Mf, Md) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_dic = {
        'Manufacturer': Mf,
        'Model': Md
    };
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        car_dic[key] = value;
    });
    return car_dic;
}
console.log(make_car('Honda', 'City', ['Color', 'white'], ['Alloyrim', 'No']));
