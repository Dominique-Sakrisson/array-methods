const callback = (item) => {
    return item;
}
const map = (( arr, callback) => {
    for(let i = 0; i < arr.length; i++){
       return callback(arr[i]);
    }
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
