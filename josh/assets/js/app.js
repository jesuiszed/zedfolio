class App {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        this.checkAuth();
        this.initializeRouter();  // Initialize router when app starts
        this.setupEventListeners();  // Add this new method call
    }

    setupEventListeners() {
        // Délégation d'événements pour les liens de navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-route]');
            if (link) {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                this.router.navigate(route);
            }
        });
    }

    checkAuth() {
        const user = localStorage.getItem('user');
        if (user) {
            this.currentUser = JSON.parse(user);
            this.showDashboard();
        } else {
            this.showLogin();
        }
    }

    showLogin() {
        document.getElementById('app').innerHTML = `
            <div class="login-container">
                <form class="login-form" id="loginForm">
                    <h2 class="text-center mb-4">MyManager Login</h2>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="username" placeholder="Username" required>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                </form>
            </div>
        `;

        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            const user = { username, role: 'admin' };
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUser = user;
            this.showDashboard();
        } else {
            alert('Invalid credentials');
        }
    }

    async initializeRouter() {
        const routes = {
            '/dashboard': () => {
                document.querySelector('main').innerHTML = `
                    ${this.renderDashboardStats()}
                    ${this.renderDashboardCharts()}
                `;
                this.initializeCharts();
            },
            '/users': async () => {
                const content = await Views.users();
                document.querySelector('main').innerHTML = content;
            },
            '/products': async () => {
                const content = await Views.products();
                document.querySelector('main').innerHTML = content;
            },
            '/orders': async () => {
                const content = await Views.orders();
                document.querySelector('main').innerHTML = content;
            },
            '/404': () => {
                document.querySelector('main').innerHTML = '<h2>Page not found</h2>';
            }
        };

        this.router = new Router(routes);
        this.router.init();
    }

    showDashboard() {
        const content = `
            <nav class="navbar">
                <img src="assets/img/logo.png" alt="Logo" class="navbar-logo">
                <div class="navbar-actions">
                    <select class="lang-dropdown" onchange="window.i18n.setLanguage(this.value)">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="ar">العربية</option>
                    </select>
                    <button onclick="app.logout()" class="btn">${window.i18n.get('logout')}</button>
                </div>
            </nav>
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li><a href="#" data-route="/dashboard">${window.i18n.get('dashboard')}</a></li>
                    <li><a href="#" data-route="/users">${window.i18n.get('users')}</a></li>
                    <li><a href="#" data-route="/products">${window.i18n.get('products')}</a></li>
                    <li><a href="#" data-route="/orders">${window.i18n.get('orders')}</a></li>
                </ul>
            </div>
            <main class="dashboard">
                ${this.renderDashboardStats()}
                ${this.renderDashboardCharts()}
            </main>
        `;
        
        document.getElementById('app').innerHTML = content;
        this.router.navigate('/dashboard'); // Navigate to dashboard by default
    }

    renderDashboardStats() {
        return `
            <div class="stat-card">
                <h3>Total Users</h3>
                <span>1,234</span>
            </div>
            <!-- Add more stat cards -->
        `;
    }

    renderDashboardCharts() {
        return `
            <div class="chart-container">
                <canvas id="salesChart"></canvas>
            </div>
            <!-- Add more charts -->
        `;
    }

    initializeCharts() {
        const ctx = document.getElementById('salesChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Sales',
                    data: [12, 19, 3, 5, 2]
                }]
            }
        });
    }

    async viewDetails(type, id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${type}s/${id}`);
        const item = await response.json();
        // Afficher les détails dans une modal
        // À implémenter selon vos besoins
    }

    deleteItem(type, id) {
        if (confirm(`Are you sure you want to delete this ${type}?`)) {
            fetch(`https://jsonplaceholder.typicode.com/${type}s/${id}`, {
                method: 'DELETE'
            }).then(() => {
                // Rafraîchir la vue
                this.router.handleRoute();
            });
        }
    }

    logout() {
        localStorage.removeItem('user');
        this.showLogin();
    }
}

// Class Router definition (add this if not already present)
class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = '';
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    handleRoute() {
        let path = window.location.hash.slice(1) || '/dashboard';
        // Nettoyer l'URL si nécessaire
        path = path.split('?')[0];
        
        if (this.routes[path]) {
            this.currentRoute = path;
            this.routes[path]();
        } else {
            this.routes['/404']();
        }
    }

    navigate(path) {
        window.location.hash = path;
    }
}

// Initialize the application
const app = new App();