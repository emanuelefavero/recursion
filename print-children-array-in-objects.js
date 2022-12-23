// It would be hard to write a function that prints all the children of a parent object.
// With recursion we can do that easily.
const data = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: [],
    },
    {
      name: 'Zoe',
      children: [
        { name: 'Kyle', children: [] },
        { name: 'Sophia', children: [] },
      ],
    },
  ],
}

function printChildren(parent) {
  if (parent.children.length === 0) {
    return
  }
  parent.children.forEach((child) => {
    console.log(child.name)
    printChildren(child)
  })
}

printChildren(data)
/*
Jim
Zoe
Kyle
Sophia
*/
