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
        console.log(tr.length)

        for (let i = 0; i < responseData.length; i++) {

            let tr = document.createElement('tr')
            table.appendChild(tr)
            for (let j = 0; j < 3; j++) {
                let td = document.createElement('td')
                td.setAttribute('class', j)
                tr.appendChild(td)
                td.textContent = responseData[j].name
            }



            // let tr = document.createElement('tr')
            // table.appendChild(tr)
            // let td = document.createElement('td')
            // tr.appendChild(td)
            // td.textContent = responseData[i].name

            // console.log(responseData[i].name)
        }
        // for (let i = 0; i < responseData.length; i++) {
        //     //Add the data row.
        //     let row = table.insertRow(-1);

        //     //Add the data cells.
        //     cell = row.insertCell(-1);
        //     cell.innerHTML = responseData[i].name;
        // }
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', render);

    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();

}

getUsers();