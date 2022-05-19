
export interface Student {
  // describe Student interface
  name : string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
type SortOrder = 'desc' | 'asc';

export function sortStudents(
  students : Array<Student>,
  sortBy : SortType,
  order : SortOrder,
) : Array<Student> {
  // write your function
  const sorted = JSON.parse(JSON.stringify(students));
  const initialValue : number = 0;

  return sorted.sort((person1 : Student, person2 : Student) => {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return person1[sortBy].localeCompare(person2[sortBy]);

      case 'age':

        if (order === 'asc') {
          return person1[sortBy] - person2[sortBy];
        }

        return person2[sortBy] - person1[sortBy];

      case 'grades': {
        const person1Av = (person1.grades.reduce(
          (prev, curr) => prev + curr, initialValue,
        )) / person1.grades.length;
        const person2Av = (person2.grades.reduce(
          (prev, curr) => prev + curr, initialValue,
        )) / person2.grades.length;

        if (order === 'asc') {
          return person1Av - person2Av;
        }

        return person2Av - person1Av;
      }

      case 'married': {
        return +person2[sortBy] - +person1[sortBy];
      }
      default:
        return 0;
    }
  });
}

/*

function sortBy(people: Person[], field: keyof Person) {
  const copy = [...people];
  return copy.sort((person1, person2) => {
    switch(field) {
      case ‘name’:
      case ‘sex’:
        return person1[field].localeCompare(person2[field]);
      case ‘born’:
      case ‘died’:
        return person1[field] - person2[field];
      default:
        return 0;
    }
  });
}

*/
