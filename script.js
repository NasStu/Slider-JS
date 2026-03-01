const image = [
    {
        url: "./image/Rostov_admiral.png",
        title: "Rostov-on-Don, Admiral",
        town: "Rostov-on-Don<br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request"
    },
    {
        url: "./image/Sochi.png",
        title: "Sochi, Thieves",
        town: "Sochi<br> Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request"
    },
    {
        url: "./image/Rostov_patriotic.png",
        title: "Rostov-on-Don, Patriotic",
        town: "Rostov-on-Don<br> Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request"
    }
];

const sliderImages = document.querySelector(".slider__right_img");
const sliderArrows = document.querySelectorAll(".arrow");
const sliderDots = document.querySelector(".switch__dots");
const sliderMenu = document.querySelector(".slider__right_menu");
const cityInfo = document.querySelector(".card-info__city");
const areaInfo = document.querySelector(".card-info__area");
const timeInfo = document.querySelector(".card-info__time");
const costInfo = document.querySelector(".card-info__cost");

initImages();
initArrows();
initDots();
initMenu();
initCity();
initArea();
initTime();
initCost();

function initImages() {
    image.forEach((Image, index) => {
        const imageDiv = `<div class = "image n${index} ${index === 0 ? "active" : ""}" 
        style="background-image:url(${image[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
    });
}

function initArrows() {
    sliderArrows.forEach(arrow => {
        arrow.addEventListener("click", function () {
            const curNumber = +document.querySelector(".image.active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("switch__arrow-left")) {
                nextNumber = curNumber === 0 ? image.length - 1 : curNumber - 1;
            } else {
                nextNumber = curNumber === image.length - 1 ? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
        });
    });
}

function initDots() {
    image.forEach((image, index) => {
        const dot = `<div class="dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".dots-item").forEach(dot => {
        dot.addEventListener("click", function () {
            moveSlider(this.dataset.index);
        })
    })
}

function initMenu() {
    image.forEach((image, index) => {
        const menuItem = `<div class="menu__item n${index} ${index === 0 ? "active" : ""}" data-index="${index}">
        <h3>${image.title}</h3></div>`;
        sliderMenu.innerHTML += menuItem;
    });
    sliderMenu.querySelectorAll(".menu__item").forEach(menuItem => {
        menuItem.addEventListener("click", function () {
            moveSlider(this.dataset.index);
        })
    })
}

function initCity() {
    image.forEach((image, index) => {
        const city = `<div class="city-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">
        <h4>${image.town}</h4></div>`;
        cityInfo.innerHTML += city;
    });
}

function initArea() {
    image.forEach((image, index) => {
        const area = `<div class="area-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}"><h4>${image.area}</h4></div>`;
        areaInfo.innerHTML += area;
    });
}

function initTime() {
    image.forEach((image, index) => {
        const time = `<div class="time-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}"><h4>${image.time}</h4></div>`;
        timeInfo.innerHTML += time;
    });
}

function initCost() {
    image.forEach((image, index) => {
        const cost = `<div class="cost-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}"><h4>${image.cost}</h4></div>`;
        costInfo.innerHTML += cost;
    });
}

function moveSlider(num) {
    document.querySelector(".image.active").classList.remove("active");
    document.querySelector(".image.n" + num).classList.add("active");

    document.querySelector(".dots-item.active").classList.remove("active");
    document.querySelector(`.dots-item[data-index="${num}"]`).classList.add("active");

    document.querySelector(".menu__item.active").classList.remove("active");
    document.querySelector(`.menu__item[data-index="${num}"]`).classList.add("active");

    document.querySelector(".city-text.active").classList.remove("active");
    document.querySelector(`.city-text[data-index="${num}"]`).classList.add("active");

    document.querySelector(".area-text.active").classList.remove("active");
    document.querySelector(`.area-text[data-index="${num}"]`).classList.add("active");

    document.querySelector(".time-text.active").classList.remove("active");
    document.querySelector(`.time-text[data-index="${num}"]`).classList.add("active");

    document.querySelector(".cost-text.active").classList.remove("active");
    document.querySelector(`.cost-text[data-index="${num}"]`).classList.add("active");
}

