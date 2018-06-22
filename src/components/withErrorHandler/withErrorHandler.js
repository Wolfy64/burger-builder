import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";
// import axios from '../../axios-orders'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });
      axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error: error });
        }
      );
    }

    errorCofirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <React.Fragment>
          <Modal
            modalClosed={this.errorCofirmedHandler}
            show={this.state.error}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
