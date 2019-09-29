exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{id: '12345678', title: 'first post', content: 'This is the first post content', job: 'programmer'}]
    });
};

exports.createPost = (req, res, next) => {
    //get the attributes from the request body
    const title = req.body.title;
    const content = req.body.content;
    const job = req.body.job;
    //create post in the db
    res.stauts(201).json({
        message: 'Post Created successfully!',
        post: {_id: new Date().toISOString(), title: title, content: content, job: job, creator:{name: name}, imageUrl: 'images/duck.jpg'}
    });
};
