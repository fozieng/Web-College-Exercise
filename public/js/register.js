// Registration logic: users are stored in localStorage under the "users" key.

function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

const form = document.getElementById('registerForm');
const message = document.getElementById('message');

function showMessage(text, isError) {
  message.textContent = text;
  message.className = 'mt-4 text-sm text-center ' + (isError ? 'text-red-600' : 'text-green-600');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim().toLowerCase();
  const password = form.password.value;
  const confirm = form.confirm.value;

  if (password !== confirm) {
    showMessage('Passwords do not match.', true);
    return;
  }

  const users = getUsers();

  if (users.some((user) => user.email === email)) {
    showMessage('A user with this email already exists.', true);
    return;
  }

  // Task A: the first registered user is the admin, everyone after is a regular user.
  const role = users.length === 0 ? 'admin' : 'user';

  users.push({ name, email, password, role }); 
  localStorage.setItem('users', JSON.stringify(users));

  showMessage(`Registered as ${role}. Redirecting to login...`, false);
  form.reset();
  setTimeout(() => { window.location.href = 'login.html'; }, 1200);
});
