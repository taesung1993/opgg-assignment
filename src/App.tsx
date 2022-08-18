import Templates from './components/templates';

function App() {
  return (
    <Templates.Nested>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </Templates.Nested>
  );
}

export default App;
