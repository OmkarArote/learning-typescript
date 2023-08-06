// Learning basics of typescript like how to declare a variable, how to define functions and more features of typescript

// VARIABLES

// Primitive data types
let age: number = 25;
let Name: string = "John Doe";
let isStudent: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

// Tuple
let person: [string, number] = ["John Doe", 30];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Blue;

// Any
let dynamicValue: any = "Hello, I could be anything!";
dynamicValue = 42; // No type checking on assignment

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Object
let personObj: { name: string; age: number } = { name: "John Doe", age: 30 };

// Union
let id: string | number = "ABC123"; // can be either a string or a number

// Intersection
type Admin = { name: string; role: string };
type Employee = { id: number; department: string };
let adminEmployee: Admin & Employee = { name: "John Doe", role: "Admin", id: 123, department: "HR" };

// FUNCTIONS
const functionOne = (user: { userName: string; age: number; phone?: number }): string => {
  console.log('functioOne::user:: ', user);
  return '';
}

// TYPES ALIAS
type UserType = {
  userName: string;
  age: number;
  phone?: number
}

// A function that has no return
const functionTwo = (user: UserType): void => {
  console.log('functioTwo::user:: ', user);
  // return '';
}

type NewUserType = {
  userName: string;
  age: number;
  phone?: number;
  theme?: 'light' | 'dark'
}

type myFunc = (user: NewUserType) => void

// Print Users Theme but no return statment allowed
const functionThree: myFunc = (user) => {
  console.log(user.userName, 'has ', user.theme, ' as his theme');
}

// INTERFACES

interface IUser {
  userName: string;
  email?: string;
  phone: number;
  age: number
}

// Extending a interface

interface IEmployee extends IUser {
  employeeID: number
  joinDate: string
}

const emp: IEmployee = {
  userName: 'Omkar',
  phone: 9003936312,
  employeeID: 1122,
  joinDate: '30th July 2023',
  age: 22
}

// GENERICS

interface IAuthor {
  id: number;
  userName: string
}

interface ICategory {
  id: number;
  titel: string
}

interface IPost {
  id: number;
  titel: string;
  desc: string;
  extra: IAuthor[] | ICategory[]
}

interface IBetterPost<T> {
  id: number;
  titel: string,
  desc: string,
  extra: T[]
}

let post: IBetterPost<String> = {
  id: 1122,
  titel: 'Author',
  desc: 'Test Better Post',
  extra: ['Omkar', 'Hemant']
}

let postTwo: IBetterPost<ICategory> = {
  id: 1122,
  titel: 'AuthorTwo',
  desc: 'Test Better Post Two',
  extra: [
    {
      id: 11223,
      titel: 'Nothing'
    }
  ]
}

interface IEvenBetterPost<T extends object> {
  id: number;
  titel: string,
  desc: string,
  extra: T[]
}

let postThree: IEvenBetterPost<{ id: number; titel: string; home: string }> = {
  id: 1122,
  titel: 'AuthorTwo',
  desc: 'Test Better Post Two',
  extra: [
    {
      id: 11223,
      titel: 'Nothing',
      home: 'Kurla'
    }
  ]
}

let postFour: IEvenBetterPost<ICategory> = {
  id: 1122,
  titel: 'AuthorTwo',
  desc: 'Test Better Post Two',
  extra: [
    {
      id: 11223,
      titel: 'Nothing'
    }
  ]
}