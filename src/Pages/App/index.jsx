import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { SubjectContextProvider } from '../../Context'
import { Subjects } from '../Subjects/index'
import { Students } from '../Students/index'
import { Teachers } from '../Teachers/index'
import { Sidebar } from '../../components/Sidebar'
import { MainHeader } from '../../components/MainHeader'
import { ModalSubjectDetail } from '../../components/SubjectDetail'
import { TabMain } from '../../components/TabMain/TabMain'
import { ModalManageTags } from '../../components/ManageTags'
import { QueryClient, QueryClientProvider } from 'react-query'


function AppRoutes() {
  let routes = useRoutes([
    { path: '/asignaturas', element: <Subjects /> },
    { path: '/asignaturas/:id', element: <ModalSubjectDetail /> },
    { path: '/asignaturas/:id/estudiantes', element: <TabMain value="0" /> },
    { path: '/asignaturas/:id/profesores', element: <TabMain value="1" /> },
    { path: '/asignaturas/:id/rotes', element: <TabMain value="2" /> },
    { path: '/asignaturas/:id/turnos', element: <TabMain value="3" /> },
    { path: '/asignaturas/:id/turnos/gestion-etiquetas', element: <ModalManageTags /> },
    { path: '/asignaturas/:id/documentos', element: <TabMain value="4" /> },
    { path: '/estudiantes', element: <Students /> },
    { path: '/docentes', element: <Teachers /> },
    { path: '*', element: <Navigate to='/asignaturas' /> },
  ])
  return routes
}


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SubjectContextProvider>
        <BrowserRouter>
          <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full  ">
              <MainHeader />
              <div>
                <AppRoutes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </SubjectContextProvider>
    </QueryClientProvider>
  )
}

export { App }