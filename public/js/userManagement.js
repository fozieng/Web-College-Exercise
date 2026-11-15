// User management page: greets the logged-in user and lists all users (no passwords).

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Only a logged-in admin may view this page.
if (!loggedInUser || loggedInUser.role !== 'admin') {
  window.location.href = 'login.html';
} else {
  document.getElementById('greeting').textContent = `Welcome ${loggedInUser.name}`;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const tbody = document.getElementById('usersBody');

  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.className = 'border-t border-gray-200';

    // Build cells with textContent so user input is never parsed as HTML.
    [index + 1, user.name, user.email, user.role].forEach((value) => {
      const cell = document.createElement('td');
      cell.className = 'px-4 py-2';
      cell.textContent = value;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });
}
