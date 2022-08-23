
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsList: Student[] = [...students];
  const getAverageGrade = (student: Student): number => {
    const gradesSum = student.grades.reduce((sum, grade) => sum + grade, 0);

    return gradesSum / student.grades.length;
  };
  let sortFunction: (a: Student, b: Student) => number;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortFunction = (student1, student2): number => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      };
      break;

    case SortType.Age:
    case SortType.Married:
      sortFunction = (student1, student2): number => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      };
      break;

    case SortType.AverageGrade:
      sortFunction = (student1, student2): number => {
        return order === 'asc'
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);
      };
      break;

    default: throw new Error('Wrong parameter');
  }

  return studentsList.sort(sortFunction);
}
