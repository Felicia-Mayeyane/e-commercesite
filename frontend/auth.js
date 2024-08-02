document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                
                if (response.ok) {
                    const { token } = await response.json();
                    localStorage.setItem('token', token);
                    window.location.href = '/products.html'; // Redirect after successful login
                } else {
                    console.error('Login error:', await response.json());
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;

            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    window.location.href = '/login.html'; // Redirect after successful registration
                } else {
                    console.error('Registration error:', await response.json());
                }
            } catch (error) {
                console.error('Error during registration:', error);
            }
        });
    }
});
