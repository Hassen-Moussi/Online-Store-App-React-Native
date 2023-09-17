import mysql from 'mysql2';
//import dotenv from 'dotenv';

//dotenv.config();

const pool = mysql.createPool({
    host: '127.0.0.1',
    user:'root',
    password: 'root',
    database:'shopdatabase',
    port:3306,
}).promise();






//*****************************************************************Add users**********************************************************************************// 

export async function CreateUser(Username, Email, password) {
    try {
       
        const [existingUsers] = await pool.query('SELECT * FROM users WHERE Username = ?', [Username]);

        if (existingUsers.length > 0) {
           
            console.error('this username already exists');
            return null;
        }

     
        const [result] = await pool.query(`INSERT INTO users (Username, Email, password) VALUES (?, ?, ?)`, [Username, Email, password]);

        if (result.affectedRows === 1) {
          
           const id = result.insertId
           return getusersbyid(id)
        } else {
          
            console.error('User was not added.');
            return null; 
        }
    } catch (error) {
        console.error('Error creating user:', error);
        return null; 
    }
}
//*************************************************************************************Add users *****************************************************************************//









//*************************************************************************************Get users *****************************************************************************//
export async function getusers(){
    const users = await pool.query('SELECT * FROM users');
    return users[0];
}
//**************************************************************************************Get users******************************************************************************//









//*************************************************************************************Get usersbyid**************************************************************************//
export async function getusersbyid(id){
    const [user] = await pool.query('SELECT * from users where id=?',[id])
    return user[0]
}
//*************************************************************************************Get usersbyid**************************************************************************//










//*************************************************************************************Delete usersbyid**************************************************************************//

export async function Deleteusersbyid(id){
    await pool.query('DELETE FROM users WHERE id=?',[id])
    return 'user deleted';
}
//*************************************************************************************Delete usersbyid**************************************************************************//










//*************************************************************************************Update Users**************************************************************************//

export async function Updateusers(id , username , email , password){
    await pool.query('UPDATE users SET Username=? , Email=? , password=? WHERE id=?',[username,email,password,id]);
    return 'user updated';
}
//*************************************************************************************Update Users**************************************************************************//




//**********************************************************************************Login*********************************************************************************//

export async function Login(username, password) {
    const [user] = await pool.query('SELECT * FROM users WHERE Username = ? AND password = ?', [
      username,
      password,
    ]);
  
    if (user.length === 1) {
      return user[0];
    } else {
      return 'Check Username or Password';
    }
  }


//**********************************************************************************Login*********************************************************************************//







