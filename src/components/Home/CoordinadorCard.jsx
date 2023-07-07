import { FaUser } from "react-icons/fa";

function CoordinadorCard() {
  return (
    <div className="flex w-80 pt-2">
      <FaUser
        className="rounded-full w-16 h-16 object-cover mr-4"
        color="#092167"
      />
      <div>
        <h3 className="text-xl font-bold">Jorge Solano</h3>
        <p className="text-gray-600">Coordinador de asignatura</p>
      </div>
    </div>
  );
}

export { CoordinadorCard };
