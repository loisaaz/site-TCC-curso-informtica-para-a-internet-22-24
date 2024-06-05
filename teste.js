//Javascript of responsive navigation menu
const menuBtn = document.querySelector(".mneu-btn")
const navigation = document.querySelector(".navigation")

menuBtn.addEventListener("click", ()=> {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
