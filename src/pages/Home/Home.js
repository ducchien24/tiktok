import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";

import RandomAccount from "./RandomAccount";

import styles from './Home.module.scss'

//services
import { LoginContext } from "~/components/LoginProvider/LoginProvider";

const cx= classNames.bind(styles)

function Home() {
    const {data} = useContext(LoginContext)
    const check = data ? true : false;
    console.log('Home render')
    
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         console.log('Home render-Tim')
    //         b(i=>i+1)
    //     })
    //     console.log('Home render-useEff')
    // },[])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('one-column')}>
                <RandomAccount isCurrentUser={check}/>
            </div>
        </div>
    )
}

export default Home;
