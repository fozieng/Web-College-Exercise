// Login logic: checks credentials against the "users" array in localStorage.

function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

const form = document.getElementById('loginForm');
const message = document.getElementById('message');

function showMessage(text, isError) {
  message.textContent = text;
  message.className = 'mt-4 text-sm text-center ' + (isError ? 'text-red-600' : 'text-green-600');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.email.value.trim().toLowerCase();
  const password = form.password.value;

  const user = getUsers().find((u) => u.email === email && u.password === password);

  if (!user) {
    showMessage('Incorrect email or password.', true);
    return;
  }

  // Task B: save the logged-in user's details (without the password).
  const { password: _omit, ...loggedInUser } = user;
  localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

  // Task D: admins go straight to the user management page.
  if (user.role === 'admin') {
    window.location.href = 'userManagement.html';
  } else {
    showMessage(`Welcome, ${user.name}! You are logged in.`, false);
  }
});
