import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>Главная</li>
                        <li>Товары</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;