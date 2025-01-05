export const UsersView = {
    async render() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        return `
            <div class="container">
                <h2>${i18n.get('users')}</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(user => this.renderUserRow(user)).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    renderUserRow(user) {
        return `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="app.viewDetails('user', ${user.id})" class="btn btn-sm btn-info">View</button>
                    <button onclick="app.deleteItem('user', ${user.id})" class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
    }
};
