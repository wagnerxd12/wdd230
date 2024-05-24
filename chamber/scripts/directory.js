document.addEventListener('DOMContentLoaded', () => {
    const directory = document.getElementById('directory');
    const toggleViewButton = document.getElementById('toggleView');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        });

    toggleViewButton.addEventListener('click', () => {
        directory.classList.toggle('grid-view');
        directory.classList.toggle('list-view');
    });

    function displayMembers(members) {
        directory.innerHTML = '';
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');

            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.description}</p>
            `;

            directory.appendChild(memberDiv);
        });
    }
});
