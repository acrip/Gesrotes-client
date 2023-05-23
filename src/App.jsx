import { TaskList } from './components/TaskList'
import { Sidebar } from './components/Sidebar';
import { ModalCreateTag } from './components/ModalCreateTag';
import { ModalDeleteAssociation } from './components/ModalDeleteAssociation';

function App() {
  return (
    <main className="flex">
      { /*<Sidebar />*/}
      {/*<TaskList />*/}
      {/*<ModalCreateTag />*/}
      {<ModalDeleteAssociation />}
    </main>
  );
}

export default App