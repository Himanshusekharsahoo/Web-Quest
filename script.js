/* A Himanshu Creation */
function searchOnGoogle() {
    var searchQuery = document.getElementById('searchInput').value;
    var searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
    window.open(searchURL, '_self');
}

function showLoader() {
    var loaderContainer = document.getElementById('loaderContainer');
    if (loaderContainer) {
        loaderContainer.style.display = 'flex';
    } else {
        console.error('Loader container not found');
    }
}

function handleInputClick() {
    var inputElement = document.getElementById('searchInput');
    if (inputElement) {
        inputElement.placeholder = '';
    } else {
        console.error('Search input element not found');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                searchOnGoogle();
            }
        });
    } else {
        console.error('Search input element not found');
    }
});
