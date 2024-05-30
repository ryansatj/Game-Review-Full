const pool = require("./_pool.js");

getAllReview = async(req, res) => {
    try{
        const result = await pool.query(
            `SELECT Games.*, Users.username
            FROM Games
            INNER JOIN Users ON Games.userid = Users.id;
            `
        );
        res.status(200).json(result.rows);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

makeReview = async(req, res) =>{
    try{
        const{userid, name, description, resources, review, rating} = req.body;
        const result = await pool.query(
            `INSERT INTO GAMES (userid, name, description, resources, review, rating)
            VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
            [userid, name, description, resources, review, rating]
        );
        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

deleteReview = async(req, res) =>{
    try{
        const{id} = req.body;
        const result = await pool.query(
            `DELETE FROM GAMES WHERE id = $1 RETURNING *`,
            [id]
        );
        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

updateReview = async(req, res) =>{
    try{
        const{id} = req.params;
        const{review, rating} = req.body;
        const result = await pool.query(
            `UPDATE Games
            SET review = $1, rating = $2
            WHERE id = $3 RETURNING *`,
            [review, rating, id]
        );
        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports = {
    getAllReview,
    makeReview,
    deleteReview,
    updateReview
}