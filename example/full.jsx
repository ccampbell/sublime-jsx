// See corresponding: https://reactjs.org/docs/jsx-in-depth.html
// JSX Specification: https://facebook.github.io/jsx/

<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>

// ----------------------------------------
// ----------------------------------------

<div className="sidebar" />

// ----------------------------------------
// ----------------------------------------
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}

// ----------------------------------------
// ----------------------------------------
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// ----------------------------------------
// ----------------------------------------
import React from 'react';

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <hello toWhat="World" />;
}

// ----------------------------------------
// ----------------------------------------
import React from 'react';

// Correct! This is a component and should be capitalized:
function Hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Correct! React knows <Hello /> is a component because it's capitalized.
  return <Hello toWhat="World" />;
}

// ----------------------------------------
// ----------------------------------------

import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  //                                       Should be white !
  //                                              ||
  //                                              \/
  // Wrong! JSX type can't be an expression.
  return <components[props.storyType] story={props.story} />;
}

// ----------------------------------------
// ----------------------------------------

<MyComponent foo={1 + 2 + 3 + 4} />

// ----------------------------------------
// ----------------------------------------

function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}

<MyComponent message="hello world" />

<MyComponent message={'hello world'} />

<MyComponent message="&lt;3" />

<MyComponent message={'<3'} />

<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />

// ----------------------------------------
// ----------------------------------------

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

// ----------------------------------------
// ----------------------------------------

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

<MyComponent>Hello world!</MyComponent>

// ----------------------------------------
// ----------------------------------------

<div>This is valid HTML &amp; JSX at the same time.</div>

// ----------------------------------------
// ----------------------------------------

<div>Hello World</div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>

// ----------------------------------------
// ----------------------------------------

<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>

// ----------------------------------------
// ----------------------------------------

<div>
  Here is a list:
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>

// ----------------------------------------
// ----------------------------------------

<!-- Should be normal -->

// ----------------------------------------
// ----------------------------------------

render() {
  // No need to wrap list items in an extra element!
  return [
    // Don't forget the keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}

// ----------------------------------------
// ----------------------------------------

<MyComponent>foo</MyComponent>

<MyComponent>{'foo'}</MyComponent>

// ----------------------------------------
// ----------------------------------------

function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}
// ----------------------------------------
// ----------------------------------------

function Hello(props) {
  return <div>Hello {props.addressee}!</div>;
}

// ----------------------------------------
// ----------------------------------------

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

// ----------------------------------------
// ----------------------------------------

<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>

// ----------------------------------------
// ----------------------------------------

<div>
  {showHeader && <Header />}
  <Content />
</div>

// ----------------------------------------
// ----------------------------------------

<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>

// ----------------------------------------
// ----------------------------------------

<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>

// ----------------------------------------
// ----------------------------------------

<div>
  My JavaScript variable is {String(myVariable)}.
</div>

