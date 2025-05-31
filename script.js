// const age=document.querySelector("#age");
// const name=document.querySelector("#name");
// const btn=document.querySelector("#btn");

// btn.addEventListener("click",()=>{

// 	const ageValue = parseInt(age.value);
//     const nameValue = name.value.trim();
// 	if(!ageValue || !nameValue){
// 		alert("Please enter valid details");
// 		return;
// 	}
// 	else{
// 	    new Promise((resolve,reject)=>{
// 		if(ageValue>=18){
// 			setTimeout(()=>{
// 				resolve(`Welcome, ${name}. You can vote.`)
// 			},4000)
			
// 		}
// 		else{
// 			setTimeout(()=>{
// 				reject(`Oh sorry ${name}. You aren't old enough.`)
// 			},4000)
			
// 		}
		
		
// 	}).
//        then((msg)=>{
// 		   alert(msg)
// 	   }).
// 			catch((error)=>{
// 				alert(error)
// 			})
			
// 			}
// })
	


const age = document.querySelector("#age");
const name = document.querySelector("#name");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const ageValue = parseInt(age.value);
  const nameValue = name.value.trim();

  // Input Validation
  if (!nameValue || isNaN(ageValue)) {
    alert("Please enter valid details");
    return;
  }

  // Promise Logic
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageValue >= 18) {
        resolve(`Welcome, ${nameValue}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameValue}. You aren't old enough.`);
      }
    }, 4000);
  })
  .then((msg) => {
    alert(msg);
  })
  .catch((error) => {
    alert(error);
  });
});
