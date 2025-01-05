export const DashboardView = {
    render() {
        return `
            <div class="dashboard">
                ${this.renderStats()}
                ${this.renderCharts()}
            </div>
        `;
    },

    renderStats() {
        return `
            <div class="stat-card">
                <h3>Total Users</h3>
                <span>1,234</span>
            </div>
            <div class="stat-card">
                <h3>Total Products</h3>
                <span>567</span>
            </div>
            <div class="stat-card">
                <h3>Total Orders</h3>
                <span>89</span>
            </div>
        `;
    },

    renderCharts() {
        return `
            <div class="chart-container">
                <canvas id="salesChart"></canvas>
            </div>
        `;
    },

    afterRender() {
        const ctx = document.getElementById('salesChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Sales',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: '#2c3e50'
                }]
            }
        });
    }
};
