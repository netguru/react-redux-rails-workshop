import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

import configureStore from 'store';
import DevTools from 'containers/DevTools';
import Counter from 'containers/Counter';
import CounterModifier from 'containers/CounterModifier';
import UserCreator from 'containers/UserCreator';
import UserTable from 'containers/UserTable';
import RestaurantView from 'components/RestaurantView';
import RestaurantCreator from 'containers/RestaurantCreator';
import RestaurantAppProvider from 'containers/RestaurantAppProvider';

RWR.run();

integrationsManager
  .register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager
  .register('redux-container', RWRRedux.containerIntegrationWrapper);

RWRRedux.registerStore('Store', configureStore);

RWRRedux.registerContainer('DevTools', DevTools);
RWRRedux.registerContainer('Counter', Counter);
RWRRedux.registerContainer('CounterModifier', CounterModifier);
RWRRedux.registerContainer('UserCreator', UserCreator);
RWRRedux.registerContainer('UserTable', UserTable);
RWR.registerComponent('RestaurantView', RestaurantView);
RWRRedux.registerContainer('RestaurantCreator', RestaurantCreator);
RWRRedux.registerContainer('RestaurantAppProvider', RestaurantAppProvider);
