const person = {
    firstName: 'Trương Khánh',
    lastName: 'Hòa',
    age: 21,
    country: 'Việt Nam',
    city: 'Nha Trang',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Node',
        'MongoDB',
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
person.title = 'sinh viên'
person.skills.push('PHP')
person.skills.push('jquery')

person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `Tên tôi là ${fullName}, tôi là ${this.title}.\nTôi sống ở ${this.city}/${this.country}.\nCác kĩ năng tôi đã học được: ${skills}.`
    return statement
}
console.log(person)
console.log(person.getPersonInfo())