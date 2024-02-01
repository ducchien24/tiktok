import { generalOptions } from '..';
import MenuForms from '../MenuForms';

function MenuRegisterForm() {
    const registerOptions = {
        title: 'Sign up for TikTok',
        options: [
            ...generalOptions,
        ],
    };
    return (
        <MenuForms data={registerOptions} registerList/>
    );
}

export default MenuRegisterForm;
