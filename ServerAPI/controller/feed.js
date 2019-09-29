exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{_id: '1', title: 'First post', content: "First post content", creator: {name: 'Hadi'}, imageUrl: 'images/laptop.jpg', createdAt: new Date().toISOString()}]
    });
};

exports.createPost = (req, res, next) => {
    //get the attributes from the request body
    const title = req.body.title;
    const content = req.body.content;
    //create post in the db
    res.status(201).json({
        message: 'Post Created successfully!',
        post: {_id: new Date().toISOString(), title: title, content: content, creator: {name: 'Hadi'}, createdAt: new Date()}
    });
};
