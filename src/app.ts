import 'dotenv/config'

import fastify from 'fastify'

import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import { env } from './shared/config/env'

export const app = fastify({
  logger: {
    enabled: process.env.DEBUG === 'true'
  }
})

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Cookie'
  ],
  credentials: true,
  exposedHeaders: ['Set-Cookie']
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: true
  },
  sign: {
    expiresIn: '7d'
  }
})
app.register(fastifyCookie, {
  secret: env.JWT_SECRET
})

app.get('/', (_, reply) => {
  return reply.send({
    name: 'educational-api',
    status: 'healthy'
  })
})