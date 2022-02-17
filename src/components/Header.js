import React from 'react';
import Link from "./Link";
import Button from "./Button";

const Header = () => {
    return (
        <div className='header'>
            <Link text={'Почта'}/>
            <Link text={'Картинки'}/>
            <Button text = {'Приложения'}/>
            <Button text = {'Аккаунт'}/>
        </div>
    );
};

export default Header;
