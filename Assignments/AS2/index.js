const socket = io();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById('poll').addEventListener('submit', (event) => {
    event.preventDefault();

    const catName = document.querySelector('input[name="catName"]:checked');
    if (catName) {
        const vote = catName.value;
        socket.emit('vote', vote);
    }
});

socket.on('updateVotes', (data) => {
    document.querySelectorAll('input[name="catName"]').forEach((input) => {
        const catName = input.value;
        const cat = data.find(cat => cat.name === catName);
        const votes = cat ? cat.votes : 0;
        const name = capitalizeFirstLetter(catName);
        input.nextElementSibling.innerText = `${name} | Votes: ${votes}`;
    });

    const totalVotes = data.reduce((total, cat) => total + cat.votes, 0);
    document.getElementById('total-votes').innerText = totalVotes;
});

socket.on('connect', () => {
    console.log('Connected with socket id:', socket.id);
    socket.emit('sendId', socket.id);
});

document.on('$ready')
