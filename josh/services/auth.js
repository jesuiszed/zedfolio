export class AuthService {
    constructor() {
        this.currentUser = null;
    }

    getCurrentUser() {
        if (!this.currentUser) {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                this.currentUser = JSON.parse(storedUser);
            }
        }
        return this.currentUser;
    }

    login(username, password) {
        // Simulate API call - replace with real API call later
        return new Promise((resolve, reject) => {
            if (username === 'admin' && password === 'admin') {
                const user = { username, role: 'admin' };
                localStorage.setItem('user', JSON.stringify(user));
                this.currentUser = user;
                resolve(user);
            } else {
                reject(new Error('Invalid credentials'));
            }
        });
    }

    logout() {
        localStorage.removeItem('user');
        this.currentUser = null;
        // Nettoyer également le hash de l'URL
        window.location.hash = '';
        return Promise.resolve();
    }

    isAuthenticated() {
        return this.getCurrentUser() !== null;
    }
}
