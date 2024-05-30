const color_buttons = document.querySelectorAll('.mac_btn_colors')
const all_gbButtons = document.querySelectorAll('.gb_btn')

const mac_img = document.querySelector('.mac_img')
const mac_color = document.querySelector('.mac_color')
const mac_cost = document.querySelector('.mac_cost')


const phone_colors = {
    "White": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830269",
    "Space Grey": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200"
}

color_buttons.forEach((btn) => {
    btn.onclick = () => {
        const urls = phone_colors[btn.innerText]

        mac_img.style.backgroundImage = `url(${urls})`
        mac_color.innerText = btn.innerText
        if(btn.innerText === "Space Grey") {
            mac_cost.innerText = '999'
        } else {
            mac_cost.innerText = '999'
        }
    }
})





const btns = document.querySelectorAll('button[data-price]')
const total_price = document.querySelector('#span')  
const org_price = 999




btns.forEach((btn) => {
    btn.onclick = () => {
        const price = +btn.getAttribute('data-price')

        total_price.innerText = org_price + price



        const click = document.querySelector('.clicked')
        if(click) {
         click.classList.remove('clicked')
        }
        btn.classList.add('clicked')
    }
})







