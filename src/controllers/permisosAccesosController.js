import { connect } from '../database';
import { v4 as uuidv4 } from 'uuid';

// Controlador para crear un permiso de acceso
const crearPermisoAcceso = async (req, res) => {
    try {
        const { residenteId, visitanteId, fechaHoraCaducidad } = req.body;
        const permisoId = uuidv4(); // Generar un UUID único
        const connection = await connect();
        await connection.query(
            'INSERT INTO permisos_accesos (id, residente_id, visitante_id, fecha_hora_caducidad) VALUES (?, ?, ?, ?)',
            [permisoId, residenteId, visitanteId, fechaHoraCaducidad]
        );
        res.json({ mensaje: 'Permiso de acceso creado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear el permiso de acceso' });
    }
};

// Controlador para consultar todos los permisos de acceso
const consultarPermisosAcceso = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM permisos_accesos');
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar los permisos de acceso' });
    }
};

// Controlador para consultar un permiso de acceso por su ID
const consultarPermisoAccesoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM permisos_accesos WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({ mensaje: 'Permiso de acceso no encontrado' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar el permiso de acceso' });
    }
};

// Controlador para actualizar un permiso de acceso
const actualizarPermisoAcceso = async (req, res) => {
    try {
        const { id } = req.params;
        const { residenteId, visitanteId, fechaHoraCaducidad } = req.body;
        const connection = await connect();
        await connection.query(
            'UPDATE permisos_accesos SET residente_id = ?, visitante_id = ?, fecha_hora_caducidad = ? WHERE id = ?',
            [residenteId, visitanteId, fechaHoraCaducidad, id]
        );
        res.json({ mensaje: 'Permiso de acceso actualizado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el permiso de acceso' });
    }
};

// Controlador para eliminar un permiso de acceso
const eliminarPermisoAcceso = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        await connection.query('DELETE FROM permisos_accesos WHERE id = ?', [id]);
        res.json({ mensaje: 'Permiso de acceso eliminado exitosamente' });
    } catch(error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al eliminar el permiso de acceso' });
    }
};
    
export {
    crearPermisoAcceso,
    consultarPermisosAcceso,
    consultarPermisoAccesoPorId,
    actualizarPermisoAcceso,
    eliminarPermisoAcceso
};
