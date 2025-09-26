
const craftingSlotsDOMs = document.querySelectorAll("#craftingGrid .slot");
const resultSlotDOM = document.querySelector("#result .slot");
const removeSlotDOM = document.querySelector("#remove .slot");
const inventorySlotsContainerDOM = document.querySelector("#inventory .row");
const heldItemDOM = document.querySelector("#heldItem");

import {getCraftingResult} from './crafts.js'
import {items, craftingRecipes} from "./minecraftData.js";


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
    let g = craftingSlots
    const craftingGrid = [
        [g[0].item, g[1].item, g[2].item],
        [g[3].item, g[4].item, g[5].item],
        [g[6].item, g[7].item, g[8].item],
    ]

    const resItem = getCraftingResult(craftingGrid)

    resultSlot.setItem(resItem)
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
            itemNameDiv.innerText = `*${items[item]}*`
            heldItemDOM.appendChild(itemNameDiv)
        }

        heldItemDOM.appendChild(itemImg)
    }
}
const isUsedForCrafting = (itemName) => {
    for (let r of craftingRecipes){
        let usingItems = Object.values(r.key).map(k => {
            if (k instanceof Array) {
                return k.map(k2 => {
                    if (k2.data === 0)  return k2.item
                    else  return `${k2.item}@${k2.data}`
                })
            }
            else {
                if (! k.data)  return k.item
                else  return `${k.item}@${k.data}`
            }
        })
        usingItems = usingItems.flat()
        if (usingItems.includes(itemName))  return true
    }
    return false
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
                itemNameDiv.innerText = `*${items[this.item]}*`
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
class RemoveSlot extends Slot{
    constructor(slotDiv) {
        super(slotDiv);
    }
    onClick(e){
        if (e.shiftKey)   clearCraft()
        else   setHeldItem(null)
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

// initializing slots
let craftingSlots = []
for (let slot of craftingSlotsDOMs) {
    const newSlot = new CraftingSlot(slot)
    craftingSlots.push(newSlot)
}
const resultSlot = new ResultSlot(resultSlotDOM)
const removeSlot = new RemoveSlot(removeSlotDOM)
let creativeSlots = []
for (let itemName of Object.keys(items)) {
    // don't add items which cant be used for crafting (to save inventory space)
    if (! isUsedForCrafting(itemName))  continue

    const slotDiv = document.createElement("div");
    slotDiv.classList.add("slot");
    inventorySlotsContainerDOM.appendChild(slotDiv)

    const newSlot = new CreativeSlot(slotDiv)
    newSlot.setItem(itemName)
    creativeSlots.push(newSlot)
}






