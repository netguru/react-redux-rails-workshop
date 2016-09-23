import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

import configureStore from 'store';
import DevTools from 'containers/DevTools';
import Counter from 'containers/Counter';
import CounterModifier from 'containers/CounterModifier';
import UserCreator from 'containers/UserCreator';
import UserTable from 'containers/UserTable';
import RestaurantSearch from 'containers/RestaurantSearch';
import RestaurantCreator from 'containers/RestaurantCreator';
import RestaurantApp from 'containers/RestaurantApp';

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
RWRRedux.registerContainer('RestaurantSearch', RestaurantSearch);
RWRRedux.registerContainer('RestaurantCreator', RestaurantCreator);
RWRRedux.registerContainer('RestaurantApp', RestaurantApp);
