// const p1=new Promise((resolve,reject) => {
//     setTimeout(() => resolve("p1 sucess"),3000);
        
// })
// const p2=new Promise((resolve,reject) => {
//     setTimeout(() => resolve("p2 sucess"),1000);
//     // setTimeout(() => reject("p2 Fail"),1000);
        
// })
// const p3=new Promise((resolve,reject) => {
//         setTimeout(() => resolve("p3 sucess"),2000);
            
// })

// Promise.any([p1,p2,p3]).then(res =>{
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });
const p = new Promise((resolve,reject)=>{
    resolve("hi");
});

async function handlePromise() {
   const val = await p;
   console.log(val);
}
 handlePromise();
// const data =getData();

// data.then((res)=>console.log(res));