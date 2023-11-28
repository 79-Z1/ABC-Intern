// Viết 1 hàm tạo mảng mới từ mảng ban đầu ngoại trừ các số được chọn sau đó loại bỏ các số trùng lặp
function excluse( arr = [], excluseNums = [] ) {
    return arr.filter(num => !excluseNums.includes(num))
}


const arr = [21, 25, 24, 25, 30, 21, 18, 30 ,10, 29];
console.log(
    [...new Set(excluse(arr, [21,22,25]))]
);