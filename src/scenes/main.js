import craftyLogo from '~/assets/images/crafty-logo.png';
import webpackLogo from '~/assets/images/webpack-logo.png';

Crafty.scene('main', () => {
    Crafty.background('#eee');

    const viewport = Crafty.viewport.rect();

    // Top edge
    Crafty.e('2D, Collision, Solid').attr({
        x: 0,
        y: 0,
        w: viewport._w,
        h: 10,
    });

    // Bottom edge
    Crafty.e('2D, Collision, Solid').attr({
        x: 0,
        y: viewport._h,
        w: viewport._w,
        h: 1,
    });

    // Left edge
    Crafty.e('2D, Collision, Solid').attr({ x: 0, y: 0, w: 1, h: viewport._h });

    // Right edge
    Crafty.e('2D, Collision, Solid').attr({
        x: viewport._w,
        y: 0,
        w: 1,
        h: viewport._h,
    });

    // Bouncing logos using custom comoponents
    Crafty.e('Bounce, RandomPos, DOM, Image')
        .attr({ w: 147, h: 90 })
        .randomPos()
        .image(craftyLogo);

    Crafty.e('Bounce, RandomPos, DOM, Image')
        .attr({ w: 231, h: 90 })
        .randomPos()
        .image(webpackLogo);
});
