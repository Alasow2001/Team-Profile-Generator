const Intern = require('../team_members/Intern');

describe('Intern', () => {
    describe('initialise', () => {
        it('Constructor test', () => {

            const id = 1;
            const name = 'Name'
            const email = 'test@testemail.com'
            const role = 'Intern'
            const school = ''

            const object = new Intern(id, name, email, school)

            expect(object.name).toEqual(name)
            expect(object.id).toEqual(id)
            expect(object.email).toEqual(email)
            expect(object.role).toEqual(role)
            expect(object.school).toEqual(school)

            expect(object.getName().toEqual(name));
            expect(object.getId().toEqual(id));
            expect(object.getEmail().toEqual(email));
            expect(object.getRole().toEqual(role))
            expect(object.getSchool().toEqual(school))
        }) 
    })
})