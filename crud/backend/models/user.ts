import {db} from '../db';
import {ResultSetHeader,RowDataPacket} from "mysql2";
import { User } from '../types/User';


export const findAll = function(callback: Function){
    const queryString = "SELECT * FROM users";
    db.query(queryString, (err, result) => {
        if (err)
        {
             return callback(err)
        }

        const rows = <RowDataPacket[]>result;
        const users: User[] = [];
        rows.forEach((row) => {
            let user: User = {
                id: row.id,
                nume: row.nume, 
                prenume: row.prenume,
                email: row.email,
                telefon: row.telefon,
                cnp: row.cnp,
                adresa: row.adresa,
                datanastere: row.datanastere
            }

            users.push(user);
        })
        callback(null, users) 
    });
};


export const findOne = function(callback: Function, id: number)
{
    const queryString = "SELECT * FROM users WHERE id=?"
    db.query(queryString, id, (err, result) => {
        if (err)
        {
             return callback(err)
        }

    const row = (<RowDataPacket[]>result)[0];
    const user: User = {
        id: row.id, 
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        telefon: row.telefon,
        cnp: row.cnp,
        adresa: row.adresa, 
        datanastere: row.datanastere,
    };
    callback(null, user)
    })
}

export const create = function(user: User, callback: Function)
{
    const query = `INSER INTO users (nume, prenume, email, telefon, cnp, adresa, datanastere) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [
        user.nume,
        user.prenume,
        user.email, 
        user.telefon,
        user.cnp, 
        user.adresa,
        user.datanastere
    ], (err, result) => {
        if (err)
        {
            return callback(err)
        }
        const insertId = (result as ResultSetHeader).insertId;
        callback(null, insertId)
    })
}


export const update = function(user: User, callback: Function)
{
    const query = "UPDATE users SET email=?, telefon=?, adresa=? WHERE id=?";
    db.query(query, [
        user.email,
        user.telefon,
        user.adresa,
        user.id,
    ], (err, result) => {
        if (err)
        {
        return callback(err)
        }
        callback(null, result)
    })
}