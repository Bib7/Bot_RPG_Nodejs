import { FastifyInstance } from 'fastify'
import { GoogleGenerativeAI } from '@google/generative-ai'
require('dotenv').config()


interface Prompt {
    input: String,
    result: String,
    tokenQtd: number
}

interface AIModel {
    modelName: String,
    modelConnect: object    
}


export async function user_interation_open( app: FastifyInstance){
    app.get('/user_on', (request, reply) => {
        const connection_on = async (): Promise<AIModel>  => {    
            return {
            modelName: `${(process.env.MODEL_VERSION_TEXT)}`,
            modelConnect: new GoogleGenerativeAI(`${process.env.API_KEY_GOOGLE}`)}
        }
        const model = connection_on().then(
        (onResolved) => {
            reply.statusCode = 202;
            reply.send({message: "Working model connected"})   
        }, 
        (onRejected) => {
            console.error (Error)
            return reply.statusCode = 500
        })
    })
}
