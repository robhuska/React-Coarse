import Header from './components/Header';
import Quiz from './components/Quiz';
import QuizContextProvider from './store/QuizContextProvider';
import Summary from './components/Summary';

function App() {
  return (
    <>
      <Header></Header>
      <QuizContextProvider>
        <main>
          <Quiz />
        </main>
      </QuizContextProvider>
    </>
  );
}

export default App;
