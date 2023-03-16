import Post from '../models/Post.js'


export const getPosts = async (req, res) => {
    try{
       const posts = await Post.find()
        res.send(posts)
    } catch(err){
        console.error(error.message);
        return res.satatus(500).json({message: err.message});
    }
}
   

    export const getPost = async (req, res) => {
        try{
            const post = await Post.findById(req.params.id);
        if (!post) return res.sendStatus(404);
        return res.json(post);
        } catch(err){
            return res.satatus(500).json({message: err.message});
        }
    };