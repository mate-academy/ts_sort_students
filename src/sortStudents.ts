// describe Student type
// create and export SortType enum
// create SortOrder type

type SortOrder = 'asc' | 'desc';

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArray: Student[] = [];
  const sum = (prev: number, curr: number): number => {
    return prev + curr;
  };

  students.forEach((student: Student) => {
    sortedArray.push({ ...student });
    sortedArray[sortedArray.length - 1].grades = [...student.grades];
  });

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedArray.sort((prevStudent, nextStudent) => {
          return prevStudent[sortBy].localeCompare(nextStudent[sortBy]);
        });
      } else if (order === 'desc') {
        sortedArray.sort((prevStudent, nextStudent) => {
          return nextStudent[sortBy].localeCompare(prevStudent[sortBy]);
        });
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        sortedArray.sort((prevStudent, nextStudent) => {
          return +prevStudent[sortBy] - +nextStudent[sortBy];
        });
      } else if (order === 'desc') {
        sortedArray.sort((prevStudent, nextStudent) => {
          return +nextStudent[sortBy] - +prevStudent[sortBy];
        });
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        sortedArray.sort((prevStudent, nextStudent) => {
          return prevStudent[sortBy] - nextStudent[sortBy];
        });
      } else if (order === 'desc') {
        sortedArray.sort((prevStudent, nextStudent) => {
          return nextStudent[sortBy] - prevStudent[sortBy];
        });
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedArray
          .sort((studentA, studentB) => (studentA[sortBy].reduce(sum, 0)
              / studentA[sortBy].length)
            - (studentB[sortBy].reduce(sum)
              / studentB[sortBy].length));
      } else if (order === 'desc') {
        sortedArray
          .sort((studentA, studentB) => {
            return (studentB[sortBy].reduce(sum, 0)
              / studentB[sortBy].length)
            - (studentA[sortBy].reduce(sum)
              / studentA[sortBy].length);
          });
      }
      break;
    default:
      throw new Error('Invalid data, pls Enter valid sort data');
  }

  return sortedArray;
}
