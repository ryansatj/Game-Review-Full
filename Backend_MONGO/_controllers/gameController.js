const Game = require("../_models/gameModel");
const User = require("../_models/userModel");

const getAllReview = async (req, res) => {
    try {
        const result = await Game.aggregate([
            {
                $lookup: {
                    from: 'users', 
                    localField: 'userid', 
                    foreignField: '_id', 
                    as: 'userDetails' 
                }
            },
            {
                $unwind: '$userDetails' 
            },
            {
                $project: {
                    name: 1,
                    description: 1,
                    resources: 1,
                    review: 1,
                    rating: 1,
                    username: '$userDetails.username' 
                }
            }
        ]);

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};


makeReview = async(req, res) =>{
    try{
        const{userid, name, description, resources, review, rating} = req.body;
        const game = new Game ({
            userid,
            name,
            description,
            resources,
            review,
            rating,
        })
        await game.save();
        res.status(201).json(game);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await Game.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};


const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { review, rating } = req.body;
        const result = await Game.findByIdAndUpdate(
            id,
            { review, rating },
            { new: true } 
        );
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};


module.exports = {
    getAllReview,
    makeReview,
    deleteReview,
    updateReview
}