import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { Subjects } from '../Subjects/index'
import { Teachers } from '../Teachers/index'
import { Sidebar } from '../../components/Home/Sidebar'
import { MainHeader } from '../../components/Home/MainHeader'
import { ModalSubjectDetail } from '../../components/Subjects/Detail'
import { TabMain } from '../../components/Tabs'
import { ModalManageTags } from '../../components/ManageTags'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Students } from '../Students'


function AppRoutes() {
  let routes = useRoutes([
    { path: '/asignaturas', element: <Subjects /> },
    { path: '/asignaturas/:id', element: <ModalSubjectDetail /> },
    { path: '/asignaturas/:id/estudiantes', element: <TabMain /> },
    { path: '/asignaturas/:id/profesores', element: <TabMain /> },
    { path: '/asignaturas/:id/rotes', element: <TabMain /> },
    { path: '/asignaturas/:id/turnos', element: <TabMain /> },
    { path: '/asignaturas/:id/turnos/gestion-etiquetas', element: <ModalManageTags /> },
    { path: '/asignaturas/:id/documentos', element: <TabMain /> },
    { path: '/docentes', element: <Teachers /> },
    { path: '/estudiantes', element: <Students /> },
    { path: '*', element: <Navigate to='/asignaturas' /> },
  ])
  return routes
}

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col w-full  ">
              <MainHeader />
              <div>
                <AppRoutes />
              </div>
            </div>
          </div>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export { App }