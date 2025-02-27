// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId)
    modal.style.display = "block"
    document.body.style.overflow = "hidden" // Предотвращаем прокрутку основной страницы
  }
  
  // Функция для закрытия модального окна
  function closeModal(modalId) {
    const modal = document.getElementById(modalId)
    modal.style.display = "none"
    document.body.style.overflow = "auto" // Возвращаем прокрутку основной страницы
  }
  
  // Закрытие модального окна при клике вне его содержимого
  window.onclick = (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none"
      document.body.style.overflow = "auto"
    }
  }
  
  // Закрытие модального окна при нажатии клавиши Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const modals = document.getElementsByClassName("modal")
      for (const modal of modals) {
        if (modal.style.display === "block") {
          modal.style.display = "none"
          document.body.style.overflow = "auto"
        }
      }
    }
  })
  
  