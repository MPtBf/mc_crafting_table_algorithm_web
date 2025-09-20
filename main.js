
const craftingSlotsDivs = document.querySelectorAll("#craftingGrid .slot");
const resultSlotDiv = document.querySelector("#result .slot");


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

// slots classes
class Slot{
    constructor(slotDiv){
        this.slotDiv = slotDiv;
        this.id = slotDiv.id;
        this.item = null
        this.init()
    }
    init(){
        this.slotDiv.addEventListener("click", ()=>{
            this.onClick()
        })
    }
    onClick(){}
    setItem(item){
        this.item = item
        this.update()
    }
    update(){
        if (this.item) {
            const itemImg = document.createElement("img");
            itemImg.classList.add("itemImg");

            const pathToImg = `./textures/${this.item}.png`

            if (isImageExists(pathToImg))   itemImg.src = pathToImg
            else {
                itemImg.src = `./textures/not_found.png`
                const itemNameDiv = document.createElement("p");
                itemNameDiv.classList.add('notFoundItemTextureText');
                itemNameDiv.innerText = `*${this.item}*`
                this.slotDiv.appendChild(itemNameDiv)
            }
            this.slotDiv.appendChild(itemImg)
        }
        else {
            this.slotDiv.innerHTML = '';
        }
        // // update item in slot
        // this.slotDiv.innerHTML = '';
    }
}
class CraftingSlot extends Slot{
    constructor(slotDiv) {
        super(slotDiv);
    }
    onClick(){
        if (! this.item){
            this.setItem(selectedItem);
        }
        else {
            this.setItem(null);
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
        if(this.item){
            clearCraft()
            // heldItem = this.item
        }
    }
}

// initializing craftingSlots
let craftingSlots = []
for (let slot of craftingSlotsDivs) {
    const newSlot = new CraftingSlot(slot)
    craftingSlots.push(newSlot)
}
const resultSlot = new ResultSlot(resultSlotDiv)

const clearCraft = () => {
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


let selectedItem = items.oak_planks;




