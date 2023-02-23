function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("i will make you a yummy sandwich\n");
    for (var i = 0; i < items.length; i++) {
        console.log("adding " + items[i] + " to your sandwich");
    }
    ;
    console.log("\n");
    console.log("sandwich is ready");
    console.log("\n");
}
sandwich("chicken", "Tomato", "cheese");
sandwich("Grilled chicken", "pickle", "Onion");
sandwich("Mayo", "Ketchup", "bbq chicken");
