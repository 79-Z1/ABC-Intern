// Sắp xếp sinh viên theo rank, sau đó trả về tên sinh viên
const STUDENTS_ARRAY = [
    { name: 'Suraj', year: 2019, ranking: 4 },
    { name: 'Amit', year: 2019, ranking: 5 },
    { name: 'Akash', year: 2018, ranking: 4 },
    { name: 'Dinanath', year: 2019, ranking: 7 },
    { name: 'Sagar', year: 2017, ranking: 3 },
]

function sortStudent() {
    return STUDENTS_ARRAY.sort((a,b) => b.ranking - a.ranking)
    .map(student => student.name)
}

console.log(sortStudent());