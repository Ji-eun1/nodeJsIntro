import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    const userId = uuidv4(); 
    const userWithId = {...user, id: userId};
    users.push(userWithId);

    res.send(`Users with the name ${user.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    const deletedUser = users.find((user) => user.id === id);
    users = users.filter((user) => user.id !== id);

    res.send(`Users with the name ${deletedUser.firstName} deleted from the database!`)
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, age } = req.body;
    let updatedUser = users.find((user) => user.id === id);

    if(firstName) updatedUser.firstName = firstName;
    if(lastName) updatedUser.lastName = lastName;
    if(age) updatedUser.age = age;

    res.send(`User with the id ${id} has been updated!`);
}