export interface Repo<K, T> {
  delete: (k: K) => void;
  get: (k: K) => T | undefined;
  set: (k: K, v: T) => void;
}
