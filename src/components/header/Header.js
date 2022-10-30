import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__content__title">
                        <h1 className="title">Клавиатурный тренажер</h1>
                        <p className="sub_title">Проверь скорость своей печати</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;