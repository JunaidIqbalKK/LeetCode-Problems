const arrayOfObjects = [
  { id: 3 },
  { id: 7 },
  { id: 3 },
  { id: 2 },
  { id: 4 },
  { id: 6 },
  { id: 5 },
  { id: 2 },
  { id: 1 },
  { id: 2 },
];
let newArr = [];
newArr.push(arrayOfObjects[0]);
for (let index = 1; index < arrayOfObjects.length; index++) {
  let id = arrayOfObjects[index].id;
  let isUnique = true;
  for (let j = 0; j < newArr.length; j++) {
    if (id === newArr[j].id) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    newArr.push(arrayOfObjects[index]);
  }
}

console.log(newArr);
