import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <h1 className="section-title">Вход</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Логин' required/>
                    <input type="text" placeholder='Пароль' required/>

                    <button className='contact-submit'>Отправить</button>
                </form>
            </section>
        );
    }
}

export default Login;
