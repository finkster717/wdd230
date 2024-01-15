let lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');

lastModifiedElement.innerText = `Last Updated: ${lastModifiedDate}`;