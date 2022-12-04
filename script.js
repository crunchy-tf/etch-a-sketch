slider = document.querySelector('.slider') 
grid = document.querySelector('.grid')

slider.addEventListener('change', () => {
    slider_values = [8,16,32,64,128]
    cell_sizes = [50,25,12.5,6.25,3.125]
    size = slider_values[slider.value]
    grid.innerHTML = ''
    for (i=0;i<size*size;i++){
        cell = document.createElement('div')
        cell.className = "cell"
        grid.appendChild(cell)
        cell.style.width = `${cell_sizes[slider.value]}px`
        cell.style.height = `${cell_sizes[slider.value]}px`
    }
    
    grid.style.gridTemplateColumns = `repeat(${slider_values[slider.value]},1fr)`

    cells = document.querySelectorAll('.cell')

    cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black'
    })
});
})

