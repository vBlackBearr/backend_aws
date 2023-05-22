import { connect } from '../database';

// Controlador para asociar un carro a un visitante
const asociarCarroVisitante = async (req, res) => {
    try {
        const { visitanteId, carroId } = req.body;
        const connection = await connect();
        await connection.query('INSERT INTO visitantes_carros (visitante_id, carro_id) VALUES (?, ?)', [
            visitanteId,
            carroId
        ]);
        res.json({ mensaje: 'Carro asociado al visitante exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al asociar el carro al visitante' });
    }
};

// Controlador para consultar los carros asociados a un visitante
const consultarCarrosVisitante = async (req, res) => {
    try {
        const { visitanteId } = req.params;
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM visitantes_carros WHERE visitante_id = ?', [
            visitanteId
        ]);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al consultar los carros del visitante' });
    }
};

// Controlador para eliminar la asociación de un carro a un visitante
const eliminarAsociacionCarroVisitante = async (req, res) => {
    try {
        const { visitanteId, carroId } = req.body;
        const connection = await connect();
        await connection.query(
            'DELETE FROM visitantes_carros WHERE visitante_id = ? AND carro_id = ?',
            [visitanteId, carroId]
        );
        res.json({ mensaje: 'Asociación entre el carro y el visitante eliminada exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrió un error al eliminar la asociación entre el carro y el visitante'
        });
    }
};

export { asociarCarroVisitante, consultarCarrosVisitante, eliminarAsociacionCarroVisitante };
