// ==========================
// Check JWT Token
// ==========================

const token = localStorage.getItem("token");

if (!token) {
    alert("Please login first!");
    window.location.href = "login.html";
}

// ==========================
// Load Logged In User
// ==========================

const user = JSON.parse(localStorage.getItem("user"));

if (user) {

    document.getElementById("welcomeName").textContent = user.name;

    document.getElementById("userName").textContent = user.name;

    document.getElementById("userEmail").textContent = user.email;

    document.getElementById("userAvatar").textContent =
        user.name.charAt(0).toUpperCase();

}

// ==========================
// Load Dashboard Data
// ==========================

function loadDashboardData() {

    const results =
        JSON.parse(localStorage.getItem("quizResults")) || [];

    if (results.length > 0) {

        const totalQuizzes = results.length;

        const avgScore = Math.round(
            results.reduce((sum, r) => sum + r.percent, 0) /
            totalQuizzes
        );

        document.getElementById("quizzesTaken").textContent =
            totalQuizzes;

        document.getElementById("averageScore").textContent =
            avgScore + "%";

        document.getElementById("overallScore").textContent =
            avgScore + "%";

        const domainScores = {};

        results.forEach((r) => {

            if (!domainScores[r.domain]) {

                domainScores[r.domain] = [];

            }

            domainScores[r.domain].push(r.percent);

        });

        if (domainScores["coding"]) {

            const codingAvg = Math.round(

                domainScores["coding"].reduce(
                    (a, b) => a + b,
                    0
                ) / domainScores["coding"].length

            );

            document.getElementById(
                "codingPercent"
            ).textContent = codingAvg + "%";

            document.getElementById(
                "codingProgress"
            ).style.width = codingAvg + "%";

        }

        if (domainScores["design"]) {

            const designAvg = Math.round(

                domainScores["design"].reduce(
                    (a, b) => a + b,
                    0
                ) / domainScores["design"].length

            );

            document.getElementById(
                "designPercent"
            ).textContent = designAvg + "%";

            document.getElementById(
                "designProgress"
            ).style.width = designAvg + "%";

        }

        if (domainScores["communication"]) {

            const commAvg = Math.round(

                domainScores["communication"].reduce(
                    (a, b) => a + b,
                    0
                ) / domainScores["communication"].length

            );

            document.getElementById(
                "commPercent"
            ).textContent = commAvg + "%";

            document.getElementById(
                "commProgress"
            ).style.width = commAvg + "%";

        }

    }

}

loadDashboardData();

// ==========================
// Logout
// ==========================

function logout() {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    alert("Logged out successfully!");

    window.location.href = "login.html";

}

// ==========================
// Sidebar
// ==========================

function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList.toggle("active");

}