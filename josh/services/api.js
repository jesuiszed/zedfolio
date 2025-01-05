class ApiService {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    async fetchData(endpoint, options = {}) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, options);
        if (!response.ok) throw new Error('API request failed');
        return response.json();
    }

    async getUsers(page = 1, limit = 10) {
        return this.fetchData(`/users?_page=${page}&_limit=${limit}`);
    }

    async exportToCsv(data, filename) {
        const csvContent = this.convertToCSV(data);
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

    convertToCSV(data) {
        const headers = Object.keys(data[0]);
        const rows = data.map(obj => headers.map(header => obj[header]));
        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }
}

export const api = new ApiService();
