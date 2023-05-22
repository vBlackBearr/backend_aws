import { connect } from '../database';

const crearVisita = async (req, res) => {
    try {
        const { visitanteId, permisoId, fechaHora } = req.body;
        const connection = await connect();
        await connection.query(
            'INSERT INTO visitas (visitante_id, permiso_id, fecha_hora) VALUES (?, ?, ?)',
            [visitanteId, permisoId, fechaHora]
        );
        res.json({ mensaje: 'Visita creada exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear la visita' });
    }
};

export { crearVisita };
