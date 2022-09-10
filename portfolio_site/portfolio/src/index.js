import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


document.body.style = 'background: #23272e';


class Base extends React.PureComponent{
    render(){
        return(
            <>
            </>
        );
    }
}

root.render(<Base/>)