// Import asset files
import craftyLogo from '~/assets/images/crafty-logo.png';
import webpackLogo from '~/assets/images/webpack-logo.png';

// Define audio, image and sprite assets to be loaded.
const assets = {
    images: [craftyLogo, webpackLogo],
};

// Define the loading scene with a progress message.
Crafty.scene('loading', () => {
    let progress = 0;

    Crafty.background('#000');

    Crafty.e('2D, DOM, Text')
        .attr({ w: 100, h: 20, x: 150, y: 120 })
        .text(() => {
            return `Loading ${progress}%`;
        })
        .dynamicTextGeneration(true)
        .textAlign('center')
        .textColor('#FFFFFF');

    // Load assets with callbacks for complete, progress and error.
    Crafty.load(
        assets,
        () => {
            // Loading complete - enter the main scene.
            Crafty.scene('main');
        },
        e => {
            // Loading progress - update our message.
            progress = e.percent;
        },
        e => {
            // Loading error.
            // eslint-disable-next-line no-console
            console.error('Error loading assets', e);
        },
    );
});
