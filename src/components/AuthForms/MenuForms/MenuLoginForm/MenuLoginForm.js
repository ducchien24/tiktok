import { generalOptions } from '..';
import MenuForms from '../MenuForms';
import { AppleIcon, InsIcon, QRIcon } from '~/components/Icons';


function MenuLoginForm() {
    const loginOptions = {
        title: 'Log in to TikTok',
        options: [
            {
                title: 'Use QR code',
                icon: <QRIcon />,
                disabled: true,
            },
            ...generalOptions,
            {
                title:'Continue with Apple',
                icon : <AppleIcon/>,
                disabled: true,
            },
            {
                title:'Continue with Instagram',
                icon : <InsIcon/>,
                disabled: true,
            },
        ],
    };
    return (
        <MenuForms data={loginOptions} loginList/>
    );
}

export default MenuLoginForm;
