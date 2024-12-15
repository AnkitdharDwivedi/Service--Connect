const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('auth-form');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.querySelector('.toggle');

let isSignup = true;

toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isSignup = !isSignup;

    if (isSignup) {
        formTitle.textContent = 'Signup';
        authForm.innerHTML = `
            <label for="login-type">I am a:</label>
            <select id="login-type" name="login-type" required>
                <option value="service-provider">Service Provider</option>
                <option value="service-seeker">Service Seeker</option>
            </select>
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
            <button type="submit">Signup</button>
        `;
        toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login here</a>`;
    } else {
        formTitle.textContent = 'Login';
        authForm.innerHTML = `
               <label for="login-type">I am a:</label>
            <select id="login-type" name="login-type" required>
                <option value="service-provider">Service Provider</option>
                <option value="service-seeker">Service Seeker</option>
            </select>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
            <button type="submit">Login</button>
        `;
        toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Signup here</a>`;
    }

    // Reassign the toggle link's event listener
    const newToggleLink = document.getElementById('toggle-link');
    newToggleLink.addEventListener('click', toggleForm);
});

// Toggle form logic moved to a reusable function
function toggleForm(e) {
    e.preventDefault();
    isSignup = !isSignup;

    if (isSignup) {
        formTitle.textContent = 'Signup';
        authForm.innerHTML = `
            <label for="login-type">I am a:</label>
            <select id="login-type" name="login-type" required>
                <option value="service-provider">Service Provider</option>
                <option value="service-seeker">Service Seeker</option>
            </select>
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
            <button type="submit">Signup</button>
        `;
        toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login here</a>`;
    } else {
        formTitle.textContent = 'Login';
        authForm.innerHTML = `
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
            <button type="submit">Login</button>
        `;
        toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Signup here</a>`;
    }
}


