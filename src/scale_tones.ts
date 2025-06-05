/*
 * A testing program for scale tones
 * */

class circle_of_fifths {
  root: string;
  harm_minor: Array<number>;
  mel_minor: Array<number>;
  keys: Array<string>;
  flats: Array<string>;
  sharps: Array<string>;

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
  constructor(root: string) {
    this.root = root.toLowerCase();
    //this.nat_major = [2,2,1,2,2,2,1];
    //this.nat_minor = [2,1,2,2,1,2,2];
    this.harm_minor = [2,1,2,2,1,3,1];
    this.mel_minor = [2,1,2,2,2,2,1];
    this.keys = [
      'c♭', 'c', 'c#',
      'd♭', 'd', 'd#', 
      'e♭', 'e', 'e#', 
      'f♭', 'f', 'f#',
      'g♭', 'g', 'g#',
      'a♭', 'a', 'a#',
      'b♭', 'b', 'b#',
      'c♭', 'c', 'c#'];
    this.flats = [
      'c', 'd♭', 'd', 'e♭', 'e', 'f', 'g♭', 'g', 'a♭', 'a', 'b♭', 'b',
      'c', 'd♭', 'd', 'e♭', 'e', 'f', 'g♭', 'g', 'a♭', 'a', 'b♭', 'b',
    ];
    this.sharps = [
      'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 
      'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b',
    ];
  }

  find_key(){
    const substr_key = ['min', 'maj'];
    const substr_sig = ['#', `b`, '♭'];
    
    const sharp = this.root.search('#') || this.root.search('flat');
    const flat = this.root.search('b') || this.root.search('♭');
    const maj = this.root.search('maj');
    const min = this.root.search('min');
  }

  get randomKey(): string {
    const rand = Math.floor(Math.random() * this.keys.length);
    return this.keys[rand];
  }

  get nat_major(): Array<string> {
    //whole whole semi whole whole whole semi
    const order = [2,2,1,2,2,2,1];
    const start = this.randomKey;
    const keys = start.includes('♭')? this.flats : this.sharps;
    let scale: Array<string> = [];
    scale.push(start);
    order.forEach((pos) => {
      let cur_key = scale[scale.length -1];
      const ind = keys.indexOf(cur_key);
      scale.push(keys[ind + pos]);
    })
    scale[0] = scale[scale.length-1];
    scale.pop();
    return scale;
  }

  get nat_minor(): Array<string> {
    //whole semi whole whole semi whole whole
    const order = [2,1,2,2,1,2,2];
    const start = this.randomKey;
    const keys = start.includes('♭')? this.flats : this.sharps;
    let scale: Array<string> = [];
    scale.push(start);
    order.forEach((pos) => {
      let cur_key = scale[scale.length -1];
      const ind = keys.indexOf(cur_key);
      scale.push(keys[ind + pos]);
    })
    scale[0] = scale[scale.length-1];
    scale.pop();
    return scale;
  }
}

const circle = new circle_of_fifths("f major");


 
circle.nat_minor.forEach((key) => console.log(key));

