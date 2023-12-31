function getUsers() {
    function render() {
        let response = this.responseText;
        var responseData = JSON.parse(response);
        console.log(responseData);

        let table = document.createElement('table')
        
        table.classList.add('table-wraper')

        let tr = document.createElement('tr')

        table.appendChild(tr)

        let th = document.createElement('th')
        th.classList.add('users-table-header')
        th.setAttribute('colspan', '3')
        th.textContent = "მომხმარებლები"
        tr.appendChild(th)

        document.querySelector(".user-table").appendChild(table)

        for (var i = 0; i < 4; i++) {
            var row = document.createElement("tr");

            for (var j = 0; j < 3; j++) {
                var cell = document.createElement("td");
                cell.classList.add('table-cell')
                const cellText = document.createElement('h3')
                cellText.classList.add('names-h3')
                cell.appendChild(cellText)

                var index = i * 3 + j;
                if (index < responseData.length) {
                    cellText.textContent = responseData[index].name;
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

        let buttons = document.querySelectorAll('.details-btn')
        buttons.forEach((item) => {
            item.addEventListener('click', function () {
                location.href = `accounts.html?userIndex=${+item.className[item.className.length - 1] + 1}`
            })
        })

        function renderPosts() {
            let response = this.responseText;
            let responseData2 = JSON.parse(response);
            console.log(responseData2);
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
