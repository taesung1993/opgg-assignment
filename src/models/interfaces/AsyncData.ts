export interface Success<T> {
  status: 'success';
  data: T;
}

export interface Error {
  status: 'error';
  data: string;
}

export interface Loading {
  status: 'loading';
  data: null;
}

export type AsyncData<T> = Success<T> | Loading | Error;
