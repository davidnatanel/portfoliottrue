import css from '../assets/tech/css.png'
import html from '../assets/tech/html.png'
import js from '../assets/tech/js.png'
import ts from '../assets/tech/ts.png'
import mongodb from '../assets/tech/mongodb.png'
import mysql from '../assets/tech/mysql.png'
import nextjs from '../assets/tech/nextjs.png'
import nodejs from '../assets/tech/nodejs.png'
import postgres from '../assets/tech/postgres.png'
import react from '../assets/tech/react.png'
import express from '../assets/tech/express.png'
import git from '../assets/tech/git.png'

export interface Tech {

    img: string; // Tipo de dato para la imagen, suponiendo que es una URL de imagen

}

const TechList: Tech[] = [
    {
        img: css,
    },
    {
        img: html,
    },
    {
        img: js,
    },
    {
        img: ts,
    },
    {
        img: mongodb,
    },
    {
        img: mysql,
    },
    {
        img: nextjs,
    },
    {
        img: nodejs,
    },
    {
        img: postgres,
    },
    {
        img: react,
    },
    {
        img: express,
    },
    {
        img: git,
    }





]
export default TechList;