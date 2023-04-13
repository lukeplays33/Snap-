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

			        let randomTime = 0
        Object.defineProperty(animations, 'randomTime', {
            set(v) {
                randomTime = v;
            },
            get() {
                return randomTime;
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

					//function for irretating through farmes

	function nextFrame () {
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
		}

	let randomFramesInt = setRandomInterval()

	//functions for animations
	animations.pauseAnimation = function () {
		randomFramesInt.clear()
											clearInterval(timer);
	}
	
	animations.startAnimation = function () {
		animations.pauseAnimation();
	if(animations.randomTime == 0) {
		timer = window.setInterval(nextFrame,animations.time);
	} else {
		randomFramesInt = setRandomInterval(nextFrame,animations.time,animations.randomTime);
	}
}
}

					//function for random time

const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
  let timeout;

  const runInterval = () => {
    const timeoutFunction = () => {
      intervalFunction();
      runInterval();
    };

    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    timeout = setTimeout(timeoutFunction, delay);
  };

  runInterval();

  return {
    clear() { clearTimeout(timeout) },
  };
};
