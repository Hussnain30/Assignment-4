let inputBox = document.getElementById('inputbox');
let ullist = document.getElementById('ullist');

function addTask(){
	if(inputBox.value === ''){
		alert("This field can't be empty!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		ullist.appendChild(li); 
	}
	inputBox.value = "";
}
inputBox.addEventListener(
   "keyup",
   function(event) {
   	if (event.key == "Enter") {
   		console.log(this.value)
   		this.value = ""
   	}
   }
)
