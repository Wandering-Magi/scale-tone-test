/*
 * A testing program for scale tones
 * */

class circle_of_fifths {
  constructor(root) {
    this.root = root;
    this.flats = [];
    this.sharps = [];
    this.steps = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c"];
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
     *       
     */

    /* check if minor or major */
    let buffer = this.root.toLowerCase();
    let maj_min = this.root.split(" ")[1];
    let mnem = [];
    let key = buffer.split(" ")[0];
    // find root key in steps
    let i = 0;
    let indy = "c";
    console.log(indy);
    while (i<12) {
      let y = this.steps.indexOf(indy);
      let next = this.steps[y+7];
      console.log(next);
      indy = next;
      i++;
    }

    /*
    if (maj_min == "min" || maj_min == "minor"){
      mnem = ["f", "b", "e", "a", "d", "g", "c"];
    } else if (maj_min = "maj" || maj_min == "major") {
      mnem = ["f", "c", "g", "d", "a", "e", "b"];
    }
    console.log(buffer.split(" ")[1]);
    */
  }
}

const circle = new circle_of_fifths("f major");

