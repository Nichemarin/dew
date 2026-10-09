const numberBlocks = document.querySelector("#blockNumber");
const container = document.querySelector("#container")

function readBlocks(){
    let blocks = Number(numberBlocks.value)
    for (let i = 0; i < blocks; i++){
        createBlock("red")
    }
}

function createBlock(color){
        const block = document.createElement("div");
        block.classList.add("block", color);
        container.appendChild(block)
}