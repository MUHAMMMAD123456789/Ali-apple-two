const color_buttons = document.querySelectorAll('.mac_btn_colors')
const all_gbButtons = document.querySelectorAll('.gb_btn')

const mac_img = document.querySelector('.mac_img')
const mac_color = document.querySelector('.mac_color')
const mac_cost = document.querySelector('.mac_cost')


const phone_colors = {
    "White": "img/white.png",
    "Space Grey": "img/space.png"
}

// color_buttons.forEach((btn) => {
//     btn.onclick = () => {
//         const urls = phone_colors[btn.innerText]

//         mac_img.style.backgroundImage = `url(${urls})`
//         mac_color.innerText = btn.innerText
//         if(btn.innerText === "Space Grey") {
//             mac_cost.innerText = '$2,599'
//         } else {
//             mac_cost.innerText = '$1,999'
//         }
//     }
// })

all_gbButtons.forEach((btns) => {
    btns.onclick = () => {
        const clicked_gb = document.querySelector('.clicked_gb')
        if(clicked_gb) {
            clicked_gb.classList.remove('clicked_gb')
        }
        btns.classList.add('clicked_gb')
    }
})









const btns = document.querySelectorAll('button[data-price]')
const total_price = document.querySelector('#span')  
const org_price = 999




btns.forEach((btn) => {
    btn.onclick = () => {
        const price = +btn.getAttribute('data-price')

        total_price.innerText = org_price + price
    }
})









let options = document.querySelectorAll('.gb_btn')

options.forEach((other) => {
    other.onclick = () => {
       const click = document.querySelector('.clicked')
       if(click) {
        click.classList.remove('clicked')
       }
       other.classList.add('clicked')
    }
})
