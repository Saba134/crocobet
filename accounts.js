// function getPosts() {
//     function renderPosts() {
//         let response = this.responseText;
//         let responseData = JSON.parse(response);
//         console.log(responseData);
//     }
//     let buttons = document.querySelectorAll('.details-btn')
//     console.log(buttons)
//     buttons.forEach((item) => {
//         item.addEventListener('click', function () {
//             location.href = 'accounts.html'
//             console.log('lllaa')
//             // setTimeout(() => {
//             //     let body = document.querySelector('body')

//             // }, '2000');

//             // console.log(+item.className[12]+1)
//         })
//     })


//     let requestPosts = new XMLHttpRequest();

//     requestPosts.addEventListener('load', renderPosts);

//     requestPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//     requestPosts.send();
// }

// getPosts()

function getUsers() {
    function render() {
        let response = this.responseText;
        var responseData = JSON.parse(response);
        console.log(responseData);

        const currentURL = window.location.href;
        const URLnumber = currentURL[currentURL.length - 1]
        console.log(URLnumber)

        

        const container = document.querySelector(".info-container");
        const ul = document.createElement("ul");

        // console.log(responseData[currentURL].id)

        for (i = 0; i < responseData.length; i++) {
            // console.log(responseData[].name)
        }
        container.appendChild

        console.log(responseData[2])

    }

    let requestUsers = new XMLHttpRequest();
    requestUsers.addEventListener('load', render);
    requestUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
    requestUsers.send();

}


getUsers();

