const KEY = '';

const imageElement = document.querySelector('.photo__image');
const authorElement = document.querySelector('.photo__author');
const bioElement = document.querySelector('.photo__bio');
const isLike = document.querySelector('.photo__like');


async function fetchData() {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random?count=1`,
            {
                method: "GET",
                headers: {
                    Authorization: `Client-ID ${KEY}`,
                },
            }
        );
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error('Error unsplash-loading:', error);
        return [];
    }
}


async function getData() {
    const data = await fetchData();
    if (data.length === 0) {
        throw new Error('Error: wrong data!')
    } else {
        imageElement.src = data[0].urls.small;
        authorElement.textContent = data[0].user.name;
        if (data[0].user.bio !== null) {
            bioElement = data[0].user.bio;
        }
        isLike.style.opacity = 1;
    }
}


isLike.addEventListener('click', () => {
    if (isLike.classList.contains('fa-regular')) {
        isLike.classList.remove('fa-regular');
        isLike.classList.add('fa-solid');
    } else {
        isLike.classList.remove('fa-solid');
        isLike.classList.add('fa-regular');
    }
});
