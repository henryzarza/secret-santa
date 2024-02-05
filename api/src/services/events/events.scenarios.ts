import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2024-02-02T22:53:21.500Z',
        updatedAt: '2024-02-02T22:53:21.500Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2024-02-02T22:53:21.500Z',
        updatedAt: '2024-02-02T22:53:21.500Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
