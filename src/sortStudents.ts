
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'isMarried',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function avagareGrade(student: Student) : number {
  return student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
}

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
) : Student [] {
  const studentCopy = [...students];

  studentCopy.sort((firstStudent, secondStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;

      case SortType.AverageGrade:
        return order === 'asc'
          ? avagareGrade(firstStudent) - avagareGrade(secondStudent)
          : avagareGrade(secondStudent) - avagareGrade(firstStudent);

      case SortType.Married:
        return order === 'asc'
          ? Number(firstStudent.married) - Number(secondStudent.married)
          : Number(secondStudent.married) - Number(firstStudent.married);

      default:
        return 0;
    }
  });

  return studentCopy;
}
