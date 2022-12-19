export interface IRole {
  names: [USER_ROLE.USER, USER_ROLE.ADMIN?];
  userId: number;
}

enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
