const getData = () => {
  const list = document.querySelector('.catalog');
  const btn = document.querySelector('.catalog__btn');


  //создаем 2 изменяемые переменные, 1) по сколько штук будет выводится в строке

  let stack = 3;
  let count = 1;

  const render = (data) => { //эта функция отрисовывает все карточки товара
    list.innerHTML = ''
    // insertAdjacentHTML данный метод встараивает верстку в родительский контейнер к кот применен данный метод
    data.forEach(item => {
      list.insertAdjacentHTML('beforeend', ` 
      
      <div class="catalog__card">
        <img src="./${item.photo}" class="catalog__card-img" alt="KIA Sportage">
        <div class="catalog__body">
          <h5 class="catalog__title">${item.name}</h5>
          <p class="catalog__city">г. ${item.city}</p>
          <span class="catalog__price">${item.price} ₽</span>
          <a href="#" class="catalog__link">Подробнее</a>
        </div>
      </div>
        `);
    });
  };


  const sliceArray = (data, index) => {
    return data.slice(0, index);
  };

  const changeData = (data) => {
    const newStack = stack * count;

    render(sliceArray(data, newStack));


    if (data.length > newStack) {
      count++;
    } else {
      btn.style.display = 'none';
    }
  }

  const getGoods = () => {
    fetch('http://localhost:3000/item')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('данные были полученны с ошибкой');
        }
      })
      .then((data) => {
        changeData(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  btn.addEventListener('click', getGoods);

  getGoods();
};

getData();