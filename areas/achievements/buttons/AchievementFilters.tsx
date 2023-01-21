import { Button, Row } from 'native-base'
import React, { Dispatch, SetStateAction } from 'react'

import { AchievementCircleFilter, AchievementFormatFilter } from '../types'

function AchievementFilters({
  formatState,
  circleState,
}: {
  formatState: [
    AchievementFormatFilter,
    Dispatch<SetStateAction<AchievementFormatFilter>>
  ]
  circleState: [
    AchievementCircleFilter,
    Dispatch<SetStateAction<AchievementCircleFilter>>
  ]
}): JSX.Element {
  const [formatFilter, setFormatFilter] = formatState
  const [circleFilter, setCircleFilter] = circleState

  return (
    <Row space={[0, 4]} flexDir={['column', 'row']}>
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
          variant={formatFilter === 'passive' ? undefined : 'outline'}
          onPress={() => setFormatFilter('passive')}
        >
          Passive
        </Button>
        <Button
          w="16"
          variant={formatFilter === 'automatic' ? undefined : 'outline'}
          onPress={() => setFormatFilter('automatic')}
        >
          Auto
        </Button>
        <Button
          w="16"
          variant={formatFilter === 'focused' ? undefined : 'outline'}
          onPress={() => setFormatFilter('focused')}
        >
          Focused
        </Button>
      </Button.Group>
      <Button.Group
        isAttached
        mx={{
          base: 'auto',
          md: 0,
        }}
        size="md"
        mt={[4, 0]}
      >
        <Button
          w="16"
          variant={circleFilter === 'solo' ? undefined : 'outline'}
          onPress={() => setCircleFilter('solo')}
        >
          Solo
        </Button>
        <Button
          w="16"
          variant={circleFilter === 'jenny' ? undefined : 'outline'}
          onPress={() => setCircleFilter('jenny')}
        >
          Jenny
        </Button>
        <Button
          w="16"
          variant={circleFilter === 'group' ? undefined : 'outline'}
          onPress={() => setCircleFilter('group')}
        >
          Group
        </Button>
      </Button.Group>
    </Row>
  )
}

export default AchievementFilters
