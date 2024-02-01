import { createContext, useContext, useState } from 'react';

import { auth } from '~/services';

import { ModalContext } from '../ModalProvider';

export const LoginContext = createContext(null);

function LoginProvider({ children }) {
    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);

    const {handleCloseModal} = useContext(ModalContext);
    const fetchApi = async (email,password) => {
        setIsLoading(true);
        setIsError(false);
        const res = await auth.login(email,password);

        if(res) {
            setData(res.data)
            localStorage.setItem('token',res.meta.token);
            setIsLoading(false)
            handleCloseModal()
            // setTimeout(() => {
            // },2500)
        }else {
            setIsLoading(false);
            setIsError(true);
        }
    }

    const handleDeleteData = () => {
        setData(null)
    }

    const handleSetData = (data) => {
        setData(data)
    }
    const value = {
        data,
        isLoading,
        isError,
        fetchApi,
        setIsError,
        handleSetData,
        handleDeleteData
    };
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export default LoginProvider;
