import * as React from 'react';
declare var require: any;
const bodymovin = require('bodymovin/build/player/bodymovin_light.min');

export interface BodymovinControllerProps {
  options: any;
}

export class ReactBodymovinContainer extends React.Component<BodymovinControllerProps, {}> {

  private wrapper: Element;
  public animation: any;

  componentDidMount() {
    this.props.options.wrapper = this.wrapper;
    this.animation = bodymovin.loadAnimation(this.props.options);

    //Run any supplied startup instructions
    if (this.props.options.instructionsOnStart) {
      this.props.options.instructionsOnStart.forEach((instruction: any) => {
        //only run instructions defined in the bodymovin api
        switch (instruction.instruction) {
          case 'goToAndStop':
            this.animation.goToAndStop(instruction.valueToStopOn, instruction.isFrame);
            break;
          case 'setSpeed':
            this.animation.setSpeed(instruction.speed);
            break;
          //todo: add more bodymovin api function support here.
          default:
            break;
        }
      });
    }
  }

  componentWillUnmount() {
    this.animation.destroy();
  }

  //We want React to render our animation component only once,
  //then have the Bodymovin library handle all future updates to the DOM
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const storeWrapper = (el: Element) => {
      this.wrapper = el;
    };
    const className = 'my-bodymovin-classname'
    return (<div  className={className} ref={storeWrapper} />);
  }
}