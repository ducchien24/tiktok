import * as requestHttps from '~/utils/httpRequest'

const login = async (email,password) => {
    try {
        const res = await requestHttps.post('auth/login',{
            email,
            password
        })
        // console.log(res)
        return res;
    } catch (error) {
        console.log('ErrorLogin: ', error)
    }
}

const logout = async () => {
    console.log(localStorage.getItem('token'))
    try {
        await requestHttps.post('auth/logout',{},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
    } catch (error) {
        console.log(`Error Log out: ${error}`)
    }
}

export {login,logout}