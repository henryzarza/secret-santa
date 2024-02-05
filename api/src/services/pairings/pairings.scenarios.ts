import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2024-02-02T22:53:36.668Z',
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:53:36.668Z',
            updatedAt: '2024-02-02T22:53:36.668Z',
          },
        },
        santa: {
          create: {
            email: 'String9786401',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:53:36.668Z',
          },
        },
        person: {
          create: {
            email: 'String5331683',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:53:36.668Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-02-02T22:53:36.668Z',
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:53:36.668Z',
            updatedAt: '2024-02-02T22:53:36.668Z',
          },
        },
        santa: {
          create: {
            email: 'String4827177',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:53:36.668Z',
          },
        },
        person: {
          create: {
            email: 'String305306',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:53:36.668Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
