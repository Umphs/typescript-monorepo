export function run<T>(fn: (x: T) => T, seed: T) {
  return fn(seed);
}

export function compose<T>(...fns: { (x: T): T }[]) {
  return (x: T) => fns.reduce((v, fn) => fn(v), x);
}