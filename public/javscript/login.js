function showSignUpCard(event) {
  event.preventDefault();
  document.location.replace('/signup');
}

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  console.log(email);
  console.log(password);

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/calandar');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signInButton')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.createAnAccountBtn')
  .addEventListener('click', showSignUpCard);