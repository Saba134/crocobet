function getUsers() {
    function render() {
        let response = this.responseText;
        var responseData = JSON.parse(response);
        console.log(responseData);

        const currentURL = window.location.href;
        const index = currentURL.indexOf('=');
        const URLnumber = currentURL.slice(index + 1);
        console.log(URLnumber)

        const container = document.querySelector(".info-container");
        const ul = document.createElement("ul");
        ul.classList.add('users-ul')

        function iterateObject(obj, parentKey = "") {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];
                    const currentKey = parentKey ? `${parentKey}.${key}` : key;

                    if (typeof value === "object" && value !== null) {
                        iterateObject(value, currentKey);
                    } else {
                        const index = currentKey.indexOf('.');
                        const result = currentKey.slice(index + 1);
                        const finalIndex = result.indexOf('.');
                        const finalResult = result.slice(finalIndex + 1);
                        const li = document.createElement('li')
                        const keySpan = document.createElement('span')
                        const valueSpan = document.createElement('span')
                        keySpan.textContent = finalResult
                        valueSpan.textContent = value
                        keySpan.classList.add('keySpan')
                        valueSpan.classList.add('valueSpan')
                        li.appendChild(keySpan)
                        li.appendChild(valueSpan)
                        ul.appendChild(li)
                    }
                }
            }
        }
        iterateObject(responseData[URLnumber - 1]);


        container.appendChild(ul)

        console.log(responseData[2])

    }

    let requestUsers = new XMLHttpRequest();
    requestUsers.addEventListener('load', render);
    requestUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
    requestUsers.send();

}


getUsers();

