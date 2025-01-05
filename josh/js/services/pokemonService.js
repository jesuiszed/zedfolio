const BASE_URL = 'https://pokeapi.co/api/v2';

const pokemonService = {
    async getPokemonList(offset = 0, limit = 20) {
        const response = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
        return response.json();
    },

    async getPokemonByName(name) {
        const response = await fetch(`${BASE_URL}/pokemon/${name}`);
        return response.json();
    },

    async getPokemonById(id) {
        const response = await fetch(`${BASE_URL}/pokemon/${id}`);
        return response.json();
    },

    async getAllTypes() {
        const response = await fetch(`${BASE_URL}/type`);
        const data = await response.json();
        return data.results;
    },

    async searchPokemon(query) {
        const response = await fetch(`${BASE_URL}/pokemon?limit=1000`);
        const data = await response.json();
        return data.results.filter(pokemon => 
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
    },

    getStatColor(statValue) {
        if (statValue >= 100) return 'bg-green-500';
        if (statValue >= 70) return 'bg-blue-500';
        if (statValue >= 50) return 'bg-yellow-500';
        return 'bg-red-500';
    },

    getTypeColor(type) {
        const colors = {
            normal: 'bg-gray-400',
            fire: 'bg-red-500',
            water: 'bg-blue-500',
            electric: 'bg-yellow-400',
            grass: 'bg-green-500',
            ice: 'bg-blue-200',
            fighting: 'bg-red-700',
            poison: 'bg-purple-500',
            ground: 'bg-yellow-600',
            flying: 'bg-indigo-400',
            psychic: 'bg-pink-500',
            bug: 'bg-green-400',
            rock: 'bg-yellow-800',
            ghost: 'bg-purple-700',
            dragon: 'bg-indigo-700',
            dark: 'bg-gray-700',
            steel: 'bg-gray-500',
            fairy: 'bg-pink-300'
        };
        return colors[type] || 'bg-gray-400';
    },

    // CRUD Operations avec localStorage
    getLocalPokemons() {
        return JSON.parse(localStorage.getItem('customPokemons') || '[]');
    },

    saveLocalPokemon(pokemon) {
        const pokemons = this.getLocalPokemons();
        const newPokemon = {
            ...pokemon,
            id: Date.now(),
            createdAt: new Date().toISOString()
        };
        pokemons.push(newPokemon);
        localStorage.setItem('customPokemons', JSON.stringify(pokemons));
        return newPokemon;
    },

    updateLocalPokemon(id, updates) {
        const pokemons = this.getLocalPokemons();
        const index = pokemons.findIndex(p => p.id === id);
        if (index !== -1) {
            pokemons[index] = { ...pokemons[index], ...updates };
            localStorage.setItem('customPokemons', JSON.stringify(pokemons));
            return pokemons[index];
        }
        return null;
    },

    deleteLocalPokemon(id) {
        const pokemons = this.getLocalPokemons();
        const filtered = pokemons.filter(p => p.id !== id);
        localStorage.setItem('customPokemons', JSON.stringify(filtered));
    },

    // Export functions
    exportToCSV(pokemons) {
        const headers = ['id', 'name', 'types', 'stats'];
        const csvContent = [
            headers.join(','),
            ...pokemons.map(p => [
                p.id,
                p.name,
                p.types.map(t => t.type.name).join(';'),
                p.stats.map(s => `${s.stat.name}:${s.base_stat}`).join(';')
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pokemons.csv';
        a.click();
    },

    async exportToPDF(pokemon) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.text(`Pokemon: ${pokemon.name}`, 20, 20);
        doc.text(`ID: ${pokemon.id}`, 20, 30);
        doc.text('Types:', 20, 40);
        pokemon.types.forEach((type, i) => {
            doc.text(`- ${type.type.name}`, 30, 50 + (i * 10));
        });
        
        doc.save(`pokemon-${pokemon.name}.pdf`);
    }
};
