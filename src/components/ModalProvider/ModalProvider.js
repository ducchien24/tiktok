import { createContext, useState } from "react";

export const ModalContext = createContext(null)

function ModalProvider({children}) {
    const [isOpen,setIsOpen] = useState(false);
    const [typeForm,setTypeForm] = useState('login-list');
    const [relateForm,setRelateForm] = useState('login-register');

    const body = document.querySelector('body');
    
    const handleOpenModal = (modal='') => {
        setIsOpen(true)
        switch(modal) {
            case 'login-register':
                setTypeForm('login-list')
                setRelateForm('login-register');
                break;
            case 'logout':
                setRelateForm('logout');
                break;
            default:
                console.log('error set modal type')
                break;
        }
        body.classList.add('hidden');
    }
    const handleCloseModal = () => {
        setIsOpen(false)
        body.classList.remove('hidden');
    }

    const value ={
        isOpen,
        typeForm,
        relateForm,
        setTypeForm,
        setRelateForm,
        handleOpenModal,
        handleCloseModal,
    }
    return ( 
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
}

export default ModalProvider;