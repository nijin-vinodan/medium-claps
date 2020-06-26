import React, { Component } from 'react';
import mojs from 'mo-js';

const withClapAnimation = WrappedComponent => {
    class WithClapAnimation extends Component {

        animationTimeline = new mojs.Timeline();

        state = {
            animationTimeline: this.animationTimeline
        }

        componentDidMount() {

            const tlDuration = 300;

            const scaleButton = new mojs.Html({
                el: '#clap',
                duration: tlDuration,
                scale: {
                    1.3: 1
                },
                easing: mojs.easing.ease.out
            });

            const countTotalDisplayAnimation = new mojs.Html({
                el: "#clapDisplay",
                duration: tlDuration,
                opacity: { 0: 1 },
                delay: (3 * tlDuration) / 2,
                y: { 0: -3 }
            });

            // Show Count (Opacity 0 => 1)
            // Stay for sometime
            // Hide Count (Opacity 1 => 0)

            const countAnimation = new mojs.Html({
                el: "#clapCount",
                opacity: { 0: 1 },
                y: { 0: -30 },
                duration: tlDuration,
            }).then({
                opacity: { 1: 0 },
                delay: tlDuration / 2,
                y: -80
            });

            // Triangle Burst
            const triangleBurst = new mojs.Burst({
                parent: '#clap',
                radius: { 50: 95 },
                count: 5,
                angle: 30,
                children: {
                    shape: 'polygon',
                    radius: { 6: 0 },
                    stroke: 'rgba(211, 54, 0, 0.5)',
                    strokeWidth: 2,
                    angle: 210,
                    delay: tlDuration / 10,
                    speed: 0.2,
                    duration: tlDuration,
                    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                }
            });

            // Circle Burst
            const circleBurst = new mojs.Burst({
                parent: '#clap',
                radius: { 50: 95 },
                count: 5,
                angle: 25,
                children: {
                    shape: 'circle',
                    radius: { 3: 0 },
                    fill: 'rgba(149, 165, 166, 0.5)',
                    angle: 210,
                    delay: tlDuration / 10,
                    speed: 0.2,
                    duration: tlDuration,
                    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                }
            })


            const clap = document.getElementById("clap");
            clap.style.transform = "scale(1,1)";

            const newAnimationTimeline = this.animationTimeline.add([
                scaleButton,
                countTotalDisplayAnimation,
                countAnimation,
                triangleBurst,
                circleBurst
            ]);
            this.setState({
                animationTimeline: newAnimationTimeline
            })
        }

        render() {
            return <WrappedComponent {...this.props} animationTimeline={this.state.animationTimeline} />
        }
    }
    return WithClapAnimation;
}

export default withClapAnimation;