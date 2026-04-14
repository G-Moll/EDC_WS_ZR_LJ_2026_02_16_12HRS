let postsData = [
    { id: 1,
        title: "Desarrollo FullStack",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { id: 2,
        title: "Desarrollo FrontEnd",
        content: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam." },
    { id: 3,
        title: "Desarrollo BackEnd",
        content: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
    { id: 4,
        title: "Desarrollo Mobile",
        content: "Consequat. Duis aute irure dolor in reprehenderit voluptate velit esse." },
    { id: 5,
        title: "Desarrollo Standalone",
        content: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint cupidatat non." },
    { id: 6,
        title: "Desarrollo Hybrid",
        content: "Proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 7,
        title: "Desarrollo Web",
        content: "Duis, ullamco laboris mollit anim id est laborum laboris magna est." }
];

exports.getPosts = ( request, response ) => {
    response.send({
        message: "Get All Posts Endpoint..!",
        data: postsData
    });
}

exports.getPost = ( request, response ) => {
    // console.log( postId, typeof postId );

    let postId = Number( request.params.id );
    let postData = postsData.find( post => post.id === postId );

    // let postId = request.params.id;
    // let postData = postsData.find( post => post.id == postId );

    response.send({
        message: "Get Single Post Endpoint..!",
        data: ! postData ? [] : [ postData ]
        // data: ! postData ? "Post no encontrado" : [ postData ]
    });
};


