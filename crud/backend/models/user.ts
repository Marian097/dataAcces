import {db} from '../db';
import {ResultSetHeader,RowDataPacket} from "mysql2";
import { User } from '../types/User';

export const findAll = function(callback: Function){
    const queryString = `SELECT * FROM users`;
    db.query(queryString, (err, result) => {
        if (err)
        {
            return callback(err)
        }

        const rows = <RowDataPacket[]>result;
        let users: User[] = [];
        rows.forEach((info) => {
            let user = {
                id: info.id,
                nume: info.nume,
                prenume: info.prenume,
                email: info.email,
                telefon: info.telefon,
                cnp: info.cnp,
                adresa: info.adresa,
                datanastere: info.datanastere,
            }
            users.push(user)

            callback(null, users)
        })
    })
}



export const findOne = function(id: number, callback: Function) {
    const queryString = `SELECT * FROM users WHERE id = ?`;

    db.query(queryString, [id], (err, result) => {
        if (err) {
            return callback(err);
        }

        const rows = result as RowDataPacket[];

        if (rows.length === 0) {
            return callback(new Error("Utilizatorul nu a fost găsit."));
        }

        const row = rows[0];

        const user: User = {
            id: row.id,
            nume: row.nume,
            prenume: row.prenume,
            email: row.email,
            telefon: row.telefon,
            cnp: row.cnp,
            adresa: row.adresa,
            datanastere: row.datanastere
        };

        callback(null, user);
    });
};


export const create = function(user: User, callback:Function){
    const queryString = `INSERT INTO users (nume, prenume, email, telefon, cnp, adresa, datanastere) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(queryString, [user.nume, user.prenume, user.email, user.telefon, user.cnp, user.adresa, user.datanastere], (err, result) => {
        if (err)
        {
            return callback(err)
        }
        callback(null, result)
    })
}

export const update = function(user:User, callback:Function)
{
    const queryString = `UPDATE users SET nume=?, prenume=?, email=?, telefon=? WHERE id = ?`;
    db.query(queryString, [user.nume, user.prenume, user.email, user.telefon, user.id], (err, result) => {
        if (err)
        {
            return callback(err)
        }
        const affected = (result as ResultSetHeader).affectedRows;
        callback(null, affected)

    })
}



export const deleteUser = function(user:User, callback: Function){
    const queryString = `DELETE FROM users WHERE id=?`
    db.query(queryString, [user.id], (err, result) => {
        if (err)
        {
            return callback(err)
        }
        callback(null, result)
    })
}