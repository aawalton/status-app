import { Button } from 'native-base'
import React, { Dispatch, SetStateAction } from 'react'

import { AchievementFilter } from '../types'

function AchievementFilters({
  filter,
  setFilter,
}: {
  filter: AchievementFilter
  setFilter: Dispatch<SetStateAction<AchievementFilter>>
}): JSX.Element {
  return (
    <Button.Group
      isAttached
      mx={{
        base: 'auto',
        md: 0,
      }}
      size="md"
    >
      <Button
        w="16"
        variant={filter === 'active' ? undefined : 'outline'}
        onPress={() => setFilter('active')}
      >
        Active
      </Button>
      <Button
        w="16"
        variant={filter === 'passive' ? undefined : 'outline'}
        onPress={() => setFilter('passive')}
      >
        Passive
      </Button>
      <Button
        w="16"
        variant={filter === 'all' ? undefined : 'outline'}
        onPress={() => setFilter('all')}
      >
        All
      </Button>
    </Button.Group>
  )
}

export default AchievementFilters
