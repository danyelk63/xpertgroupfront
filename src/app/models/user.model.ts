import { isoDate, role, UUID } from './common';

//////////////////////////////////////////////////////
/////////////////// Api interfaces ///////////////////
//////////////////////////////////////////////////////

export interface IUser {
  id?: UUID;
  name: string;
  email: string;
  password: string;
  createdAt: isoDate;
  updatedAt: isoDate;
  isActive: boolean;
  role: role;
  lastLogin: isoDate;
}

//////////////////////////////////////////////////////
//////////////////// Api adapters ////////////////////
//////////////////////////////////////////////////////

export class User {
  id?: UUID;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  role: role;
  lastLogin: Date;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.createdAt = new Date(user.createdAt);
    this.updatedAt = new Date(user.updatedAt);
    this.isActive = user.isActive;
    this.role = user.role;
    this.lastLogin = new Date(user.lastLogin);
  }
}
