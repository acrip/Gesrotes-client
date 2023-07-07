import { useState } from 'react';

function ModalConfirm({text}) {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    // Lógica para aceptar el mensaje de confirmación
    setShowModal(false);
  };

  const handleCancel = () => {
    // Lógica para cancelar el mensaje de confirmación
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Mostrar Modal
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white-strong w-70 h-44 p-10 rounded-lg shadow">
            <p className="text-lg font mb-2 text-center">¿Está seguro que desea eliminar la {text}?</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                className="bg-blood hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancel}
              >
                CANCELAR
              </button>
              <button
                className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleAccept}
              >
                ACEPTAR
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { ModalConfirm };