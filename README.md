# bodymovin-react-typescript
A React wrapper for the Bodymovin.js animation library written in TypeScript

To run the demo:
- npm install
- webpack
- Open the demo/demo.html file in your favorite web browser!

To use the the bodymovin library with React and TypeScript:
- Clone the project/download the zip file
- Run 'npm install --save bodymovin' on your project
- Take the src/bodymovin-react-wrapper.tsx file and copy into your project
- Import the component in your React TypeScript component
  - e.g. "import { ReactBodymovinContainer } from '../src/bodymovin-react-wrapper';"
- Define an animations options object as per the Bodymovin API
- Pass this options object into the component: <ReactBodymovinContainer options={animationOptions} />
- See demo/demo.tsx and the [Bodymovin API pages](https://github.com/bodymovin/bodymovin) for more information