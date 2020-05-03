import React from 'react';
import Button from './components/Button';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div>
      <Button text={'hello!'} />
      <Paragraph text={'world'} theme={'dark'} />
    </div>
  );
}

export default App;
