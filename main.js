// CHESS PIECES - PLAYER 1
const king = document.querySelector('#king')

const franky = document.querySelector('#franky')
const franky2 = document.querySelector('#franky2')

const zoro = document.querySelector('#zoro')
const zoro2 = document.querySelector('#zoro2')

const robin = document.querySelector('#robin')
const robin2 = document.querySelector('#robin2')

const queen = document.querySelector('#queen')
// const queen2 = document.querySelector('#queen2')

const pawn = document.querySelector('#pawn')
const pawn2 = document.querySelector('#pawn2')
const pawn3 = document.querySelector('#pawn3')
const pawn4 = document.querySelector('#pawn4')
const pawn5 = document.querySelector('#pawn5')
const pawn6 = document.querySelector('#pawn6')
const pawn7 = document.querySelector('#pawn7')
const pawn8 = document.querySelector('#pawn7')


// CHESS PIECES - PLAYER 2
const oppoKing = document.querySelector('#oppo-king')

const crocodile = document.querySelector('#crocodile')
const crocodile2 = document.querySelector('#crocodile2')

const mihawk = document.querySelector('#mihawk')
const mihawk2 = document.querySelector('#mihawk2')

const law = document.querySelector('#law')
const law2 = document.querySelector('#law2')


const oppoQueen = document.querySelector('#oppo-queen')
// const oppoQueen2 = document.querySelector('#oppo-queen2')


const pawn9 = document.querySelector('#pawn9')
const pawn10 = document.querySelector('#pawn10')
const pawn11 = document.querySelector('#pawn11')
const pawn12 = document.querySelector('#pawn12')
const pawn13 = document.querySelector('#pawn13')
const pawn14 = document.querySelector('#pawn14')
const pawn15 = document.querySelector('#pawn15')
const pawn16 = document.querySelector('#pawn16')



const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

// * KINGS
king.addEventListener('dragstart', dragStart)
king.addEventListener('drag', dragging)

oppoKing.addEventListener('dragstart', dragStart)
oppoKing.addEventListener('drag', dragging)


// * QUEENS
queen.addEventListener('dragstart', dragStart)
queen.addEventListener('drag', dragging)

oppoQueen.addEventListener('dragstart', dragStart)
oppoQueen.addEventListener('drag', dragging)

// * TOWERS
franky.addEventListener('dragstart', dragStart)
franky.addEventListener('drag', dragging)
franky2.addEventListener('dragstart', dragStart)
franky2.addEventListener('drag', dragging)

crocodile.addEventListener('dragstart', dragStart)
crocodile.addEventListener('drag', dragging)
crocodile2.addEventListener('dragstart', dragStart)
crocodile2.addEventListener('drag', dragging)

// * HORSES
zoro.addEventListener('dragstart', dragStart)
zoro.addEventListener('drag', dragging)
zoro2.addEventListener('dragstart', dragStart)
zoro2.addEventListener('drag', dragging)

mihawk.addEventListener('dragstart', dragStart)
mihawk.addEventListener('drag', dragging)
mihawk2.addEventListener('dragstart', dragStart)
mihawk2.addEventListener('drag', dragging)

// * BISHOPS
robin.addEventListener('dragstart', dragStart)
robin.addEventListener('drag', dragging)
robin2.addEventListener('dragstart', dragStart)
robin2.addEventListener('drag', dragging)

law.addEventListener('dragstart', dragStart)
law.addEventListener('drag', dragging)
law2.addEventListener('dragstart', dragStart)
law2.addEventListener('drag', dragging)


//* PAWNS
pawn.addEventListener('dragstart', dragStart)
pawn.addEventListener('drag', dragging) 
pawn2.addEventListener('dragstart', dragStart)
pawn2.addEventListener('drag', dragging) 
pawn3.addEventListener('dragstart', dragStart)
pawn3.addEventListener('drag', dragging) 
pawn9.addEventListener('dragstart', dragStart)
pawn9.addEventListener('drag', dragging) 
pawn10.addEventListener('dragstart', dragStart)
pawn10.addEventListener('drag', dragging) 
pawn11.addEventListener('dragstart', dragStart)
pawn12.addEventListener('drag', dragging) 



squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragenter', dragEnter )
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('dragend', dragEnd)
})

let beingDragged

function dragging() {
    infoDisplay.textContent = 'YOU ARE DRAGGING A ' + beingDragged.id
}

function dragStart(e) {
    beingDragged = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    // console.log(e.target);
    e.target.append(beingDragged)
    e.target.classList.remove('highlight')
}

function dragEnter (e) {
    e.target.classList.add('highlight')
}

function dragLeave (e) {
    e.target.classList.remove('highlight')
}

function dragEnd(e) {
    e.target.classList.add('target')
    setTimeout(() => e.target.classList.remove('target', 100))
    infoDisplay.textContent = ''
}


