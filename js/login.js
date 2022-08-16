const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function () {
    const emailField = document.getElementById('email')
    const email = emailField.value

    const passwordField = document.getElementById('password')
    const password = passwordField.value

    if (email === 'abc@gmail.com' && password === '12345') {
        location.href = 'anotherPage/bank.html'
    } else {
        alert('Invalid Email or Password')
    }


})