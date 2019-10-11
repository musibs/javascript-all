import React from 'react';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import PageNotFound from './components/NotFound';
import Callback from './components/Callback';
import NotFound from './components/NotFound';

function App(props) {

  let mainComponent = ""
  switch(props.location){
    case "":
      mainComponent = <Main {...props}/>
      break
    case "secret":
      mainComponent = props.auth.isAuthenticated() ? <Secret {...props} /> : <NotFound />
      break
    case "callback":
      mainComponent = <Callback {...props} />
      break;
    default:
      mainComponent = <PageNotFound {...props} />
      break;
  }
  return (
    <div className="App">
      <h1>Hello {props.name}</h1>
      {mainComponent}
    </div>
  );
}

export default App;
