// Import asset files
import craftyLogo from "~/assets/images/crafty-logo.png";
import webpackLogo from "~/assets/images/webpack-logo.png";

// Define audio, image and sprite assets to be loaded.
const assets = {
    'images': [
        craftyLogo,
        webpackLogo,
    ],
};

Crafty.scene('loading', function () {
    Crafty.background('#000');

    const progress = Crafty.e('2D, DOM, Text')
        .attr({ w: 100, h: 20, x: 150, y: 120, percent: 0 })
        .text(function () { return `Loading ${this.percent}%`; })
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
            progress.percent = e.percent;
        },
        e => {
            // Loading error.
            console.error("Error loading assets", e);
        }
    );
});