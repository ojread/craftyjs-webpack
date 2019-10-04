// Moves around the screen bouncing off solid objects.
Crafty.c('Bounce', {
    _speed: 0.1,
    required: '2D, Collision',

    init() {
        // Randomise initial direction.
        this.attr({
            _dx: Crafty.math.negate(0.5),
            _dy: Crafty.math.negate(0.5),
        });

        // Collide with entities with the Solid component.
        this.checkHits('Solid');
    },

    // Bind events to methods.
    events: {
        'UpdateFrame': '_updateFrame',
        'HitOn': '_hitOn',
    },

    // Called each frame.
    _updateFrame({frame, dt, gameTime}) {
        // Move the entity depending on direction and elapsed time.
        const delta = this._speed * dt;
        this.shift(this._dx * delta, this._dy * delta);
    },

    // Called on collision
    _hitOn(hitData) {
        hitData.forEach(hit => {
            // Minimum translation vector gives us new direction.
            this.attr({
                _dx: hit.nx ? hit.nx : this._dx,
                _dy: hit.ny ? hit.ny : this._dy,
            });
        });
    },
});
