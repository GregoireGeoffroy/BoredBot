document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent = `"${data.activity}"`;
            document.getElementById("title").textContent = "😊 HappyBot 😊";
            document.querySelector("main").classList.add("fun");
        })
        .catch(error => {
            document.getElementById("activity").textContent = "Oops! Something went wrong. Please try again.";
            console.error('Error fetching activity:', error);
        });
});
