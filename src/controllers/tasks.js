import req from "express/lib/request";
import {connect} from "../database"
import {convertGlobPaths} from "swagger-jsdoc/src/utils";


export const getTasks = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('select * from tasks')
    res.json(rows)
}

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("select * from tasks where id = ?", [
        req.params.id,
    ]);
    res.json(rows[0])
}
export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
    res.json(rows[0]["COUNT(*)"])
};
export const saveTask = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO tasks(title, description) VALUES (?, ?)", [
        req.body.title,
        req.body.description
    ])
    /*const result = await connection.query("select 2+2")*/

    res.json({
        id: results.insertId,
        ...req.body,
    });
};
export const deleteTask = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("DELETE FROM tasks WHERE id =?", [
        req.params.id,
    ]);
    res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE tasks SET title =?, description =? WHERE id =?", [
        req.body.title,
        req.body.description,
        req.params.id,
    ]);
    res.sendStatus(204)
}