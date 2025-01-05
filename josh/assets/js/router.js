class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPath = '';
        
        window.addEventListener('popstate', () => this.handleRoute());
        
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-route]')) {
                e.preventDefault();
                this.navigate(e.target.getAttribute('data-route'));
            }
        });
    }

    navigate(path) {
        window.history.pushState(null, '', path);
        this.handleRoute();
    }

    handleRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['/404'];
        route();
    }
}

export default Router;
