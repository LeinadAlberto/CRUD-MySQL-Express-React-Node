// Importamos la conexión a la Base de Datos
import db from '../database/db.js';
// Importamos sequelize
import { DataType, DataTypes } from 'sequelize';

const BlogModel = db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
});

export default BlogModel;