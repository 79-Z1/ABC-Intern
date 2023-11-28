const STRING = '      Xin chào tên tôi là Hòa             ';

//1. đếm có bao nhiêu khoảng trắng trong chuỗi.
console.log('Số khoảng trắng trong chuỗi là: ', STRING.split(' ').length - 1);

//  2. Nhập vào một chuỗi, hãy loại bỏ những khoảng trắng thừa trong chuỗi.
console.log('Chuỗi sau khi bỏ khoảng trắng: ', STRING.trim());

// 3. Nhập vào hai chuỗi s1 và s2, nối chuỗi s2 vào s1. Xuất chuỗi s1 ra màn hình 
const str1 = 'Đây là chuỗi 1';
const str2 = ' Đây là chuỗi 2';
console.log(str1.concat(str2));

// 4. Đổi tất cả các kí tự trong chuỗi sang chữ in hoa
console.log('Chuỗi in hoa: ',STRING.toUpperCase().trim());

// 5. Đếm một kí tự xuất hiện bao nhiêu lần trong chuỗi.
const charDupCount = (char) => {
    return (STRING.match(new RegExp(char, 'g')) || []).length;
}
const char = 't';
console.log(`Chuỗi ${char} xuất hiện `, charDupCount(char));

//6. Đảo vị trí của từ đầu và từ cuối. 
console.log('Chuỗi sau khi đảo ngược: ', STRING.trim().split("").reverse().join(''));

