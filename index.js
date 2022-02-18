/* list of participants */
fetch('people.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var mainContainer = document.getElementById("peopleData");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = data[i].name + ', ' + data[i].organization + ', ';

            var link = document.createElement("a");
            link.innerText = '@' + data[i].github;
            link.href = 'https://github.com/' + data[i].github;
            div.appendChild(link);
            mainContainer.appendChild(div);
        }
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });