const age=document.querySelector("#age");
const name=document.querySelector("#name");
const btn=document.querySelector("#btn");

btn.addEventListener(click,()=>{
	if(!age || !name){
		alert("Please enter valid details");
	}
	else{
	    new Promise((resolve,reject)=>{
		if(age>=18){
			setTimeout(()=>{
				resolve(`Welcome, {name}. You can vote.`)
			},4000)
			
		}
		else{
			setTimeout(()=>{
				reject(`Oh sorry {name}. You aren't old enough.`)
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
	

