function make_album(artist, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var album_dic = {
        'artist': artist,
        'title': title
    };
    if (tracks)
        album_dic['tracks'] = tracks;
    return album_dic;
}
var album = make_album('metallica', 'ride the lightening');
console.log(album + "\n");
album = make_album('harnoor', 'Moonlight');
console.log(album + "\n");
album = make_album('David Bowie', 'Heros from Heros');
console.log(album + "\n");
album = make_album('harnoor', 'pershawan', 10);
console.log(album + "\n");
