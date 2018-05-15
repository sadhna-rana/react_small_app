/**
 *
 * WeatherForcaste
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Submit from 'components/Submit';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWeatherForcaste from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class WeatherForcaste extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>WeatherForcaste</title>
          <meta name="description" content="Description of WeatherForcaste" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div>
          <form name="weather" method="post" action="/" >
            <input type="text" name="location" ref={(input) => { this.myField = input; }} onChange={this.props.submitForm} />
            <Submit type="submit" value="Get Weather Details" />
          </form>
        </div>
      </div>
    );
  }
}

WeatherForcaste.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weatherforcaste: makeSelectWeatherForcaste(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'weatherForcaste', reducer });
const withSaga = injectSaga({ key: 'weatherForcaste', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WeatherForcaste);
