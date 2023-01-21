import { NativeStackScreenProps } from '@react-navigation/native-stack'
import _ from 'lodash'
import { ScrollView, Button, Column, Row } from 'native-base'
import React, { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'

import { RootStackParamList } from '../contexts/types'
import AchievementFilters from './buttons/AchievementFilters'
import AddAchievementButton from './buttons/AddAchievementButton'
import ResetProgressButton from './buttons/ResetProgressButton'
import AchievementCard from './cards/AchievementCard'
import useAchievements from './hooks/useAchievements'
import { AchievementFilter } from './types'

type Props = NativeStackScreenProps<RootStackParamList, 'Achievements'>

function AchievementScreen({ route, navigation }: Props): JSX.Element {
  const { height } = useWindowDimensions()
  const [showNotStarted, setShowNotStarted] = useState(false)

  const [filter, setFilter] = useState<AchievementFilter>(
    route.params?.filter ?? 'passive'
  )
  const showAll = filter === 'all'

  useEffect(() => {
    navigation.setParams({ filter })
  }, [filter, navigation])

  const { achievements, refetch } = useAchievements({ filter })

  const oneDayAgo = new Date()
  oneDayAgo.setDate(oneDayAgo.getDate() - 1)

  const oneMinuteAgo = new Date()
  oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 1)

  const active = achievements
    .filter(
      (achievement) =>
        showAll ||
        !achievement.completed_at ||
        achievement.completed_at > oneDayAgo.toISOString()
    )
    .filter(
      (achievement) =>
        showAll ||
        !achievement.progress_at ||
        achievement.progress_at < oneDayAgo.toISOString() ||
        achievement.progress_at > oneMinuteAgo.toISOString()
    )
    .filter(
      (achievement) => showNotStarted || _.toNumber(achievement.progress) > 0
    )
    .filter(
      (achievement) =>
        filter !== 'active' ||
        achievement.achievement_categories?.name === 'fun'
    )
    .filter(
      (achievement) =>
        filter !== 'passive' ||
        achievement.achievement_categories?.name !== 'fun'
    )

  return (
    <ScrollView height={height}>
      <AddAchievementButton />
      <Column alignItems="center">
        <Row width="80%" mt="8" mb="4" justifyContent="space-between">
          <AchievementFilters filter={filter} setFilter={setFilter} />
          <Row>
            <ResetProgressButton />
            <Button
              variant="ghost"
              onPress={() => {
                void refetch()
              }}
            >
              Refresh
            </Button>
          </Row>
        </Row>
        {active.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
        {achievements.length > 0 && !showNotStarted && (
          <Button onPress={() => setShowNotStarted(true)} my="4">
            Show Not Started
          </Button>
        )}
        {achievements.length > 0 && showNotStarted && (
          <Button onPress={() => setShowNotStarted(false)} my="4">
            Hide Not Started
          </Button>
        )}
      </Column>
    </ScrollView>
  )
}

export default AchievementScreen
