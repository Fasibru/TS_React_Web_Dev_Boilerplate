import React from 'react';
import ReactDOM from 'react-dom';

interface SomeComponentProps  {
  text?: string;
}

const SomeComponent: React.FC<SomeComponentProps> = ({ text = 'default text' }) => {
  return (
    <div>
      <p>Use this basic boilerplate as a staring point for your web development based on Typescript and React.</p>
      <p>webpack-dev-server is used with hot reloading.</p>
      <p>{text}</p>
    </div>
  );
};

ReactDOM.render(
  <SomeComponent />,
  document.getElementById('root'),
);
