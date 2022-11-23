const userDB = []
let id = 1

// {
// 	id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

const findAllUsers = () =>{
    return userDB
}

const findUserById =(id) =>{
    const filteredUser = userDB.find(item => item.id == id)
    return filteredUser
}

const createNewUser = (obj) =>{
 const newUser = {
    id:id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    eamil: obj.eamil,
    password: obj.password,
    birthday: obj.birthday
  }
  userDB.push(newUser)
  return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}
