// export class TodoItem {
//   description: string;
//   action: string;
//   id: number;

//   constructor(description: string, action: string, id: number) {
//     this.description = description;
//     this.action = action;
//     this.id = id;
//   }
// }

// export class TodoItem {
//   constructor(
//     public id: number,
//     public description: string,
//     public action: boolean
//   ) {
//     this.description = description;
//     this.action = action;
//     this.id = id;
//   }
// }
export interface TodoItem {
  description: string;
  action: boolean;
}
