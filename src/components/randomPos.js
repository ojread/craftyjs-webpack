// Place at a random position in the viewport.
Crafty.c('RandomPos', {
    required: '2D',

    randomPos() {
        const viewport = Crafty.viewport.rect();
        this.attr({
            x: Crafty.math.randomInt(viewport._x, viewport._w - this.w),
            y: Crafty.math.randomInt(viewport._y, viewport._h - this.h),
        });
        return this;
    },
});
