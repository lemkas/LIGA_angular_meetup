import { IUser } from './user';

export interface IMeetup {
  id: number;
  description: string;
  location: string;
  target_audience: string;
  need_to_know: string;
  will_happen: string;
  reason_to_come: string;
  time: string;
  duration: number;
  createdBy: number;
  owner: IUser;
  users: IUser[];
}
