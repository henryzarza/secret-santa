import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:55:31.686Z',
            updatedAt: '2024-02-02T22:55:31.686Z',
          },
        },
        user: {
          create: {
            email: 'String3475972',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:55:31.686Z',
          },
        },
        toUser: {
          create: {
            email: 'String8115184',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:55:31.686Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:55:31.686Z',
            updatedAt: '2024-02-02T22:55:31.686Z',
          },
        },
        user: {
          create: {
            email: 'String100025',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:55:31.686Z',
          },
        },
        toUser: {
          create: {
            email: 'String1636640',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:55:31.686Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
