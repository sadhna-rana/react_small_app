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
import { makeSelectWeatherLocation, makeSelectWeatherDetails, makeSelectWeatherApiError } from './selectors';
import { requestWeatherDetails } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class WeatherForcaste extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.weatherDetails);
    return (
      <div>
        <Helmet>
          <title>WeatherForcaste</title>
          <meta name="description" content="Description of WeatherForcaste" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div>
          <form name="weather" method="post" action="/" onSubmit={this.props.submitForm} >
            <input type="text" name="city" />
            <Submit type="submit" value="Get Weather Details" />
          </form>
        </div>
      </div>
    );
  }
}

WeatherForcaste.propTypes = {
  city: PropTypes.string,
  submitForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  placename: makeSelectWeatherLocation(),
  weatherDetails: makeSelectWeatherDetails(),
  weatherApiError: makeSelectWeatherApiError(),
});

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (evt) => {
      evt.preventDefault();
      dispatch(requestWeatherDetails(evt.target.city.value));
    },
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
