export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  email: string;
  username: string;
  password: string;
}

export interface UpdateUserDto {
  email?: string;
  username?: string;
  password?: string;
}

export interface UserEvent {
  type: 'USER_CREATED' | 'USER_UPDATED' | 'USER_DELETED';
  data: User;
} 