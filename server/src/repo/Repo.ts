export interface Repo<K, T> {
  delete: (k: K) => void;
  get: (k: K) => T | undefined;
  set: (k: K, v: T) => void;
}

export interface ListableRepo<K, T> extends Repo<K, T> {
  list: () => Array<[K, T]>;
}
