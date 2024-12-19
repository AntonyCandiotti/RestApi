import {pool} from '../db.js';

export const getUsers = async (req,res) => {

    try {
       
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message:'something went wrong'})
        
    }
}

export const reiniciarContador = async (req,res) => {

    try {
        await pool.query('ALTER TABLE users AUTO_INCREMENT = 2')
        res.send('Reiniciado correctamente correctamente')
    } catch (error) {
        return res.status(500).json({message:'something went wrong'})   
    }

}

export const getUser = async (req,res) => {
try {
    const id = req.params.id
    const [rows] = await pool.query('SELECT * FROM users where id = ?', [id])

    if(rows.length <= 0) return res.status(404).json({
        message: 'User not found'
    })
    res.json(rows[0])
} catch (error) {
    return res.status(500).json({message:'something went wrong'}) 
    }
}

//request es lo que el cliente tenvia
export const createUsers = async (req,res) => {
    const {name,email} = req.body
    try {
    const [rows] = await pool.query('INSERT INTO users(name, email) VALUES (?,?)', [name,email])
    res.send({
        id: rows.insertId,
        name,
        email
    })
   } catch (error) {
    return res.status(500).json({message:'something went wrong'}) 
   }
    }

export const updateUsers = async (req,res) => {
    const {id} = req.params  // es lo mismo const id = req.params.id
    const {name,email} = req.body

    try {
        const [result] = await pool.query('UPDATE users SET name = IFNULL(?, name), email = IFNULL(?,email) WHERE id=?',[name,email,id])

        if (result.affectedRows === 0) return res.status(404).json({
         message: 'User not found'
        })
     
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message:'something went wrong'}) 
    }

    
} 

export const deleteUsers = async (req,res) => {
  try {
      //devuelve un result que en vez de insertID, ahora tiene valor en affected row
    const [result] =  await pool.query('DELETE FROM users where id = ?', [req.params.id]) // en [result], agarra el result del arreglo que recibe
    if(result.affectedRows <= 0) return res.status(404).json({message: 'User not found'})
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message:'something went wrong'})   
  }


} 