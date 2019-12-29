import { compose } from "@dia/diagram";

export function hello(other: string) {
  return `hello, ${other}`;
}

export function capitalize(word: string) {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
}

export function exclame(phrase: string) {
  return `${phrase} !`;
}

export const greet = compose(hello, capitalize, exclame);
