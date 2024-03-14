document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (confirmPassword.value !== '1234') {
            confirmPassword.setCustomValidity("Passwords don't match");
        } else {
            confirmPassword.setCustomValidity('');
            window.location.href = '../website/index.html';
        }
    });
});
