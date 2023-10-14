document.addEventListener("DOMContentLoaded", function () {
    const challenges = document.querySelectorAll('.challenges-list li');

    challenges.forEach(challenge => {
        challenge.addEventListener('click', () => {
            challenge.classList.toggle('completed');
        });
    });
});
