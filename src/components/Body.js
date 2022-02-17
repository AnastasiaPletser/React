import React from 'react';
import Input from "./Input";
import Link from "./Link";
import Button from "./Button";

const Body = () => {
    return (
        <div className='body'>
            <div>
            <img src='https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' className='logo'/>    
            </div>
            <div>
            <Input />    
            </div>
            
           <div className='button'>
               <Button text = {'Поиск в Google'}/>
               <Button text={'Мне повезёт!'}/>
           </div>
            <p className='info-text'>Сервисы Google доступны на этих языках:
                <Link text={'English'} />
                <Link text={'українська'} />
            </p>
        </div>
    );
};

export default Body;
