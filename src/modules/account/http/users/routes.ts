import { FastifyInstance } from 'fastify'

import { createUserController } from '@/modules/account/http/users/create-user'
import { deleteUserController } from '@/modules/account/http/users/delete-user'
import { getUserByEmailController } from '@/modules/account/http/users/get-user-by-email'
import { getUserByIdController } from '@/modules/account/http/users/get-user-by-id'
import { getUsersController } from '@/modules/account/http/users/get-users'
import { updateUserController } from '@/modules/account/http/users/update-user'

export const usersRoutes = async (app: FastifyInstance) => {
  getUsersController.register(app)

  getUserByIdController.register(app)

  getUserByEmailController.register(app)

  createUserController.register(app)

  updateUserController.register(app)

  deleteUserController.register(app)
}
