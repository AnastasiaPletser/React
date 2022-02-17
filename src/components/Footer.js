import React from 'react';
import Link from "./Link";

const Footer = () => {
    return (
        <div className='footer'>
            <p>
                Украина
            </p>
            <div className='footer_link'>
                <div>
                    <Link text={'Всё о Google'}/>
                    <Link text={'Реклама'}/>
                    <Link text={'Для бизнеса'}/>
                    <Link text={'Как работает Google Поиск'}/>
                </div>
                <div>
                    <Link text={'Конфиденциальность'}/>
                    <Link text={'Условия'}/>
                    <Link text={'Настройки'}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
