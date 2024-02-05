import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String7706323',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:52:42.657Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:52:42.657Z',
            updatedAt: '2024-02-02T22:52:42.657Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String9080619',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:52:42.657Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:52:42.657Z',
            updatedAt: '2024-02-02T22:52:42.657Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
