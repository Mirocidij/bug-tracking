import React from "react";
import {bindActionCreators} from 'redux'
import * as actions from './redux/actions'
import {connect} from 'react-redux'
import {Button, Container, Form, Spinner} from "react-bootstrap";

class LoginForm extends React.Component {

    render() {
        const {
            isDataLoading,
            actions: {
                sendLoginRequest
            }
        } = this.props;

        let handleSubmit = (e) => {
            e.preventDefault();

            sendLoginRequest();
        }

        return (
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="fromLoginEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Введите email" />
                    </Form.Group>
                    <Form.Group controlId="formLoginPassword">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>

                    {isDataLoading
                        ? <Spinner animation="border" variant="primary" role="status" />
                        : <Button
                            variant="primary"
                            type="submit"
                        >
                            Войти!
                        </Button>
                    }
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.login
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);