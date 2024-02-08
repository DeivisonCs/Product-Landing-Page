const iphone_image = document.getElementById('show-color-iphone');
const color_selector = document.getElementById('iphone-color-selector');

color_selector.addEventListener('click', (e) => {
    if(e.target.id){
        const color = document.getElementById(e.target.id);
        const all_colors = document.querySelectorAll('.show-color');
        const color_title = document.getElementById('color_name');


        if(!color.classList.value.includes('selected')){
            all_colors.forEach(e => {
                if(e.classList.value.includes('selected'))
                    e.classList.remove('selected');
            });
            
            color.classList.add('selected');
            color_title.textContent = color.id;
            iphone_image.src = `assets/img/${color.id}_iphone.png`
        }
    }
})