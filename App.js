import React from 'react';
import ReactDOM from 'react-dom/client';
/*
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'hello react first example'
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
*/
/**
 *
 *<div id="parent">
 *  <div id = "child">
 *      <h1>
 *          i am a h1 tag inside child
 *      </h1>
 *  </div>
 *</div>
 *
 */

/*
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'i am a h1 tag inside child'),
    React.createElement('h2', {}, 'i am a h2 tag inside child'),
  ])
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
*/

/*
 *
 *<div id="parent">
 *  <div id = "child">
 *      <h1>
 *          i am a h1 tag inside child
 *      </h1>
 *  </div>
 * <div id = "child2">
 *      <h1>
 *          i am a h1 tag inside child
 *      </h1>
 *  </div>
 *</div>
 *
 */
/*
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'i am a h1 tag inside child'),
    React.createElement('h2', {}, 'i am a h2 tag inside child'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'i am a h1 tag inside child'),
    React.createElement('h2', {}, 'i am a h2 tag inside child'),
  ]),
]);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
*/

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'hello shubham,me react!!'
);
console.log(heading);
const elem = <span>React element </span>;
//JSX
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    {elem}
    Hello React !!
  </h1>
);

console.log(jsxHeading);
//React component
const HeadingComponent1 = () => (
  <h1 className="heading">React functional HeadingComponent1</h1>
);
const num = 1000;
const HeadingComponent2 = () => (
  <div id="container">
    <HeadingComponent1></HeadingComponent1>
    <HeadingComponent1 />
    {HeadingComponent1()}
    <h1>{num}</h1>
    {jsxHeading}
    <h1 className="heading">React functional HeadingComponent2</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(jsxHeading);//React element
root.render(<HeadingComponent2 />); //component
