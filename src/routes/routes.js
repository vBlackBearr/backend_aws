import express from 'express';
import {
    crearResidente,
    consultarResidentes,
    consultarResidentePorId,
    actualizarResidente,
    eliminarResidente
} from '../controllers/residentesController';

import {
    crearVisitante,
    consultarVisitantes,
    consultarVisitantePorId,
    actualizarVisitante,
    eliminarVisitante
} from '../controllers/visitantesController';

import {
    crearCarro,
    consultarCarros,
    consultarCarroPorId,
    actualizarCarro,
    eliminarCarro
} from '../controllers/carrosController';

import {
    asociarCarroResidente,
    consultarCarrosResidente,
    eliminarAsociacionCarroResidente
} from '../controllers/residentesCarrosController';

import {
    asociarCarroVisitante,
    consultarCarrosVisitante,
    eliminarAsociacionCarroVisitante
} from '../controllers/visitantesCarrosController';

import { crearVisita } from '../controllers/visitasController';

const router = express.Router();

// Rutas para los residentes
router.post('/residentes', crearResidente);
router.get('/residentes', consultarResidentes);
router.get('/residentes/:id', consultarResidentePorId);
router.put('/residentes/:id', actualizarResidente);
router.delete('/residentes/:id', eliminarResidente);
router.post('/residentes/:residenteId/carros', asociarCarroResidente);
router.get('/residentes/:residenteId/carros', consultarCarrosResidente);
router.delete('/residentes/:residenteId/carros/:carroId', eliminarAsociacionCarroResidente);

// Rutas para los visitantes
router.post('/visitantes', crearVisitante);
router.get('/visitantes', consultarVisitantes);
router.get('/visitantes/:id', consultarVisitantePorId);
router.put('/visitantes/:id', actualizarVisitante);
router.delete('/visitantes/:id', eliminarVisitante);
router.post('/visitantes/:visitanteId/carros', asociarCarroVisitante);
router.get('/visitantes/:visitanteId/carros', consultarCarrosVisitante);
router.delete('/visitantes/:visitanteId/carros/:carroId', eliminarAsociacionCarroVisitante);

// Rutas para los carros
router.post('/carros', crearCarro);
router.get('/carros', consultarCarros);
router.get('/carros/:id', consultarCarroPorId);
router.put('/carros/:id', actualizarCarro);
router.delete('/carros/:id', eliminarCarro);

// Ruta para crear una visita
router.post('/visitas', crearVisita); 
export default router;
