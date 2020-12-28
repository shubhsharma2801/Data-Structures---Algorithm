/** */
const putOrDefault = (hashMap, element, def) => {
  if (hashMap.has(element)) {
    let count = hashMap.get(element);
    hashMap.set(element, ++count);
  } else {
    hashMap.set(element, def);
  }
};
const distinceElementEveryWindow = (array, k) => {
  let hashMap = new Map();
  for (let i = 0; i < k; i++) {
    putOrDefault(hashMap, array[i], 1);
  }
  console.log(hashMap.size);
  for (let i = k; i < array.length; i++) {
    let count = hashMap.get(array[i - k]);
    if (count === 1) {
      hashMap.delete(array[i - k]);
    } else {
      hashMap.set(array[i - k], --count);
    }
    putOrDefault(hashMap, array[i], 1);
    console.log(hashMap.size);
  }
};

distinceElementEveryWindow([1, 2, 1, 3, 4, 2, 3], 4);
