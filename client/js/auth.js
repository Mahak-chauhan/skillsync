const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let isValid = true;

        // Email Validation
        if (!validateEmail(email)) {

            document.getElementById("emailError").textContent =
                "Please enter a valid email";

            isValid = false;

        } else {

            document.getElementById("emailError").textContent = "";

        }

        // Password Validation
        if (password.length < 6) {

            document.getElementById("passwordError").textContent =
                "Password must be at least 6 characters";

            isValid = false;

        } else {

            document.getElementById("passwordError").textContent = "";

        }

        if (!isValid) return;

        try {

            const response = await fetch("http://localhost:5000/api/auth/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });

            const data = await response.json();

            if (response.ok) {

                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                alert("Login Successful!");

                window.location.href = "dashboard.html";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(error);
            alert("Server Error");

        }

    });

}

function validateEmail(email) {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(email);

}

function togglePassword() {

    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        eyeIcon.innerHTML =
            '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><line x1="1" y1="1" x2="23" y2="23"></line>';

    } else {

        passwordInput.type = "password";

        eyeIcon.innerHTML =
            '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';

    }

}

function socialLogin(provider) {

    alert(provider + " login is not implemented yet.");

}

function showRegister() {

    alert("Registration page will be connected next.");

}