class Views {
    static async users() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return `
            <div class="content-wrapper">
                <h2>Users Management</h2>
                <div class="crud-filters">
                    <input type="text" placeholder="Search users..." id="userSearch">
                    <button onclick="exportToCsv('users')" class="btn btn-primary">Export CSV</button>
                </div>
                <table class="crud-table">
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
                                <td class="crud-actions">
                                    <button onclick="viewDetails('user', ${user.id})" class="btn btn-primary">Details</button>
                                    <button onclick="deleteItem('user', ${user.id})" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    static async products() {
        const products = [
            { id: 1, name: "Product 1", price: 99.99, stock: 50 },
            { id: 2, name: "Product 2", price: 149.99, stock: 30 },
            // Simulé car pas d'API produits dans jsonplaceholder
        ];
        return `
            <div class="content-wrapper">
                <h2>Products Management</h2>
                <div class="crud-filters">
                    <input type="text" placeholder="Search products..." id="productSearch">
                    <button onclick="exportToCsv('products')" class="btn btn-primary">Export CSV</button>
                </div>
                <table class="crud-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${products.map(product => `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.name}</td>
                                <td>$${product.price}</td>
                                <td>${product.stock}</td>
                                <td class="crud-actions">
                                    <button onclick="viewDetails('product', ${product.id})" class="btn btn-primary">Details</button>
                                    <button onclick="deleteItem('product', ${product.id})" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    static async orders() {
        const orders = [
            { id: 1, customer: "John Doe", total: 299.99, status: "Pending" },
            { id: 2, customer: "Jane Smith", total: 199.99, status: "Completed" },
            // Simulé car pas d'API orders dans jsonplaceholder
        ];
        return `
            <div class="content-wrapper">
                <h2>Orders Management</h2>
                <div class="crud-filters">
                    <input type="text" placeholder="Search orders..." id="orderSearch">
                    <select id="statusFilter">
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onclick="exportToCsv('orders')" class="btn btn-primary">Export CSV</button>
                </div>
                <table class="crud-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orders.map(order => `
                            <tr>
                                <td>${order.id}</td>
                                <td>${order.customer}</td>
                                <td>$${order.total}</td>
                                <td>${order.status}</td>
                                <td class="crud-actions">
                                    <button onclick="viewDetails('order', ${order.id})" class="btn btn-primary">Details</button>
                                    <button onclick="deleteItem('order', ${order.id})" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
