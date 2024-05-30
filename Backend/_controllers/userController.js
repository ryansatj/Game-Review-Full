const pool = require("./_pool.js");

signUp = async(req, res) =>{
    const{name, email, password, username} = req.body;
    try{
        const result = await pool.query(
            `INSERT INTO USERS (username, name, email, password)
            VALUES($1, $2, $3, $4) RETURNING *`,
            [username, name, email, password]
        );
        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
        
    }
}

login = async(req, res) => {
    const{username, password} = req.body;
    try{
        const result = await pool.query(
            `SELECT * FROM USERS WHERE username = $1 AND password = $2`,
            [username, password]
        );
        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

getUserbyId = async(req, res) => {
    const{id} = req.body;
    try{
        const result = await pool.query(
            `SELECT * FROM USERS WHERE id = $1`,
            [id]
        );
        res.status(200).json(result.rows[0]); 
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports = {
    signUp,
    login,
    getUserbyId
};