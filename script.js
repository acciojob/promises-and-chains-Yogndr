const age=document.querySelector("#age");
const name=document.querySelector("#name");
const btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{

	const ageValue = parseInt(age.value);
    const nameValue = name.value.trim();
	if(!ageValue || !nameValue){
		alert("Please enter valid details");
		return;
	}
	else{
	    new Promise((resolve,reject)=>{
		if(ageValue>=18){
			setTimeout(()=>{
				resolve(`Welcome, ${name}. You can vote.`)
			},4000)
			
		}
		else{
			setTimeout(()=>{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			},4000)
			
		}
		
		
	}).
       then((msg)=>{
		   alert(msg)
	   }).
			catch((error)=>{
				alert(error)
			})
			
			}
})
	

