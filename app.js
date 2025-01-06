const adsContainer = document.getElementById('ads');

document.getElementById('adForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const adDiv = document.createElement('div');
    adDiv.className = 'ad';
    adDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button onclick="sendInterest('${title}')">Érdeklődöm</button>
    `;

    adsContainer.appendChild(adDiv);

    document.getElementById('adForm').reset();
});

function sendInterest(adTitle) {
    const name = prompt('Adja meg a nevét:');
    const address = prompt('Adja meg a címét:');
    const phone = prompt('Adja meg a telefonszámát:');

    if (name && address && phone) {
        const mailtoLink = `mailto:iskolaiemail@example.com?subject=Érdeklődés: ${encodeURIComponent(adTitle)}&body=Név: ${encodeURIComponent(name)}%0ACím: ${encodeURIComponent(address)}%0ATelefonszám: ${encodeURIComponent(phone)}`;
        window.location.href = mailtoLink;
    } else {
        alert('Kérjük, töltsön ki minden mezőt az érdeklődéshez!');
    }
}