// Ищем все ссылки внутри header, начинающиеся с #
document.querySelectorAll('header a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // отменяем стандартное поведение

    const targetId = this.getAttribute("href"); // получаем ID (например, #section1)
    const targetElement = document.querySelector(targetId); // ищем нужный элемент

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // плавная прокрутка
      });
    }
  });
});
