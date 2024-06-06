import { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from '../axiosInstance';
import type { UserType, AxiosResponseType, UserFormDataType, UserFromServerType } from '../types/userTypes';
import axios, { AxiosError } from 'axios';


export default function useAuth() {

    const [user, setUser] = useState<UserType | null >();

    useEffect(() => {
        axiosInstance<UserFromServerType>('/tokens/refresh')
          .then(({ data }) => {
            setUser(data.user);
            setAccessToken(data.accessToken);
          })
          .catch(() => {
            setUser(null);
            setAccessToken('');
          });
      });
    

    const signUpHandler = async(formData: UserFormDataType) => {
    try {
        const {data} = await axios.post<UserFromServerType>('/auth/sigup', formData);
        setUser(data.user);
        setAccessToken(data.accessToken);
    } catch (error) {
        const axiosError = error as AxiosError<{message: string}>;
        alert(axiosError.response?.data.message || 'Oops!')
    }
    }

  return (
    <div>useAuth</div>
  )
}
