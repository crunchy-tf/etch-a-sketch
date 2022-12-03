slider = document.querySelector('.slider') 
grid = document.querySelector('.grid')

slider.addEventListener('change', () => {
    slider_values = [4,8,16,32,64]
    size = slider_values[slider.value]

    for (i=0;i<size*size;i++){
        cell = document.createElement('div')
        cell.innerText = i+1
        cell.className = "cell"
        grid.appendChild(cell)
    }
})