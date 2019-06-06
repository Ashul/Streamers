import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamCreate from './stream/StreamCreate';
import StreamDelete from './stream/StreamDelete';
import StreamEdit from './stream/StreamEdit';
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
   return (
        <div >
            <Router history={history}>
                <Header/>
                <div className="container">
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/delete" exact component={StreamDelete}/>
                <Route path="/streams/edit" exact component={StreamEdit}/>
                <Route path="/streams/show" exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    )
}

export default App