import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css';

const App = () => (
 <div className="tw-max-w-md tw-mx-auto tw-flex tw-p-6 tw-bg-gray-100 tw-mt-10 tw-rounded-lg tw-shadow-xl">
    <div className="tw-ml-6 tw-pt-1">
      <h1 className="tw-text-2xl tw-text-blue-700 tw-leading-tight">
        Tailwind and Create React App
      </h1>
      <p className="tw-text-base tw-text-gray-700 tw-leading-normal">
        Building apps together
      </p>
    </div>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
