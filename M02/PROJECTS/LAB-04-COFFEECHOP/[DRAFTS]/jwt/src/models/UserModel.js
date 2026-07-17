// Modelo de usuario ( simulado - reemplazar con DB real )
class UserModel {
    static users = [
        { id: 1, username: "admin", password: "123456" },
        { id: 2, username: "Joshua", password: "JHS37" }
    ];

    static getUsers( req, res ) {
        return this.users;
    }

    static findByName( username, password ) {
        return this.users.find( 
            user => user.username === username && user.password === password
        );
    }

    static findById( id ) {
        return this.users.find( user => user.id === id );
    }

    static create( userData ) {
        const newUser = {
            id: this.users.length + 1,
            ...userData
        };

        this.users.push( newUser );
        
        return newUser;
    }
}

module.exports = UserModel;
