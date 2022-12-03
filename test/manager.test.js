const Manager = require('../team_members/Manager');

describe('Manager', () => {
    describe('initialise', () => {
        it('Constructor test', () => {

            const id = 1;
            const name = 'Name'
            const email = 'test@testemail.com'
            const role = 'Manager'
            const officeNumber = 12345

            const object = new Manager(name, id, email, officeNumber)

            expect(object.name).toEqual(name);
            expect(object.id).toEqual(id);
            expect(object.email).toEqual(email);
            expect(object.officeNumber).toEqual(officeNumber)

            expect(object.getName()).toEqual(name)
            expect(object.getId()).toEqual(id)
            expect(object.getEmail()).toEqual(email)
            expect(object.getRole()).toEqual(role)
            expect(object.getOfficeNumber()).toEqual(officeNumber)

        }) 
    })
})