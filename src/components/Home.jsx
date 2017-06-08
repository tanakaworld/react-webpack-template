import React from 'react';
import img_virus_emoji from '../images/emoji_virus.png';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <h1>Hello World!!!</h1>

                <img src={img_virus_emoji} alt='virus_emoji'/>
            </div>
        );
    }
}
