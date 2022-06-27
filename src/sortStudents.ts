
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

export function averageNumber(grades: number[]) :number {
  return grades.reduce((sum:number, grade:number): number => {
    return sum + grade;
  }, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const sortedStudent = [...students];
  const sortRule: number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case 'name':
    case 'surname':
      sortedStudent.sort((student1, student2) => {
        return student1[sortBy].localeCompare(student2[sortBy]);
      });
      break;
    case 'age':
    case 'married':
      sortedStudent.sort((student1, student2) => {
        return (Number(student1[sortBy]) - Number(student2[sortBy])) * sortRule;
      });
      break;

    case 'grades':
      sortedStudent.sort((student1, student2) => {
        const avgGradesStudent1 = averageNumber(student1.grades);
        const avgGradesStudent2 = averageNumber(student2.grades);

        return (avgGradesStudent1 - avgGradesStudent2) * sortRule;
      });
      break;

    default:
      break;
  }

  return sortedStudent;
}
