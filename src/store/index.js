import { Store } from "./Store";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const store = Store(history);
