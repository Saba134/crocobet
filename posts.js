function getPosts() {
    function renderPosts() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        const currentURL = window.location.href;
        const index = currentURL.indexOf('=');
        const URLnumber = currentURL.slice(index + 1);

        console.log(responseData)

        const postsContainer = document.querySelector('.posts-container')

        responseData.forEach(element => {
            if(element.userId == URLnumber){
                const cards = document.createElement('div')
                const title = document.createElement('h2')
                const post = document.createElement('p')
                cards.classList.add('cards-div')
                title.classList.add('cards-h2')
                post.classList.add('cards-p')

                title.textContent = element.title
                post.textContent = element.body

                postsContainer.appendChild(cards)
                cards.appendChild(title)
                cards.appendChild(post)

            }
        });
    }

    let requestPosts = new XMLHttpRequest();

    requestPosts.addEventListener('load', renderPosts);

    requestPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    requestPosts.send();
}

getPosts()