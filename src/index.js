const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
    const result = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substring(i, i + 10));
    }

    for (let i = 0; i < arr.length; i++) {
        const origin = arr[i];
        const index = origin.indexOf('1');
        const withOutZero = origin.substring(index);
        const symbols = [];

        if (arr[i] === '**********') {
            result.push(' ');
            continue;
        }

        for (let j = 0; j < withOutZero.length; j += 2) {

            symbols.push(withOutZero.substring(j, j + 2));
        }

        let str = '';

        symbols.forEach((e) => {
            if (e === '10') {
                str += '.';
            } else {
                str += '-';
            }

        });

        result.push(MORSE_TABLE[str]);

    } 

    return result.join('');

}

module.exports = {
    decode
}