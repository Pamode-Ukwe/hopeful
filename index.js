// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function updateTimeAndDay() {
    const now = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDay = days[now.getUTCDay()]
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getUTCMinutes().toString().padStart(2, '0')
    const seconds = now.getUTCSeconds().toString().padStart(2, '0')
    const currentTime = `${hours} : ${minutes} : ${seconds} UTC`
    document.getElementById('day').textContent =`${currentDay}`
    document.getElementById('time').textContent =`${currentTime}`
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000)
console.log(new Date())
