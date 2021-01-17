import React, { Component } from 'react'
import Header from './common/Header';
import { GlobalstyleIcon } from './statics/iconfont/iconfont';
import { Globalstyle } from './style'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
               <Globalstyle/>
               <GlobalstyleIcon/>
            </div>
        )
    }
}

export default App;