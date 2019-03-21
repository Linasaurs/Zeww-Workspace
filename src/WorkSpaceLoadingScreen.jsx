import React from "react";

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <div id="loading-bg">
                <img class="loading-img" src={require('./imgs/logoplaceholder.svg')} />
            </div>
        )
    }
}