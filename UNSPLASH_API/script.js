const isLike = document.querySelector(".photo__like");

isLike.addEventListener('click', () => {
    if (isLike.classList.contains("fa-regular")) {
        isLike.classList.remove("fa-regular");
        isLike.classList.add("fa-solid");
    } else {
        isLike.classList.remove("fa-solid");
        isLike.classList.add("fa-regular");
    }
});
