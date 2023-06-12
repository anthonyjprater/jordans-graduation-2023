const panels = document.querySelectorAll('.panel')
const textCaption = document.querySelector('.panel h3')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
    textCaption.classList.add('active-text')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
    textCaption.classList.remove('active-text')
  })
}
