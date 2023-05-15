//swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
});


// accordion

const accordeon = () => {
  const element = document.querySelector('.questions__item');
  const content = document.querySelector('.questions__desc');

  element.addEventListener('click', () => {
    content.classList.toggle('active');
  });
};

accordeon();


//hide content

const hideContent = () => {
  const hideBtn = document.querySelector('.cars__btn');
  const catalog = document.querySelector('.cars__catalog');

  console.log('hideBtn');

  hideBtn.addEventListener('click', () => {
    if (catalog.style.display == "none") {
      catalog.style.display = "grid";
      hideBtn.innerText = 'Свернуть список машин';
    } else {
      catalog.style.display = "none";
      hideBtn.innerText = 'Развернуть список машин';
    }

  });
};

hideContent();


//footer-dropdown

const menuFooter = () => {
  const title = document.querySelectorAll('.footer__menu-title');
  const list = document.querySelectorAll('.footer__menu-list');

  title.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
      title.forEach((btnItem) => {
        btnItem.style.display = 'flex';
      });

      list.forEach((listItem) => {
        listItem.style.display = 'none';
      });

      list[index].style.display = 'block';
    });
  });
};

menuFooter();

//проверка на заполнение только чисел в инпут Цена

const validation = () => {

  const inputs = document.querySelectorAll('.filter__input');

  inputs.forEach(input => {
    input.addEventListener('input', (event) => {
      input.value = input.value.replace(/[^\d]/g, ''); //ввод в инпуты только чисел
    });
  });

};

validation();