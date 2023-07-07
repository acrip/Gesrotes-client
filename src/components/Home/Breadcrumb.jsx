import { FaHome } from 'react-icons/fa';

function Breadcrumb () {

  const items = [
    { label: <FaHome />, url: '/' },
    { label: '> Asignaturas', url: '/asignaturas' },
    { label: '> Cuidado de salud mental', url: '/asignaturas' },
  ];
  return (
    <nav className="flex p-10 text-center h-auto" aria-label="Breadcrumb">
      <ol className="flex space-x-2 items-center text-3xl">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className={`text-gray-500 hover:text-gray-700 ${
                index === items.length - 1 ? 'font-bold' : ''
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export {Breadcrumb};