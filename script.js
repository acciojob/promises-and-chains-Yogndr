const age=document.querySelector("#age");
const name=document.querySelector("#name");
const btn=document.querySelector("#btn");

btn.addEventListener(click,()=>{
	if(!age || !name){
		alert("Please enter valid details");
	}
	else{
	return new Promise((resolve,reject)=>{
		if(age>=18){
			setTimeout(()=>{
				resolve(alert(`Welcome, {name}. You can vote.`))
			},4000)
			
		}
		else{
			setTimeout(()=>{
				reject(alert(`Oh sorry {name}. You aren't old enough.`))
			},4000)
			
		}
		
		
	})
})
	
}
