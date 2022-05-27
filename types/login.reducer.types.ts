export interface Login {
  result: string;
  isFetching: boolean;
  isFailed: boolean;
  token: string;
  username: string;
  prefix: string;
  message: "";
}
