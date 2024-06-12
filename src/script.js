function set_info_anim() {
  const elem_text = document.querySelector(".header_garbel-info-text");
  const texts = [
    "Создание телеграмм ботов",
    "Редактирование в личном кабинете",
    "Встроенный конструктор ботов",
  ];
  let key_of_text = 0;
  let text = "";
  let i = 0;
  const text_anim = (key) => {
    if (elem_text.innerHTML) {
      setTimeout(() => {
        text = elem_text.innerHTML;
        i = 1;
        const textRemove = setInterval(() => {
          elem_text.innerHTML = text.slice(0, -i);
          i++;
          if (i > text.length) {
            clearInterval(textRemove);
            if (key_of_text < texts.length) text_anim(key_of_text);
          }
        }, 50);
      }, 1000);
    } else {
      setTimeout(() => {
        i = 0;
        const textInterv = setInterval(() => {
          text = texts[key];
          elem_text.innerHTML += text[i];
          i++;
          if (text[i] == undefined) {
            key_of_text++;
            clearInterval(textInterv);
            if (key_of_text < texts.length) text_anim(key_of_text);
          }
        }, 100);
      }, 1000);
    }
  };

  text_anim(key_of_text);
}

function scroll_paralax(pos) {
  const background = document.querySelector(".header_garbel-bc");
  background.style = `--paralaxG: ${-pos}px`;
}

function scroll_navbar(pos) {
  const navbar = document.querySelector(".navbar");
  if (pos > 40) navbar.classList.add("active");
  else navbar.classList.remove("active");
}

document.addEventListener("scroll", () => {
  scroll_paralax(window.pageYOffset * 1.5);
  scroll_navbar(window.pageYOffset);
});

scroll_navbar(window.pageYOffset);
scroll_paralax(window.pageYOffset * 1.5);
set_info_anim();
