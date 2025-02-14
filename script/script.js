function LoadContent(page) {
    const contentDiv = document.getElementById('content');
    let url = "";

    if (page === 'home') {
        url = './html/home.html';
    } else if (page === 'about') {
        url = './html/about.html';
    } else if (page === 'menu') {
        url = './html/menu.html';
    }

    fetch(url)
    .then(response => response.text())
    .then(data => {
        contentDiv.innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading content:', error);
        contentDiv.innerHTML = '<p>Sorry, there was an error loading the content.</p>';
    });
}