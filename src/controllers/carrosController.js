import { connect } from '../database';

// Controlador para crear un carro
const crearCarro = async (req, res) => {
    try {
        const { marca, modelo, placa } = req.body;
        const connection = await connect();
        await connection.query('INSERT INTO carros (marca, modelo, placa) VALUES (?, ?, ?)', [
            marca,
            modelo,
            placa
        ]);
        res.json({ mensaje: 'Carro creado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear el carro' });
    }
};

// Controlador para consultar todos los carros
const consultarCarros = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM carros');
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar los carros' });
    }
};

// Controlador para consultar un carro por su ID
const consultarCarroPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM carros WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({ mensaje: 'Carro no encontrado' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar el carro' });
    }
};

// Controlador para actualizar un carro
const actualizarCarro = async (req, res) => {
    try {
        const { id } = req.params;
        const { marca, modelo, placa } = req.body;
        const connection = await connect();
        await connection.query('UPDATE carros SET marca = ?, modelo = ?, placa = ? WHERE id = ?', [
            marca,
            modelo,
            placa,
            id
        ]);
        res.json({ mensaje: 'Carro actualizado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el carro' });
    }
};

// Controlador para eliminar un carro
const eliminarCarro = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await connect();
        await connection.query('DELETE FROM carros WHERE id = ?', [id]);
        res.json({ mensaje: 'Carro eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al eliminar el carro' });
    }
};

export {
    crearCarro,
    consultarCarros,
    consultarCarroPorId,
    actualizarCarro,
    eliminarCarro
};
