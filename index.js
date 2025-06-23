 
    // const postList = document.getElementById('postlist');
    // const postForm = document.getElementById('postForm');

    // function loadPosts() {
    //   fetch('http://localhost:3000/posts')
    //     .then(response => response.json())
    //     .then(data => {
    //       postList.innerHTML = ''; // Clear list
    //       data.forEach(post => {
    //         const li = document.createElement('li');

    //         if (post.image) {
    //           const img = document.createElement('img');
    //           img.src = post.image;
    //           img.alt = post.title;
    //           img.className = 'post-image';
    //           li.appendChild(img);
    //         }

    //         const contentDiv = document.createElement('div');
    //         contentDiv.className = 'post-content';

    //         const title = document.createElement('div');
    //         title.className = 'post-title';
    //         title.textContent = post.title;

    //         const author = document.createElement('div');
    //         author.className = 'post-author';
    //         author.textContent = `by ${post.author}`;

    //         contentDiv.appendChild(title);
    //         contentDiv.appendChild(author);
    //         li.appendChild(contentDiv);

    //         postList.appendChild(li);
    //       });
    //     })
    //     .catch(error => console.error('Error loading posts:', error));
    // }

    // loadPosts();

    // postForm.addEventListener('submit', function (e) {
    //   e.preventDefault();

    //   const newPost = {
    //     title: document.getElementById('title').value,
    //     author: document.getElementById('author').value,
    //     image: document.getElementById('image').value
    //   };

    //   fetch('http://localhost:3000/posts', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newPost)
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('Post added:', data);
    //       loadPosts();
    //       postForm.reset();
    //     })
    //     .catch(error => console.error('Error adding post:', error));
    // });