document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const resultDiv = document.getElementById('result');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {
      user: username,
      password: password
    };

    try {
      const response = await fetch('https://command.my-company.com/axis/api/rest/businessGateway/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const result = await response.json();

      if (response.ok) {
        resultDiv.innerHTML = `<p>Login successful: ${result.sessionId}</p>`;
      } else {
        resultDiv.innerHTML = `<p>Login failed: ${result.status.message}</p>`;
      }
    } catch (error) {
      resultDiv.innerHTML = `<p>An error occurred: ${error.message}</p>`;
    }
  });
});
