const Employee = require('../team_members/Employee');

describe('Employee', () => {
    describe('initialise', () => {
        it('Constructor test', () => {

            const id = 1;
            const name = 'Name'
            const email = 'test@testemail.com'
            const role = 'Employee'


            const object = new Employee(id, name, email)

            expect(object.name).toEqual(name);
            expect(object.id).toEqual(id);
            expect(object.email).toEqual(email);

            expect(object.getName().toEqual(name));
            expect(object.getId().toEqual(id));
            expect(object.getEmail().toEqual(email));
            expect(object.getRole().toEqual(role))
        }) 
    })
})