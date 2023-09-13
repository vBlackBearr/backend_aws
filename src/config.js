import {config as dotenv} from "dotenv";
dotenv();

export const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER  || 'root', 
    /*password: process.env.DB_PASSWORD || 'jsbsl)3n49)2!#k',*/
    password: 'jsbsl)3n49)2!#k',
    database: process.env.DB_DATABASE || 'database',
} 