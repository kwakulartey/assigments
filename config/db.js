import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const db = process.env.DB_URL;

export function mongoDBConnection(){
    mongoose.connect(db).then(()=>{
        console.log('Connected to Mongo successfully')
    }).catch((error)=>{
        console.log('Something went wrong',error);
    })
}