import axios from "axios";

const gesrotesApi = axios.create({
  baseURL: "http://localhost:8090",
});

export const getAsignaturas = async () => {
  const res = await gesrotesApi.get("/subjects");
  return res.data.map((res) => ({
    id: res.idSubject,
    name: res.name,
    carreraName: res.nameProgram,
  }));
};

export const getAsignaturaById = async (asignaturaId) => {
  const res = await gesrotesApi.get(`/subjects?id=${asignaturaId}`);
  return {
    ...res.data,
    id: res.data.idSubject,
  };
};

export const getCarreraById = async (carreraId) => {
  const res = await gesrotesApi.get(`/carreras/${carreraId}`);
  return res.data;
};

export const getScenery = async () => {
  const res = await gesrotesApi.get("/scenaries");
  return res.data.map((res) => ({
    ...res,
    id: res.idScenary,
  }));
};

export const getEtiquetas = async () => {
  const res = await gesrotesApi.get("/scenary/tag");
  console.log(res);
  return res.data.map((res) => ({
    ...res,
    id: res.idTag,
    nameScenery: res.nameScenary,
  }));
};

export const postEtiqueta = async ({ nameTag, escenarioId }) => {
  const res = await gesrotesApi.post("/scenary/tag/add", {
    idScenary: escenarioId,
    name: nameTag,
  });
  return res.data;
};

export const getServicios = async () => {
  const res = await gesrotesApi.get("/service");
  console.log(res);
  return res.data.map((res) => ({
    id: res.idService,
    name: res.name
  }));
}

export const deleteTag = async (id) => {
  const res = await gesrotesApi.get(`/scenary/tag/delete?id=${id}`);
  return res.data;
};

export const postAsociateTag = async ({ idService, idTag }) => {
  const res = await gesrotesApi.post(`/scenary/tagService/add?idTag=${idTag}&idService=${idService}`, {
    idService: idService,
    idTag: idTag,
  });
  return res.data;
};

export const getEstudiantes = async ({ search, subjectId }) => {
  let url = 'subjects/notStudents'
  if (subjectId) url += `?idSubject=${subjectId}`
  if (search) url += `&nameStudent=${search}`
  const res = await gesrotesApi.get(url)
  return res.data
}

export const getEstudiantesAsignados = async ({ subjectId, search }) => {
  let url = 'subjects/students'
  if (subjectId) url += `?idSubject=${subjectId}`
  if (search) url += `&nameStudent=${search}`
  const res = await gesrotesApi.get(url)
  return res.data
}

export const deleteEstudianteAsignado = async ({ subjectId, studentId }) => {
  let url = 'subjects/students/delete'
   url += `?idSubject=${subjectId}&idStudent=${studentId}`
  const res = await gesrotesApi.get(url)
  return res.data
}


export const PostEstudianteAsignatura = async ({ subjectId, studentId }) => {
  let url = 'subjects/students/add'
   url += `?idSubject=${subjectId}&idStudent=${studentId}`
  const res = await gesrotesApi.post(url)
  return res.data
}

export const api = {
  deleteTag,
  deleteEstudianteAsignado,
};
