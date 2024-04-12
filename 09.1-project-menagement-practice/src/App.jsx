import Content from './components/Content';
import ProjectsSidebar from './components/ProjectsSidebar';
import ProjectsContextProvider from './store/ProjectsContextProvider';

function App() {
  return (
    <ProjectsContextProvider>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        <Content />
      </main>
    </ProjectsContextProvider>
  );
}

export default App;
