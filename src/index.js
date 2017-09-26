import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from 'material-ui';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router';
import configureStore, {history} from './store';
import {Provider} from 'react-redux';
import List from './container/List';


registerServiceWorker();

const store = configureStore();

ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path='/' component={App}/>
            <Route path='/list' component={List}/>
          </div>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
,
document.getElementById('root')
);
