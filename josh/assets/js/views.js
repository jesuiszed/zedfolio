const Views = {
    async users() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        return `
            <div class="container">
                <h2>Users</h2>
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
                        ${users.map(user => `
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>
                                    <button onclick="app.viewDetails('user', ${user.id})" class="btn btn-sm btn-info">View</button>
                                    <button onclick="app.deleteItem('user', ${user.id})" class="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    async products() {
        return '<div class="container"><h2>Products</h2><p>Products list coming soon...</p></div>';
    },

    async orders() {
        return '<div class="container"><h2>Orders</h2><p>Orders list coming soon...</p></div>';
    }
};
