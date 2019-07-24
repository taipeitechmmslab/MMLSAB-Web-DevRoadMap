export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//使用function寫法
export function increment() {
  return { type: INCREMENT };
}

//使用Arrow function寫法
export const decrement = () => ({ type: DECREMENT });