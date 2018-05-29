/**
 *
 * MessageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMessageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MessageContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Socket io react</title>
          <meta name="description" content="Socket io messaging" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MessageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  messagecontainer: makeSelectMessageContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'messageContainer', reducer });
const withSaga = injectSaga({ key: 'messageContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MessageContainer);
