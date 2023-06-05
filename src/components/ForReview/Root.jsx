import { MainHeader } from './MainHeader'
import { Sidebar } from './Sidebar'
import { TabEstudiantes } from './TabEstudiantes'
import { TabProfesores } from './TabProfesores'
import { TabRotes } from './TabRotes'
import { TabTurnos } from './TabTurnos'
import { TabDocumentos } from './TabDocumentos'
import { Outlet } from 'react-router-dom'

function Root() {
  const tabs = [
    { label: 'Estudiantes', content: <TabEstudiantes /> },
    { label: 'Profesores', content: <TabProfesores /> },
    { label: 'Rotes', content: <TabRotes /> },
    { label: 'Turnos', content: <TabTurnos /> },
    { label: 'Documentos', content: <TabDocumentos /> },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full  ">
        <MainHeader />
        <div>

        </div>
        {/*<div>
          <MainTab className="flex-grow pt-5 bg-white-strong" tabs={tabs} />
        </div>*/}
        {<Outlet />}
        {/*<TaskList />*/}
      </div>

    </div>

  );
};

export { Root }