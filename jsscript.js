document.addEventListener("DOMContentLoaded", function () {
    // Handle Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Login successful! Redirecting to dashboard...");
            window.location.href = "dashboard.html";
        });
    }

    // Handle Posting Announcements
    const announcementForm = document.getElementById("announcement-form");
    const announcementList = document.getElementById("announcement-list");

    if (announcementForm) {
        announcementForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let title = document.getElementById("title").value;
            let content = document.getElementById("content").value;
            let category = document.getElementById("category").value;

            let newAnnouncement = `
                <div class="announcement">
                    <h3>${title}</h3>
                    <p>${content}</p>
                    <small>Category: ${category}</small>
                </div>
            `;

            announcementList.innerHTML += newAnnouncement;

            // Clear form
            announcementForm.reset();
        });
    }
});
