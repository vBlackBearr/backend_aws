import { connect } from '../database';

// Controlador para asociar un carro a un residente
const asociarCarroResidente = async (req, res) => {
    try {
        const { residenteId, carroId } = req.body;
        const connection = await connect();
        await connection.query('INSERT INTO residentes_carros (residente_id, carro_id) VALUES (?, ?)', [
            residenteId,
            carroId
        ]);
        res.json({ mensaje: 'Carro asociado al residente exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al asociar el carro al residente' });
    }
};

// Controlador para consultar los carros asociados a un residente
const consultarCarrosResidente = async (req, res) => {
    try {
        const { residenteId } = req.params;
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM residentes_carros WHERE residente_id = ?', [
            residenteId
        ]);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar los carros del residente' });
    }
};

// Controlador para eliminar la asociación de un carro a un residente
const eliminarAsociacionCarroResidente = async (req, res) => {
    try {
        const { residenteId, carroId } = req.body;
        const connection = await connect();
        await connection.query(
            'DELETE FROM residentes_carros WHERE residente_id = ? AND carro_id = ?',
            [residenteId, carroId]
        );
        res.json({ mensaje: 'Asociación entre el carro y el residente eliminada exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrió un error al eliminar la asociación entre el carro y el residente'
        });
    }
};

export { asociarCarroResidente, consultarCarrosResidente, eliminarAsociacionCarroResidente };
