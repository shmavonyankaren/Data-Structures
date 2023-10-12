class Users {
    constructor(usersData) {
        this.usersMap = new Map();
        this.addUsers(usersData);
    };

    addUser(userId, userData) {
        this.usersMap.set(userId, userData);
        return "Added";
    }

    addUsers(userArray) {
        for (const userData of userArray) {
            this.addUser(userData.id, userData); 
        }
    }

    getUserById(userId) {
        return this.usersMap.get(userId);
    }

    updateUser(userId, updatedUserData) {
        if (this.usersMap.has(userId)) {
            this.usersMap.set(userId, updatedUserData);
            return "Updated!";
        }
        return "User with this ID does not exist!";
    }
}