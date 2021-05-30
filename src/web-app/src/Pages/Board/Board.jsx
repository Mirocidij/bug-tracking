import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions';
import { Button } from 'react-bootstrap';

class Board extends React.Component {

    render() {

        const {
            boardDataIsLoading,
            boardData,
            actions: {
                loadBoardData
            }
        } = this.props;

        return (
            <>
                <Button onClick={loadBoardData}>Test</Button>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.boards
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

export default connect()(Board);