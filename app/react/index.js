import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

import configureStore from './store';
import DevTools from './containers/DevTools';
import Counter from './containers/Counter';
import CounterModifier from './containers/CounterModifier';

RWR.run();

integrationsManager
  .register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager
  .register('redux-container', RWRRedux.containerIntegrationWrapper);

RWRRedux.registerStore('Store', configureStore);

RWRRedux.registerContainer('DevTools', DevTools);
RWRRedux.registerContainer('Counter', Counter);
RWRRedux.registerContainer('CounterModifier', CounterModifier);
