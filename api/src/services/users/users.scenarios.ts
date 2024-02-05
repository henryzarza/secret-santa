import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String8958791',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-02-02T22:49:35.229Z',
      },
    },
    two: {
      data: {
        email: 'String4524560',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-02-02T22:49:35.229Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
