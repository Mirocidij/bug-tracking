import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from './actions'
import { Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;
const Handle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  background-color: orange;
  margin-right: 8px;
`;
const UserInfo = styled.div`
  display: flex;;
`;

class Users extends React.Component {
  render() {

    const {
      users,
      actions: {
        getAllUsers
      }
    } = this.props;

    return (
      <>
        {
          users.map(user => (
            <Container key={user.id}>
              <Handle/>
              <UserInfo>
                <div>
                  {`${user.id} ${user.username} ${user.firstName} ${user.lastName} ${user.email}`}
                </div>
              </UserInfo>
            </Container>
          ))
        }
        <Button
          onClick={getAllUsers}
          variant="outline-info"
        >
          Load users
        </Button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);