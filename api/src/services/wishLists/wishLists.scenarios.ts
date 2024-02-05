import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-02-02T22:54:24.405Z',
        user: {
          create: {
            email: 'String2927161',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:54:24.405Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:54:24.405Z',
            updatedAt: '2024-02-02T22:54:24.405Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-02-02T22:54:24.405Z',
        user: {
          create: {
            email: 'String4689805',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-02-02T22:54:24.405Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-02-02T22:54:24.405Z',
            updatedAt: '2024-02-02T22:54:24.405Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
