function getUsers() {
    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);
        console.log(responseData);

        let table = document.createElement('table')
        table.setAttribute('class', 'table-wraper')

        let tr = document.createElement('tr')

        table.appendChild(tr)

        let th = document.createElement('th')
        th.setAttribute('colspan', '3')
        th.textContent = "მომხმარებლები"
        tr.appendChild(th)

        let tableSection = document.querySelector(".user-table").appendChild(table)

        for (var i = 0; i < 4; i++) {
            var row = document.createElement("tr");

            for (var j = 0; j < 3; j++) {
                var cell = document.createElement("td");

                var index = i * 3 + j;
                if (index < responseData.length) {
                    cell.textContent = responseData[index].name;
                    var btn = document.createElement('button')
                    cell.appendChild(btn)
                    btn.textContent = "დეტალურად"
                    btn.classList.add('details-btn', [index])
                } else {
                    cell.textContent = "";
                }
                row.appendChild(cell);

            }

            table.appendChild(row);
        }

        function renderPosts() {
            let response = this.responseText;
            let responseData = JSON.parse(response);
            console.log(responseData);
        }
    
        let requestPosts = new XMLHttpRequest();
    
        requestPosts.addEventListener('load', renderPosts);
    
        requestPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        requestPosts.send();
    }

    let requestUsers = new XMLHttpRequest();

    requestUsers.addEventListener('load', render);

    requestUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
    requestUsers.send();

}

getUsers();
