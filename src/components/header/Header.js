import './Header.scss';

const Header = () => {
    return (
        <header class="header">
            <div class="container">
                <div class="header__content">
                    <div class="header__content__title">
                        <h1 class="title">Клавиатурный тренажер</h1>
                        <p class="sub_title">Проверь скорость своей печати</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;