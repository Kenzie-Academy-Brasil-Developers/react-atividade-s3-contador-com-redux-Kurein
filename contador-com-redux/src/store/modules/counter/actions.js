import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes";

export function addNumber() {
  return { type: ADD_NUMBER };
}

export function subNumber() {
  return { type: SUB_NUMBER };
}
