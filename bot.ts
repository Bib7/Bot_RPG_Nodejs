import { Bot } from "grammy";
import fastify from "fastify";

require ('dotenv').config()

const myAPI = process.env.BOT_API_KEY

const bot = new Bot(`${myAPI}`);

bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text))

bot.start();