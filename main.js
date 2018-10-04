function deleteListItem(item) {
    item.parentNode.removeChild(item);
}

function completeListItem(item){
	if(item.checked){
		item.parentNode.style.textDecoration = "line-through";
	} else {
        item.parentNode.style.textDecoration = "none";
	}
}

function addListItem() {
	var x = document.getElementById("grocery-list");
	var elem = document.createElement("li")
	var y = document.getElementById("inp")
	elem.innerHTML = '<input type="checkbox" class="complete-item" onclick="completeListItem(this)">'+y.value + '<button class="delete-item" onclick="deleteListItem(this.parentNode)">X</button>'
	x.appendChild(elem)
    // console.log('hello world');
}