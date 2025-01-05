const i18n = {
    currentLang: 'en',
    translations: {
        en: {
            dashboard: 'Dashboard',
            users: 'Users',
            products: 'Products',
            orders: 'Orders',
            logout: 'Logout'
        },
        fr: {
            dashboard: 'Tableau de bord',
            users: 'Utilisateurs',
            products: 'Produits',
            orders: 'Commandes',
            logout: 'Déconnexion'
        },
        ar: {
            dashboard: 'لوحة القيادة',
            users: 'المستخدمون',
            products: 'المنتجات',
            orders: 'الطلبات',
            logout: 'تسجيل خروج'
        }
    },

    get(key) {
        return this.translations[this.currentLang][key] || key;
    },

    setLanguage(lang) {
        this.currentLang = lang;
        // Refresh the current view
        if (window.app) {
            window.app.router.handleRoute();
        }
    }
};

window.i18n = i18n;
export default i18n;
