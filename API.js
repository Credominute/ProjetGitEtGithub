document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getJoke").addEventListener("click", function() {
        const request = new XMLHttpRequest();
        request.open("GET", "https://official-joke-api.appspot.com/random_joke", true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 300) {
                let response_from_server = JSON.parse(request.responseText);
                document.getElementById("question").innerHTML = response_from_server.setup;
                document.getElementById("punchline").innerHTML = response_from_server.punchline;
            } else {
                document.getElementById("question").innerHTML = "Erreur lors de la récupération de la blague.";
            }
        };

        request.onerror = function() {
            document.getElementById("question").innerHTML = "Problème de connexion.";
        };

        request.send();
    });
});
