window.addEventListener("load", e=> {
    const shareButton = document.querySelector(".share-button");
    const shareContainer = document.querySelector(".share-container");
    const shareButtonMobile = document.querySelector(".share-button-mobile");
    const shareContainerMobile = document.querySelector(".share-container-mobile")
    const profileContainer = document.querySelector(".profile")
    shareButton.addEventListener("click", () =>{
        shareContainer.classList.toggle("show")
    })
    shareButtonMobile.addEventListener("click", () =>{
        shareContainerMobile.classList.toggle("show-mobile-container")
        profileContainer.classList.toggle("hide-profile-container")

    })


});
