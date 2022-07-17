'use strict'
/*eslint-disable*/
const students = [
  {
    name: 'Diana',
    surname: 'Dorsey',
    age: 24,
    married: false,
    grades: [3, 3, 4, 5, 4, 3, 5, 5],
  },
  {
    name: 'Christina',
    surname: 'Branscome',
    age: 23,
    married: true,
    grades: [4, 4, 4, 5, 5, 5, 5, 5],
  },
  {
    name: 'Willie',
    surname: 'Barrera',
    age: 22,
    married: false,
    grades: [3, 5, 5, 3, 3, 5, 4, 4],
  },
  {
    name: 'Douglas',
    surname: 'Paez',
    age: 23,
    married: true,
    grades: [5, 5, 5, 4, 5, 5, 5, 5],
  },
  {
    name: 'Richard',
    surname: 'Hall',
    age: 23,
    married: false,
    grades: [3, 2, 4, 5, 4, 3, 3, 3],
  },
  {
    name: 'Dale',
    surname: 'Gandy',
    age: 23,
    married: false,
    grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
  },
  {
    name: 'Lillian',
    surname: 'Quinn',
    age: 23,
    married: false,
    grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
  },
  {
    name: 'Jessica',
    surname: 'Buxton',
    age: 26,
    married: true,
    grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
  {
    name: 'Pamela',
    surname: 'Casillas',
    age: 24,
    married: false,
    grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
  },
  {
    name: 'Glenn',
    surname: 'Thompson',
    age: 22,
    married: false,
    grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
  },
];

function sortStudents(students, sortBy, order) {
  // write your function
  let callback;

  const stringHandler = (param = sortBy) => {
    console.log(param , order)
    callback = (a, b) => order ==='asc' ? a[`${param}`].localeCompare(b[param]): b[`${param}`].localeCompare(a[param])
  }

  if(sortBy ==='age') {
    callback = (a, b) =>order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
  }
  else if(sortBy === 'grades') {
 
    callback = (a, b) =>{
      let sum1 = a.grades
        .reduce((prev,curr)=>prev + curr);

      let sum2 = b.grades
        .reduce((prev,curr)=>prev + curr);

      if(order === 'asc') {
        return sum1/a.grades.length - sum2/b.grades.length;
      }else {
        return sum2/b.grades.length - sum1/a.grades.length;
      }
    }
  }else if(sortBy === 'married') {
    //changes
    const married = students.filter((student) => student.married);
    const single = students.filter((student) => !student.married);

    stringHandler('name');


    return [...married.sort(callback), ...single];
  } else {
    stringHandler();
  }
  return students.sort(callback)
}

console.log(sortStudents(students, 'married', 'desc'));