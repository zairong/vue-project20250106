// 定義 Person 介面 包含 id, name, age 屬性

export interface Person {
  id: string
  name: string
  age: number,
  gender?: string // ?代表可選屬性
}
/*
  自定義類型
  Persons 和 Persons2 是等價的，都是 Person 陣列
*/
export type Persons = Person[]
export type Persons2 = Array<Person>

// 定義泛型 T 為 Person 介面
export type PersonList<T> = T[]

interface Student extends Person {
  studentId: string
}

interface Teacher extends Person {
  teacherId: string
}
