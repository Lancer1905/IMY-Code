//Pieter Venter u23896257
const getCharacterById = async (id) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("Error has occured and could not retireve character data...");
        return null;
    }
}

const getCharacterByName = async (name) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        const data = await res.json();
        const results = data.results[0];
        return results;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("Error has occured and could not retireve character data...");
        return null;
    }
}

export default {
    getCharacterById,
    getCharacterByName
};
