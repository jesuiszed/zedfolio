export const ProductsView = {
    async render() {
        return `
            <div class="container">
                <h2>${i18n.get('products')}</h2>
                <div class="crud-filters">
                    <input type="text" class="form-control" placeholder="Search products...">
                    <select class="form-control">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Clothing</option>
                    </select>
                </div>
                <table class="table">
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
                        <!-- Sample product data -->
                        <tr>
                            <td>1</td>
                            <td>Sample Product</td>
                            <td>$99.99</td>
                            <td>50</td>
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
