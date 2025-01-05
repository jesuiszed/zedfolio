export class LoginView {
    constructor(authService, onLoginSuccess) {
        this.authService = authService;
        this.onLoginSuccess = onLoginSuccess;
    }

    render() {
        return `
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
    }

    init() {
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                await this.authService.login(username, password);
                this.onLoginSuccess();
            } catch (error) {
                alert(error.message);
            }
        });
    }
}
