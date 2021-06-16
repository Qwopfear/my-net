import s from './Header.module.css';


const Header = () =>{
    return(
        <header className={s.header} >
            <img src="https://storage.vsemayki.ru/images/0/1/1608/1608699/previews/people_1_sign_front_white_500.jpg" alt="" srcset=""/>
            <input type="text" placeholder='What`s new you have?' />
        </header>
    )
}

export default Header;