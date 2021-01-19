// create_Element_with_txt
function cewt(tname, txt) {
    var hshs = document.createElement(tname);
    var otxt = document.createTextNode(txt);
    hshs.appendChild(otxt);
    return hshs;
}

function insertAfter(newNode1, oldNode1) {
    //先判斷oldNode1是否是最後一個節點
    var parent1 = oldNode1.parentNode;
    if (oldNode1 == parent.lastChild) {
        //若是最後一個節點，直接插入到子節點的末尾
        parent1.appendChild(newNode1);
    } else {
        //否則插入到oldNode1 的下一個節點之前
        parent1.insertBefore(newNode1, oldNode1.nextSibling);
    }
}
