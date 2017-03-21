
function countElements(array){
  if(array.length <= 0) return 0;
  else return 1 + countElements(array.slice(1));
}

function deepCountElements(array){
  var count = 0;
  var queue = [];
  queue.push(array);
  while(queue.length){
    let curEl = queue.shift();
    if(Array.isArray(curEl)){
      for(let i = 0; i < curEl.length; i++){
        queue.push(curEl[i]);
      }
    } else count++;
  }
  return count;
}

function deepCountElementsRecurse(array){
  if(array.length <= 0) return 0;
  else if(Array.isArray(array[0])){
    return deepCountElementsRecurse(array[0]) + deepCountElementsRecurse(array.slice(1));
  } else{
    return 1 + deepCountElementsRecurse(array.slice(1));
  }
}
