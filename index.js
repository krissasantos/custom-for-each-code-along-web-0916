// function forEach(iterable, callback) {
//   if (Array.isArray(iterable)){
//     for (let i = 0, l = iterable.length; i < l; i++){
//       var element = iterable[i]
//       callback(element, i, iterable)
//     }
//   } else if (typeof iterable === 'object'){
//     for (var key in iterable){
//       var value = iterable[key]
//       callback (value, key, iterable)
//     }
//   }
// }

function forEach(iterable, callback) {
  if (Array.isArray(iterable)){
    for (let i = 0, l = iterable.length; i < l; i++){
    
      callback(iterable[i], i, iterable)
    }
  } else if (typeof iterable === 'object'){
    for (var key in iterable){
   
      callback (iterable[key], key, iterable)
    }
  }
}