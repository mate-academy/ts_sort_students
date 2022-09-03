
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
  Married = 'maried',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return firstStuden.name.localeCompare(secondStudent.name);
        })
        : copy.sort((firstStuden, secondStudent) => {
          return secondStudent.name.localeCompare(firstStuden.name);
        });
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return firstStuden.surname.localeCompare(secondStudent.surname);
        })
        : copy.sort((firstStuden, secondStudent) => {
          return secondStudent.surname.localeCompare(firstStuden.surname);
        });
    case SortType.Age:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return firstStuden.age - secondStudent.age;
        })
        : copy.sort((firstStuden, secondStudent) => {
          return secondStudent.age - firstStuden.age;
        });
    case SortType.Married:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return +(firstStuden.married) - +(secondStudent.married);
        })
        : copy.sort((firstStuden, secondStudent) => {
          return +(secondStudent.married) - +(firstStuden.married);
        });
    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return firstStuden.grades
            .reduce((a, b) => a + b) / firstStuden.grades.length
             - secondStudent.grades
               .reduce((a, b) => a + b) / secondStudent.grades.length;
        })
        : copy.sort((firstStuden, secondStudent) => {
          return secondStudent.grades
            .reduce((a, b) => a + b) / secondStudent.grades.length
             - firstStuden.grades
               .reduce((a, b) => a + b) / firstStuden.grades.length;
        });

    default:
      return copy;
  }
}
