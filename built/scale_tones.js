/*
 * A testing program for scale tones
 * */
var circle_of_fifths = /** @class */ (function () {
    /* Major:
     *  whole 2
     *  semi 1
     *  whole whole semi whole whole whole semi
     * Nat Minor:
     *  whole semi whole whole semi whole whole
     * Harmonic Minor
     *  min3 (whole+semi / semi*3)
     *  whoel semi whole whole semi min3 semi\
     * Melodic minor
     *  whole semi whole whole whole whole semi
     */
    function circle_of_fifths(root) {
        this.root = root.toLowerCase();
        //this.nat_major = [2,2,1,2,2,2,1];
        //this.nat_minor = [2,1,2,2,1,2,2];
        this.harm_minor = [2, 1, 2, 2, 1, 3, 1];
        this.mel_minor = [2, 1, 2, 2, 2, 2, 1];
        this.keys = [
            'c♭', 'c', 'c#',
            'd♭', 'd', 'd#',
            'e♭', 'e', 'e#',
            'f♭', 'f', 'f#',
            'g♭', 'g', 'g#',
            'a♭', 'a', 'a#',
            'b♭', 'b', 'b#',
            'c♭', 'c', 'c#'
        ];
        this.flats = [
            'c', 'd♭', 'd', 'e♭', 'e', 'f', 'g♭', 'g', 'a♭', 'a', 'b♭', 'b',
            'c', 'd♭', 'd', 'e♭', 'e', 'f', 'g♭', 'g', 'a♭', 'a', 'b♭', 'b',
        ];
        this.sharps = [
            'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b',
            'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b',
        ];
    }
    circle_of_fifths.prototype.find_key = function () {
        var substr_key = ['min', 'maj'];
        var substr_sig = ['#', "b", '♭'];
        var sharp = this.root.search('#') || this.root.search('flat');
        var flat = this.root.search('b') || this.root.search('♭');
        var maj = this.root.search('maj');
        var min = this.root.search('min');
    };
    Object.defineProperty(circle_of_fifths.prototype, "randomKey", {
        get: function () {
            var rand = Math.floor(Math.random() * this.keys.length);
            return this.keys[rand];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(circle_of_fifths.prototype, "nat_major", {
        get: function () {
            //whole whole semi whole whole whole semi
            var order = [2, 2, 1, 2, 2, 2, 1];
            var start = this.randomKey;
            var keys = start.includes('♭') ? this.flats : this.sharps;
            var scale = [];
            scale.push(start);
            order.forEach(function (pos) {
                var cur_key = scale[scale.length - 1];
                var ind = keys.indexOf(cur_key);
                scale.push(keys[ind + pos]);
            });
            scale[0] = scale[scale.length - 1];
            scale.pop();
            return scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(circle_of_fifths.prototype, "nat_minor", {
        get: function () {
            //whole semi whole whole semi whole whole
            var order = [2, 1, 2, 2, 1, 2, 2];
            var start = this.randomKey;
            var keys = start.includes('♭') ? this.flats : this.sharps;
            var scale = [];
            scale.push(start);
            order.forEach(function (pos) {
                var cur_key = scale[scale.length - 1];
                var ind = keys.indexOf(cur_key);
                scale.push(keys[ind + pos]);
            });
            scale[0] = scale[scale.length - 1];
            scale.pop();
            return scale;
        },
        enumerable: false,
        configurable: true
    });
    return circle_of_fifths;
}());
var circle = new circle_of_fifths("f major");
circle.nat_minor.forEach(function (key) { return console.log(key); });
