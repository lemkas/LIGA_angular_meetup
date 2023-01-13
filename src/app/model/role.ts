export interface IRole {
  name: USER_ROLE.USER | USER_ROLE.ADMIN;
  Id: number;
}

enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
