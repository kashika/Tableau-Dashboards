import React, { Component } from 'react';
import './Tile.css';

export default class back extends React.Component {
    render() {

        return (
            <div class="componentTile">
                <div className="tile" onClick={function() { window.open("http://localhost:3000/", "_blank");}}>
                    {this.props.tileName}
                </div>
                <div>
                </div>
            </div>
        );
    }
}