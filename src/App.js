import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import style from './App.css'
// components
import Product from './pages/Product'
import Infomation from './pages/Information'
import ShopCart from './pages/ShopCart'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <Router>
                <div className={style.app}>
                    <Switch>
                        <Route exact path="/" component={Product}></Route>
                        <Route path="/product" component={Product}></Route>
                        <Route path="/info" component={Infomation}></Route>
                        <Route path="/shopcar" component={ShopCart}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App