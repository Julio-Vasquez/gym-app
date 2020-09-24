import { Store } from "./store";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const store = Store(history);
