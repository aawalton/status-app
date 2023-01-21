import { NativeStackScreenProps } from '@react-navigation/native-stack'
import _ from 'lodash'
import { ScrollView, Button, Column, Row } from 'native-base'
import React, { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'

import AchievementFilters from './buttons/AchievementFilters'
import AddAchievementButton from './buttons/AddAchievementButton'
import ResetProgressButton from './buttons/ResetProgressButton'
import AchievementCard from './cards/AchievementCard'
import useAchievements from './hooks/useAchievements'
import { AchievementCircleFilter, AchievementFormatFilter } from './types'
import { RootStackParamList } from '../contexts/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Achievements'>

function AchievementScreen({ route, navigation }: Props): JSX.Element {
  const { height } = useWindowDimensions()
  const [showNotStarted, setShowNotStarted] = useState(false)

  const [formatFilter, setFormatFilter] = useState<AchievementFormatFilter>(
    route.params?.format ?? 'passive'
  )
  const [circleFilter, setCircleFilter] = useState<AchievementCircleFilter>(
    route.params?.circle ?? 'solo'
  )

  useEffect(() => {
    navigation.setParams({ format: formatFilter, circle: circleFilter })
  }, [formatFilter, circleFilter, navigation])

  const { achievements, refetch } = useAchievements({
    formatFilter,
    circleFilter,
  })

  const oneDayAgo = new Date()
  oneDayAgo.setDate(oneDayAgo.getDate() - 1)

  const oneMinuteAgo = new Date()
  oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 1)

  const active = achievements
    .filter(
      (achievement) =>
        !achievement.completed_at ||
        achievement.completed_at > oneDayAgo.toISOString()
    )
    .filter(
      (achievement) =>
        !achievement.progress_at ||
        achievement.progress_at < oneDayAgo.toISOString() ||
        achievement.progress_at > oneMinuteAgo.toISOString()
    )
    .filter(
      (achievement) => showNotStarted || _.toNumber(achievement.progress) > 0
    )

  return (
    <ScrollView height={height}>
      <AddAchievementButton />
      <Column alignItems="center">
        <Row width="80%" mt="8" mb="4" justifyContent="space-between">
          <AchievementFilters
            formatState={[formatFilter, setFormatFilter]}
            circleState={[circleFilter, setCircleFilter]}
          />
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
