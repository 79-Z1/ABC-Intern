/**
 * Đưa vào một Danh sách các từ, 
 * hãy trả về các từ được cấu tạo nên từ những chữ cái chỉ nằm trên 1 hàng của bản phím
 * Input:["Hello", "Alaska", "Dad", "Peace"]
 * Expected output:["Alaska", "Dad"]
*/

const KEYBOARD_CHARACTERS = [
    ['q','w','e','r','t','y','u','i','o'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
]

function checkValidChar(arr = [], word) {
    const splitWord = [...word]
    return splitWord.every((char) => arr.includes(char))
}

function checkValidWord( array = [] ) {
    const validWords = [];
    for(let word of array) { 
        if(checkValidChar(KEYBOARD_CHARACTERS[0], word.toLowerCase())) {
            validWords.push(word);
        } else if(checkValidChar(KEYBOARD_CHARACTERS[1], word.toLowerCase())) {
            validWords.push(word);
        } else if(checkValidChar(KEYBOARD_CHARACTERS[2], word.toLowerCase())) {
            validWords.push(word);
        }
    }
    return validWords;
}

console.log(checkValidWord(['hehehe', 'qwert', 'Asdfgh','aw']));

