slider = document.querySelector('.slider') 
grid = document.querySelector('.grid')
colorSlider = document.querySelector('input[type="color"]')
currentColor = '#000000'
gridNum = document.querySelector('.grid-number')

for (i=0;i<8*8;i++){
    cell = document.createElement('div')
    cell.className = "cell"
    grid.appendChild(cell)
    cell.style.width = '50px'
    cell.style.height = '50px'
}

grid.style.gridTemplateColumns = 'repeat(8,1fr)'

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
        cell.style.backgroundColor = currentColor
    })
});
})

colorSlider.addEventListener('change', () => {
    currentColor = colorSlider.value
})

slider.addEventListener('change', () => {
    slider_values = [8,16,32,64,128]
    currentGrid=slider.value
    gridNum.innerText = `${slider_values[currentGrid]}x${slider_values[currentGrid]}`
})