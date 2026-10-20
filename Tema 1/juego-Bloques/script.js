const numberBlocks = document.querySelector("#blockNumber");
const container = document.querySelector("#container");
const colors = ["blue", "red"];


function readBlocks(){
    let blocks = Number(numberBlocks.value)
    for (let i = 0; i < blocks; i++){
        createRandomBlock()
    }
}

function createRandomBlock(){
    let random = Math.floor(Math.random()* colors.length);
    createBlock(colors[random]);
}
function createBlock(color){
        const block = document.createElement("div");
        block.classList.add("block", color);
        block.onclick = () => {
            let cellList = [block];
            let next = block;
            let previous = block;
            while ((next = next.nextElementSibling) && next.classList.contains(color)){
                cellList.push(next);
            }
            while ((previous = previous.previousElementSibling) && previous.classList.contains(color)){
                cellList.push(previous);
            }
            if (cellList.length > 2){
                cellList.forEach(cell => cell.remove());
                if(container.querySelectorAll(".block") == 0){
                    alert("Has ganado");
                }
            }
        }
        container.appendChild(block);
        if (container.querySelectorAll(".block").length > 100){
            alert("Has perdido");
            container.innerHTML ="";
        }
}

setInterval(createRandomBlock, 1000);