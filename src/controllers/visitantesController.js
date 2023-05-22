import { connect } from '../database';

// Controlador para crear un visitante
const crearVisitante = async (req, res) => {
    try {
        const { nombre, direccion, telefono } = req.body;
        const connection = await connect();
        await connection.query('INSERT INTO visitantes (nombre, direccion, telefono) VALUES (?, ?, ?)', [
            nombre,
            direccion,
            telefono
        ]);
        res.json({ mensaje: 'Visitante creado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear el visitante' });
    }
};

// Controlador para consultar todos los visitantes
const consultarVisitantes = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM visitantes');
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar los visitantes' });
    }
};

// Controlador para consultar un visitante por su ID
const consultarVisitantePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM visitantes WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({ mensaje: 'Visitante no encontrado' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar el visitante' });
    }
};

// Controlador para actualizar un visitante
const actualizarVisitante = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono } = req.body;
        const connection = await connect();
        await connection.query('UPDATE visitantes SET nombre = ?, direccion = ?, telefono = ? WHERE id = ?', [
            nombre,
            direccion,
            telefono,
            id
        ]);
        res.json({ mensaje: 'Visitante actualizado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el visitante' });
    }
};

// Controlador para eliminar un visitante
const eliminarVisitante = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        await connection.query('DELETE FROM visitantes WHERE id = ?', [id]);
        res.json({ mensaje: 'Visitante eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al eliminar el visitante' });
    }
};

export {
    crearVisitante,
    consultarVisitantes,
    consultarVisitantePorId,
    actualizarVisitante,
    eliminarVisitante
};
