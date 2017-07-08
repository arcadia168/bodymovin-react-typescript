import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    ReactBodymovinContainer
} from '../src/bodymovin-react-wrapper';

const container = document.getElementById("#animation-container");
const animationOptions = {
    rendererSettings: {
        preserveAspectRatio: 'none'
    },
    //instructionsOnStart: [{ instruction: 'setSpeed', speed: 0.75 }]
    container: container,
    renderer: 'svg',
    loop: true,
    prerender: false,
    autoplay: true,
    autoloadSegments: false,
    path: 'https://labs.nearpod.com/bodymovin/demo/pancakes/data.json'
};

ReactDOM.render( <ReactBodymovinContainer options={animationOptions} />,
    document.getElementById('react-container')
);