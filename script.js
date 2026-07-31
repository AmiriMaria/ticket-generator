// ---------------- LOGIN PAGE ----------------

const button = document.getElementById("generate-tick");

if (button) {

    const avatar = document.getElementById("avatar");

    button.addEventListener("click", function (event) {

        event.preventDefault();

        // Get the values
        const name = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const github = document.getElementById("gitHub").value;

        // Check email
        if (!checkEmail()) {
            return;
        }

        // Check if an avatar was selected
        if (avatar.files.length === 0) {

            document.getElementById("alerta").innerHTML =
                "Please upload an avatar.";

            document.getElementById("alerta").style.display = "block";

            return;
        }

        const file = avatar.files[0];

        // Check avatar size
        if (!checkAvatarFile(file)) {
            return;
        }

        // Save data
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("github", github);

        // Save avatar
        const reader = new FileReader();

        reader.onload = function () {

            localStorage.setItem("avatar", reader.result);

            window.location.href = "ticket.html";
        };

        reader.readAsDataURL(file);

    });

}

// ---------------- FUNCTIONS ----------------

function checkAvatarFile(file) {

    const maxSize = 500 * 1024;

    if (file.size > maxSize) {

        document.getElementById("alerta").innerHTML =
            "File too large. Please upload a photo under 500 KB.";

        document.getElementById("alerta").style.display = "block";
        document.getElementById("alerta").style.color = "red";

        document.getElementById("avatar").value = "";

        return false;
    }

    document.getElementById("alerta").innerHTML = "";
    document.getElementById("alerta").style.display = "none";

    return true;
}

function checkEmail() {

    const email = document.getElementById("email");

    if (!email.checkValidity()) {

        document.getElementById("alerte").innerHTML =
            "Please enter a valid email address.";

        document.getElementById("alerte").style.display = "block";
        document.getElementById("alerte").style.color = "red";

        return false;
    }

    document.getElementById("alerte").innerHTML = "";
    document.getElementById("alerte").style.display = "none";

    return true;
}

// ---------------- TICKET PAGE ----------------

if (document.getElementById("ticket-page")) {

    document.getElementById("user-name").textContent =
        localStorage.getItem("name");

    document.getElementById("user-email").textContent =
        localStorage.getItem("email");

    document.getElementById("ticket-name").textContent =
        localStorage.getItem("name");

    document.getElementById("user-github").textContent =
        localStorage.getItem("github");

    document.getElementById("user-picture").src =
        localStorage.getItem("avatar");
}       localStorage.getItem("avatar");


