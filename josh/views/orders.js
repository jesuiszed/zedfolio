export const OrdersView = {
    async render() {
        return `
            <div class="container">
                <h2>${i18n.get('orders')}</h2>
                <div class="crud-filters">
                    <input type="text" class="form-control" placeholder="Search orders...">
                    <select class="form-control">
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                    </select>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Sample order data -->
                        <tr>
                            <td>#12345</td>
                            <td>John Doe</td>
                            <td>2023-05-20</td>
                            <td>Pending</td>
                            <td>$299.99</td>
                            <td>
                                <button class="btn btn-sm btn-info">View</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
};
