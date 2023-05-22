import { connect } from '../database';

// Controlador para consultar todos los residentes
const consultarResidentes = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM residentes');
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar los residentes' });
    }
};

const crearResidente = async (req, res) => {
    try {
        const { nombre, direccion, telefono } = req.body;
        const connection = await connect();
        const [result] = await connection.query(
            'INSERT INTO residentes (nombre, direccion, telefono) VALUES (?, ?, ?)',
            [nombre, direccion, telefono]
        );
        const nuevoResidenteId = result.insertId;
        res.json({ mensaje: 'Residente creado exitosamente', residenteId: nuevoResidenteId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear el residente' });
    }
};

// Controlador para consultar un residente por su ID
const consultarResidentePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM residentes WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({ mensaje: 'Residente no encontrado' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar el residente' });
    }
};

// Controlador para actualizar un residente
const actualizarResidente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono } = req.body;
        const connection = await connect();
        await connection.query('UPDATE residentes SET nombre = ?, direccion = ?, telefono = ? WHERE id = ?', [
            nombre,
            direccion,
            telefono,
            id
        ]);
        res.json({ mensaje: 'Residente actualizado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el residente' });
    }
};

// Controlador para eliminar un residente
const eliminarResidente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        await connection.query('DELETE FROM residentes WHERE id = ?', [id]);
        res.json({ mensaje: 'Residente eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al eliminar el residente' });
    }
};

export {
    crearResidente,
    consultarResidentes,
    consultarResidentePorId,
    actualizarResidente,
    eliminarResidente
};
