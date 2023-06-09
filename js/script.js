//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/

const links = document.querySelectorAll(".menu-header__link");

links.forEach((link) => {
	link.addEventListener("mouseover", function (e) {
		if (!e.target.classList.contains("tdu")) {
			e.target.classList.add("tdu")
		}
		link.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("lock")) {
				e.target.classList.remove("tdu")
			}
		})
	})
})


//бургер
const burger = document.querySelector(".header__burger");

burger.addEventListener("click", function (e) {
	burger.classList.toggle("active")
	document.body.classList.toggle("scroll-lock")
	const headerMenu = document.querySelector(".header__menu");
	headerMenu.classList.toggle("active")
	const spans = document.querySelectorAll(".menu-header__phone span")
	if (spans.length < 2) {
		if (headerMenu.classList.contains("active")) {
			const otherPhone = document.querySelector(".menu-header__phone");
			otherPhone.insertAdjacentHTML(
				"beforeend",
				`<span>+7 (916) 780-22-59</span>`
			)

		}
	}
})
//Хедер

/*
window.addEventListener("scroll", function (e) {
	const headerElem = document.querySelector(".header");
	const main_page = document.querySelector(".main-screen__image")
	let offSet = main_page.getBoundingClientRect().bottom;
	console.log(offSet);
	let heightWindow = window.innerHeight;
	console.log(heightWindow - offSet);
	if (window.pageYoffSet > (heightWindow - offSet) / 2) {
		headerElem.classList.add("scroll")
	} else {
		headerElem.classList.remove("scroll")
	}

})
*/
//меняем картинку

const imageOne = document.querySelector("#imageOne");

if (imageOne) {
	imageOne.addEventListener("mouseenter", function (e) {
		imageOne.removeAttribute("src");
		imageOne.setAttribute("src", 'img/main/example/crash.png')
	})
	imageOne.addEventListener("mouseout", function (e) {
		imageOne.removeAttribute("src");
		imageOne.setAttribute("src", 'img/main/example/01.png')
	})
	imageOne.addEventListener("mousedown", function (e) {
		imageOne.removeAttribute("src");
		imageOne.setAttribute("src", 'img/main/example/crash.png')
	})

	imageOne.addEventListener("mouseup", function (e) {
		imageOne.removeAttribute("src");
		imageOne.setAttribute("src", 'img/main/example/01.png')
	})

}

//свайпер

new Swiper('.reviews__columns', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
	breakpoints: {
		767: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		}
	},
	navigation: {
		nextEl: '.swiper-button-next ',
		prevEl: '.swiper-button-prev ',
	},
})

//Файл добавлен

const buttonInput = document.querySelector(".form-contacts__title input");
const spanInput = document.querySelector(".form-contacts__title span");

if (buttonInput) {
	buttonInput.addEventListener("change", function (e) {

		spanInput.classList.add("active")
		spanInput.innerHTML = '';
		spanInput.innerHTML = 'Файл добавлен';
	})
	buttonInput.addEventListener("click", function (e) {
		spanInput.classList.remove("active")
	})
}
//Фокус формам


const inputsContacts = document.getElementsByName("input");

if (inputsContacts.length > 0) {
	inputsContacts.forEach((item) => {
		let placeholdr = item.placeholder;
		item.addEventListener("focus", function (e) {
			item.classList.add("active")
			item.placeholder = '';
		})
		item.addEventListener("blur", function (e) {
			item.classList.remove("active")
			item.placeholder = placeholdr;
		})

	})
}


//Услуги товары

/*
const itemsInside = document.querySelectorAll(".service__item");

if (itemsInside.length > 0) {
	itemsInside.forEach((itemInside) => {
		if (!itemInside.classList.contains("item-info")) {
			itemInside.addEventListener("click", function (e) {
				itemInside.nextElementSibling.classList.add("active")
			})
			itemInside.addEventListener("mouseleave", function (e) {
				itemInside.nextElementSibling.classList.remove("active")
			})
		}
	})
}
*/
/*
window.addEventListener("resize", function (e) {
	if (window.innerWidth < 992) {

		const columns = document.querySelectorAll(".service__column");
		if (columns.length > 0) {
			columns.forEach((column) => {
				column.addEventListener("click", function (e) {
					column.nextElementSibling.classList.toggle("active")
				})
			})
		}

	}
})
*/
/*
							<article class="service__column column-red">
								<div class="service__item item-service">
									<div class="item-service__body">
										<ul class="item-service__list">
											<li class="item-service__point">Покраска целиком 8 000 руб.</li>
											<li class="item-service__point">Локальная покраска 3 500 руб.</li>
											<li class="item-service__point">Съем установка 3 000 руб.</li>
											<li class="item-service__point">Разбор 1 000 руб.</li>
											<li class="item-service__point">Ремонтные работы оцениваются
												по факту осмотра</li>
										</ul>
										<div class="item-service__other">
											1 год гарантии
										</div>
										<a href="contacts.html" class="item-service__button">Оставить заявку</a>
									</div>
								</div>
							</article>
*/

//хедер плашка

window.addEventListener("scroll", function (e) {

	const pages = document.querySelector(".pages");
	if (pages) {
		let pagesOffSet = pages.getBoundingClientRect().top;
		let coeficcent = 6
		let pagesHeight = pages.clientHeight;
		let head = document.querySelector(".header")
		if (window.pageYOffset >= (pagesHeight - pagesOffSet) / coeficcent) {
			head.classList.add("active")
		} else {
			head.classList.remove("active")
		}
	}
	const service = document.querySelector(".service")

	if (service) {
		let pagesOffSet = service.getBoundingClientRect().top;
		let coeficcent = 6
		let pagesHeight = service.clientHeight;
		let head = document.querySelector(".header")
		if (window.pageYOffset >= (pagesHeight - pagesOffSet) / coeficcent) {
			head.classList.add("active")
		} else {
			head.classList.remove("active")
		}
	}
	const main_screen = document.querySelector(".main-screen")

	if (main_screen) {
		let pagesOffSet = main_screen.getBoundingClientRect().top;
		let coeficcent = 8
		let pagesHeight = main_screen.clientHeight;
		let head = document.querySelector(".header")
		if (window.pageYOffset >= (pagesHeight - pagesOffSet) / coeficcent) {
			head.classList.add("active")
		} else {
			head.classList.remove("active")
		}
	}
})