const Engineer = require('../team_members/Engineer');

describe('Engineer', () => {
    describe('initialise', () => {
        it('Constructor test', () => {

            const id = 1;
            const name = 'Name'
            const email = 'test@testemail.com'
            const role = 'Intern'
            const github = '@exampleusername'

            const object = new Engineer(id, name, email, github)

            expect(object.name).toEqual(name)
            expect(object.id).toEqual(id)
            expect(object.email).toEqual(email)
            expect(object.github).toEqual(github)

            expect(object.getName().toEqual(name));
            expect(object.getId().toEqual(id));
            expect(object.getEmail().toEqual(email));
            expect(object.getRole().toEqual(role))
            expect(object.getGitHub().toEqual(github))
        }) 
    })
})