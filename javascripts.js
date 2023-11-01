const blogs = [
    {
        id: 1,
        title: "Essential Of JavaScript",
        img: "https://assets.iorbex.com/blog/wp-content/uploads/2019/08/04143047/demo-account.png",
        authorName: "Alina Adhikari",
        createdDate: "2023-09-01T20:23:05Z",
        readBy: 200,
        commentsNo: 50,
        status: "Published"
    },
    {
        id: 2,
        title: "How To Get Start With React",
        img: "https://assets.iorbex.com/blog/wp-content/uploads/2019/08/04143047/demo-account.png",
        authorName: "Ram shrestha",
        createdDate: "2023-10-10T12:15:10Z",
        readBy: 180,
        commentsNo: 25,
        status: "Archived"
    },
];
function blogPosts(blog){
    const blogDiv = document.getElementById('container');

    const blogContainer = document.createElement('div')
    blogContainer.className = 'blog-container'

    const blogPost = document.createElement('div');
    blogPost.className = 'blog_post';

    const blogDetail =document.createElement('div')
    blogDetail.className = 'blog-detail'

    const title = document.createElement('h2')
    title.textContent = blog.title

    const image = document.createElement('img')
    image.src = blog.img 
    image.alt = blog.title

    const authorName = document.createElement('p')
    authorName.textContent = `By: ${blog.authorName}`

    const createdDate = document.createElement('p')
    createdDate.textContent = `Added at: ${new Date(blog.createdDate).toLocaleDateString()}`

    const readBy = document.createElement('p')
    readBy.textContent = `Read By: ${blog.readBy} people`
    
    const commentsNo = document.createElement('p')
    commentsNo.textContent = `Recieved Comments: ${blog.commentsNo}`

    const status = document.createElement('p')
    status.textContent = `Status: ${blog.status}`

    const statusBtn = document.createElement('button')
    statusBtn.textContent = getStatusBtn(blog.status)
    // statusBtn.textContent = `Publish/Draft/Archived`
    statusBtn.onclick = () => checkStatus(blog)

    const commentBtn = document.createElement('button')
    commentBtn.textContent = 'Add Comment'
    commentBtn.onclick = () => addComment(blog)

    const readBtn = document.createElement('button')
    readBtn.textContent = 'Read It'
    readBtn.onclick = () => addViews(blog)

    blogPost.appendChild(title);
    blogPost.appendChild(image);
    blogPost.appendChild(statusBtn);
    blogPost.appendChild(commentBtn);
    blogPost.appendChild(readBtn);
    blogDetail.appendChild(authorName);
    blogDetail.appendChild(createdDate);
    blogDetail.appendChild(readBy);
    blogDetail.appendChild(commentsNo);
    blogDetail.appendChild(status);
    blogContainer.appendChild(blogPost);
    blogContainer.appendChild(blogDetail);
    blogDiv.appendChild(blogContainer);
}

function display() {
    const blogDiv = document.getElementById('container');
    blogDiv.innerHTML = '';
    blogs.forEach(blog => {
        blogPosts(blog);
    });
}

function getStatusBtn(status){
    switch(status) {
        case 'Published':
            return 'Archive';
        case 'Archived':
            return 'Draft';
        case 'Draft':
            return 'Publish';
    }
    display();

}

function checkStatus(blog){
    if (blog.status == 'Published'){
        blog.status = 'Archived'
    }
    else if (blog.status == 'Archived'){
        blog.status = 'Draft'
    }
    else{
        blog.status = 'Published'
    }
    display()
}

function addComment(blog){
    ++blog.commentsNo
    display()        
}

function addViews(blog){
    ++blog.readBy
    display()
}

display();
