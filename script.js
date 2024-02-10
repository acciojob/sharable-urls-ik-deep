// your code here
function changeUrl(){
	const name = document.getElementById("name");
	const year = document.getElementById("year");
	const url = document.getElementById("url");

	let newText = "https://localhost:8080/";
	if(name.value.length >0 && year.value.length>0){
		newText +="?"+name.value+"?"+year.value; 
	}else if(name.value.length >0 && year.value.length<=0){
	    newText+="?"+name.value;
	}else if(name.value.length <=0 && year.value.length>0){
		newText+="?"+year.value;
	}else{
		newText= "https://localhost:8080/";
	}
	url.innerHTML = newText;
}