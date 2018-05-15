/**
 *
 * Asynchronously loads the component for WeatherForcaste
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
