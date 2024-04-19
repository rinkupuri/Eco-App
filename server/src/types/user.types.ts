export type UserResponse = {
  user: {
    id?: string;
    name: string;
    email: string;
    password: string;
    avatar?: {
      public_id: string;
      url: string;
    };
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
};
