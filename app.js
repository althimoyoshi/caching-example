//ECHO is on.
// app.js
const fetchData = async () => 
{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const displayData = (data) => {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous data

    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        container.appendChild(postElement);
    });
};

//
//

// Call fetchData when the page loads
window.onload = fetchData;
