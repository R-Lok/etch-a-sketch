
## Have to create 16x16 grid of square divs using JS only
- use a for loop, loop 256 times creating one square div each time
- all append to the initial div in the html file
- use display:flex and flex-wrap, and adjustment of square sizing to get 16x16 to fit perfectly;


## Create brush that increases blackness by 10% (absolute) every time the mouse goes over the square

- on first hover = set rgba to (0,0,0,0.10)
- subsequent if statements (or switch statement) to check the A value
- depending on the A value, increase it to the next 0.10 increment (10% darker)
- when at max [rgb(0, 0, 0)], maintain that rgb value

## make square only change color when mouse is actually down

- use eventlisteners for the entire html body to change state when mousedown detected (make variable mouseState -> change value to 'down' when 'mousedown' detected)
- make the opposite as well. body eventListener for mouseup that changes mouseState to 'up'
- Make it so the function that changes square colors only runs when mouseState ='down'

