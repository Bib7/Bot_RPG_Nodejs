import fastify from "fastify";
import {user_interation_open} from '../src/routes/interation'
require('dotenv').config()


interface User{
    name: String,
    age: String
}


const app = fastify()

app.register(user_interation_open);


app.listen({port: 3333}).then(() =>{
    console.log("Running")
})


