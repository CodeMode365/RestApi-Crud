import { v4 as uuidv4 } from "uuid";

let users = [];

//create user
export const creatUser = (req, res) => {
  //capture the users request
  const user = req.body;
  //add the new user to the database with unique id(object in this case)
  users.push({ ...user, id: uuidv4() });
  //Send the output after the data is stored
  res.send(`user:${user.firstName} has been added into dataBase`);
};

//to get all users info
export const getUser = (req, res) => {
  res.send(users);
};

//to get specific users data/ info
export const specificView = (req, res) => {
  // res.send(req.params)
  //const id = req.params.id
  const { id } = req.params;

  //find the users in database(array of object in this case)
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

//delete user
export const deleteUser =(req,res)=>{
  const { id } = req.params;
users = users.filter((user)=>user.id !=id);
res.send(`data deleted`)
}
// export const deleteUser = (req, res) => {
//   const { id } = req.params;
//   users = users.filter((user) => user.id !== id);
//   res.send(`User with ${id} has been deleted`);
// };

//updateUser
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  //find the user
  const user = users.find((user) => user.id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with id:${id} has been updated`);
};
