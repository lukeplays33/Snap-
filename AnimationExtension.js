	//Init function to init extension
var animations = function () {
//aniamtion variables
	let timer = ''
	// props for animations

		        let frameNumber = 0
        Object.defineProperty(animations, 'frameNumber', {
            set(v) {
                frameNumber = v;
            },
            get() {
                return frameNumber;
            }
        });
	
	        let frames = ''
        Object.defineProperty(animations, 'frames', {
            set(v) {
                frames = v;
            },
            get() {
                return frames;
            }
        });

		        let time = ''
        Object.defineProperty(animations, 'time', {
            set(v) {
                time = v;
            },
            get() {
                return time;
            }
        });

		        let loops = ''
        Object.defineProperty(animations, 'loops', {
            set(v) {
                loops = v;
            },
            get() {
                return loops;
            }
        });

		        let order = ''
        Object.defineProperty(animations, 'order', {
            set(v) {
                order = v;
            },
            get() {
                return order;
            }
        });

		        let sprite = ''
        Object.defineProperty(animations, 'sprite', {
            set(v) {
                sprite = v;
            },
            get() {
                return sprite;
            }
        });

	//functions for animations
	animations.pauseAnimation = function () {
											clearInterval(timer);
	}
	
	animations.startAnimation = function () {
		timer = window.setInterval(function () {
			animations.sprite.src = animations.frames[animations.frameNumber];

			//order of frames
			if(animations.order == 'random') {
			animations.frameNumber = Math.floor(Math.random() * animations.frames.length) + 1;
				} else if(animations.order == 'normal') {
							animations.frameNumber++
				}
			
			//function for looping
			if(animations.frameNumber == animations.frames.length) {
				if(animations.loops) {} else {
									animations.pauseAnimation();
				}
				animations.frameNumber = 0;
			}
		},animations.time);
}
}
