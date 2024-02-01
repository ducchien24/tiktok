import { AuthIcon, FacebookIcon, GoggleIcon, KakaoTalkIcon, LineIcon, TwitterIcon } from '~/components/Icons'

const handleOpenLoginForm = (setTypeForm) => {
    setTypeForm('login-form') 
}

export const generalOptions = [
    {
        title:'Use phone / email / username',
        icon : <AuthIcon/>,
        disabled: false,
        login: handleOpenLoginForm,
    },
    {
        title:'Continue with Facebook',
        icon : <FacebookIcon/>,
        disabled: true,
    },
    {
        title:'Continue with Google',
        icon : <GoggleIcon/>,
        disabled: true,
    },
    {
        title:'Continue with Twitter',
        icon : <TwitterIcon/>,
        disabled: true,
    },
    {
        title:'Continue with LINE',
        icon : <LineIcon/>,
        disabled: true,
    },
    {
        title:'Continue with KakaoTalk',
        icon : <KakaoTalkIcon/>,
        disabled: true,
    },
]

export {default as MenuLoginForm} from './MenuLoginForm'
export {default as MenuRegisterForm} from './MenuRegisterForm'

