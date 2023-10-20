// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content')

    faqContainer.addEventListener('click', (e) => {
        // Cible le header uniquement, les autres tags retournent null
        const groupHeader= e.target.closest('.faq-group-header')
        // Si pas un header, on ne veut rien faire donc return
        if (!groupHeader) return;
        /* Sinon on est dans un groupHeader */
        // cible la div parent du header donc .faq-group
        const group = groupHeader.parentElement
        const groupBody = group.querySelector('.faq-group-body')
        const icon = groupHeader.querySelector('i')

        // Clic sur icon ou sur header toggle icon
        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-minus')

        // toggle visibility of body
        groupBody.classList.toggle('open')

        // Close other open FAQ body
        const otherGroups = faqContainer.querySelectorAll('.faq-group')

        otherGroups.forEach((otherGroup => {
            // sélectionne autre group ouvert
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body')
                const otherIcon = otherGroup.querySelector('.faq-group-header i')
                otherGroupBody.classList.remove('open')
                otherIcon.classList.remove('fa-minus')
                otherIcon.classList.add('fa-plus')
            }
        }))
    })
})

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamurgerButton = document.querySelector('.hamburger-button')
    const mobileMenu = document.querySelector('.mobile-menu')
    hamurgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
})










































