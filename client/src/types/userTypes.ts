export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type UserFormDataType = {
  name: string;
  email: string;
  password: string;
};



export type UserFromServerType = {
  user: UserType;
  accessToken: string;
};

export type AxiosResponseType = {
  data: UserFromServerType;
};

