import React from 'react';

import '../styles/main.sass';

import img_virus_emoji from '../images/emoji_virus.png';

export default class App extends React.Component {
    render() {
        return (
            <div id="main">
                <h1>Hello World!!!</h1>

                <img src={img_virus_emoji} alt='virus_emoji'/>
            </div>
        );
    }
}
