var q42 = ['m1', 'm2', 'm3', 'm4'];
function show_magician2(q42) {
    for (var i = 0; i < q42.length; i++) {
        console.log(q42[i]);
    }
}
show_magician2(q42);
function great_magician(q42) {
    for (var i = 0; i < q42.length; i++) {
        q42[i] = q42[i] + ' the great magician';
    }
    for (var i = 0; i < q42.length; i++) {
        console.log(q42[i]);
    }
}
great_magician(q42);
