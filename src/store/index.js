import { createBrowserHistory } from 'history';
import { Store } from './store';

export const history = createBrowserHistory();

export const store = Store(history);
