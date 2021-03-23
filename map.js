const callback = (item) => {
   return item;
}
const map = (( arr, callback) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== null && arr[i] !== undefined){
            newArr[i] = callback(arr[i], i);
        }
    }
    return newArr;
})  

// const filter = ((arr, callback) => {
//     let desiredItems = 
//     for(let i = 0; i < arr.length; i++){

//     }
// })


module.exports= {
    callback,
    map
}
