export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = "asc" | "desc";

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder
): Student[] {
  const compareFunction = (a: Student, b: Student) => {
    let aValue, bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;
      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;
      case SortType.AverageGrade:
        aValue = calculateAverageGrade(a.grades);
        bValue = calculateAverageGrade(b.grades);
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return order === "asc" ? -1 : 1;
    if (aValue > bValue) return order === "asc" ? 1 : -1;
    return 0;
  };

  const sortedStudents = [...students];
  sortedStudents.sort(compareFunction);
  return sortedStudents;
}

function calculateAverageGrade(grades: number[]): number {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

const students = [
  {
    name: "Diana",
    surname: "Dorsey",
    age: 24,
    married: false,
    grades: [3, 3, 4, 5, 4, 3, 5, 5],
  },
  {
    name: "Christina",
    surname: "Branscome",
    age: 23,
    married: true,
    grades: [4, 4, 4, 5, 5, 5, 5, 5],
  },
  {
    name: "Willie",
    surname: "Barrera",
    age: 22,
    married: false,
    grades: [3, 5, 5, 3, 3, 5, 4, 4],
  },
  {
    name: "Douglas",
    surname: "Paez",
    age: 23,
    married: true,
    grades: [5, 5, 5, 4, 5, 5, 5, 5],
  },
  {
    name: "Richard",
    surname: "Hall",
    age: 23,
    married: false,
    grades: [3, 2, 4, 5, 4, 3, 3, 3],
  },
  {
    name: "Dale",
    surname: "Gandy",
    age: 23,
    married: false,
    grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
  },
  {
    name: "Lillian",
    surname: "Quinn",
    age: 23,
    married: false,
    grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
  },
  {
    name: "Jessica",
    surname: "Buxton",
    age: 26,
    married: true,
    grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
  {
    name: "Pamela",
    surname: "Casillas",
    age: 24,
    married: false,
    grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
  },
  {
    name: "Glenn",
    surname: "Thompson",
    age: 22,
    married: false,
    grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
  },
];

// console.log(sortStudents(students, SortType.Name, "asc"));
// console.log('calculateAverageGrade',calculateAverageGrade(students[0].grades));
