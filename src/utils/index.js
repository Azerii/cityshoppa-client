export const loadModal = () => {
    const el = document.querySelector('#modalWrapper')
    const l = el.classList.length

    el.classList.remove(el.classList[l-1])
}