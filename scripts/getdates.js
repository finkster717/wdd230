let lastModifiedDate = new Date(document.lastModified);
let lastModifiedElement = document.getElementById('lastModified');

lastModifiedElement.innerText = `Last Updated: ${lastModifiedDate}`;