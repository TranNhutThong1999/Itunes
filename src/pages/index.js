import {Route, Switch} from "react-router-dom";
import Home from "./home";
import Header from "../layouts/header";
import 'antd/dist/reset.css';
import NotFound from "./404";

const Pages = () => {
    return<>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/">
                <NotFound/>
            </Route>
        </Switch>
    </>
}

export default Pages