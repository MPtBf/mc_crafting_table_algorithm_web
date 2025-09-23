
const craftingSlotsDOMs = document.querySelectorAll("#craftingGrid .slot");
const resultSlotDOM = document.querySelector("#result .slot");
const inventorySlotsContainerDOM = document.querySelector("#inventory .row");
const heldItemDOM = document.querySelector("#heldItem");



const items = {
    oak_log: 'oak_log',
    oak_planks: 'oak_planks',
    stick: 'stick',
    crafting_table: 'crafting_table',
}

function isImageExists(imageUrl){
    try {
        let http = new XMLHttpRequest();
        http.open('HEAD', imageUrl, false);
        http.send();
        return http.status !== 404;
    }
    catch(e){
        return false;
    }

}
const itemsTexturesPath = './textures/items/'
let heldItem = null;
document.addEventListener('mousemove', (e) => {
    const [x,y] = [e.clientX, e.clientY]
    if (x > window.innerWidth - 50 || y > window.innerHeight - 50)   return

    heldItemDOM.style.left = `${x - heldItemDOM.offsetWidth / 2}px`;
    heldItemDOM.style.top = `${y - heldItemDOM.offsetHeight / 2}px`;
})

const clearCraft = () =>    {
    for (let slot of [...craftingSlots, resultSlot]) {
        slot.setItem(null)
    }
}
const updateResult = () => {
    if (craftingSlots[0].item === items.oak_planks
        && craftingSlots[1].item === items.oak_planks
        && craftingSlots[2].item === null
        && craftingSlots[3].item === items.oak_planks
        && craftingSlots[4].item === items.oak_planks
        && craftingSlots[5].item === null
        && craftingSlots[6].item === null
        && craftingSlots[7].item === null
        && craftingSlots[8].item === null)   resultSlot.setItem(items.crafting_table)

    else if (craftingSlots[0].item === items.oak_planks
        && craftingSlots[1].item === null
        && craftingSlots[2].item === null
        && craftingSlots[3].item === items.oak_planks
        && craftingSlots[4].item === null
        && craftingSlots[5].item === null
        && craftingSlots[6].item === null
        && craftingSlots[7].item === null
        && craftingSlots[8].item === null)   resultSlot.setItem(items.stick)

    else   resultSlot.setItem(null)
}
const setHeldItem = (item) => {
    heldItem = item

    heldItemDOM.innerHTML = ``
    if (heldItem){
        const itemImg = document.createElement("img");
        itemImg.style.height = '100px';

        const pathToImg = itemsTexturesPath + `${heldItem}.png`
        if (isImageExists(pathToImg))   itemImg.src = pathToImg
        else {
            itemImg.src = itemsTexturesPath + `/not_found.png`
            const itemNameDiv = document.createElement("p");
            itemNameDiv.classList.add('notFoundItemTextureText');
            itemNameDiv.innerText = `*${item}*`
            heldItemDOM.appendChild(itemNameDiv)
            console.log('appnded error text')
        }

        heldItemDOM.appendChild(itemImg)
    }
}

// slots classes
class Slot{
    constructor(slotDiv){
        this.slotDiv = slotDiv;
        this.id = slotDiv.id;
        this.item = null
        this.init()
    }
    init(){
        this.slotDiv.addEventListener('mousedown', (e)=>{
            e.preventDefault()
            this.onClick(e)
        })
        this.slotDiv.addEventListener('contextmenu', (e)=>{
            e.preventDefault()
        })
    }
    onClick(){}
    setItem(item){
        this.item = item
        this.update()
    }
    update(){
        this.slotDiv.innerHTML = ``
        if (this.item) {
            const itemImg = document.createElement("img");
            itemImg.classList.add("itemImg");

            const pathToImg = itemsTexturesPath + `${this.item}.png`

            if (isImageExists(pathToImg))   itemImg.src = pathToImg
            else {
                itemImg.src = itemsTexturesPath + `/not_found.png`
                const itemNameDiv = document.createElement("p");
                itemNameDiv.classList.add('notFoundItemTextureText');
                itemNameDiv.innerText = `*${this.item}*`
                this.slotDiv.appendChild(itemNameDiv)
            }
            this.slotDiv.appendChild(itemImg)
        }
    }
}
class CraftingSlot extends Slot{
    constructor(slotDiv) {
        super(slotDiv);
    }
    onClick(e){
        if (e.button === 0) {
            const itemToPlace = heldItem
            setHeldItem(this.item)
            this.setItem(itemToPlace)
        }
        else if (e.button === 2) {
            if (this.item){
                const itemToPlace = heldItem
                setHeldItem(this.item)
                this.setItem(itemToPlace)
            }
            else   this.setItem(heldItem)
        }
        // update craft result
        updateResult()
    }
}
class ResultSlot extends Slot{
    constructor(slotDiv) {
        super(slotDiv);
    }
    onClick(){
        if(this.item && !heldItem){
            setHeldItem(this.item)
            clearCraft()
        }
    }
}
class CreativeSlot extends Slot{
    constructor(slotDiv) {
        super(slotDiv);
    }
    onClick(){
        if (heldItem)   setHeldItem(null)
        else   setHeldItem(this.item)
    }
}

// initializing craftingSlots
let craftingSlots = []
for (let slot of craftingSlotsDOMs) {
    const newSlot = new CraftingSlot(slot)
    craftingSlots.push(newSlot)
}
const resultSlot = new ResultSlot(resultSlotDOM)
// initializing inventory slots
let inventorySlots = []
for (let itemName of Object.values(items)) {
    const slotDiv = document.createElement("div");
    slotDiv.classList.add("slot");
    inventorySlotsContainerDOM.appendChild(slotDiv)

    const newSlot = new CreativeSlot(slotDiv)
    newSlot.setItem(itemName)
    inventorySlots.push(newSlot)
}






