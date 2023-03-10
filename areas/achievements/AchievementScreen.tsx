import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, Column, Row } from 'native-base'
import React, { useCallback, useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'

import AchievementFilters from './buttons/AchievementFilters'
import AddAchievementButton from './buttons/AddAchievementButton'
import ResetProgressButton from './buttons/ResetProgressButton'
import AchievementCard from './cards/AchievementCard'
import useAchievements from './hooks/useAchievements'
import {
  AchievementCategoryFilter,
  AchievementCircleFilter,
  AchievementFormatFilter,
} from './types'
import { RootStackParamList } from '../contexts/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Achievements'>

function AchievementScreen({ route, navigation }: Props): JSX.Element {
  const { height } = useWindowDimensions()

  const [formatFilter, setFormatFilter] = useState<AchievementFormatFilter>(
    route.params?.format ?? ''
  )
  const [circleFilter, setCircleFilter] = useState<AchievementCircleFilter>(
    route.params?.circle ?? ''
  )
  const [categoryFilter, setCategoryFilter] =
    useState<AchievementCategoryFilter>(route.params?.category ?? '')

  const getFilters = useCallback(() => {
    return {
      ...(formatFilter ? { format: formatFilter } : { format: undefined }),
      ...(circleFilter ? { circle: circleFilter } : { circle: undefined }),
      ...(categoryFilter
        ? { category: categoryFilter }
        : { category: undefined }),
    }
  }, [formatFilter, circleFilter, categoryFilter])

  useEffect(() => {
    navigation.setParams(getFilters())
  }, [getFilters, navigation])

  const { achievements } = useAchievements({
    formatFilter,
    circleFilter,
    categoryFilter,
  })

  const oneDayAgo = new Date()
  oneDayAgo.setDate(oneDayAgo.getDate() - 1)

  const oneMinuteAgo = new Date()
  oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 1)

  const active = achievements.filter(
    (achievement) =>
      !achievement.progress_at ||
      achievement.progress_at < oneDayAgo.toISOString() ||
      achievement.progress_at > oneMinuteAgo.toISOString()
  )

  return (
    <ScrollView height={height}>
      <AddAchievementButton />
      <Column alignItems="center">
        <Row width="80%" mt="8" mb="4" justifyContent="space-between">
          <AchievementFilters
            formatState={[formatFilter, setFormatFilter]}
            circleState={[circleFilter, setCircleFilter]}
            categoryState={[categoryFilter, setCategoryFilter]}
          />
          <ResetProgressButton />
        </Row>
        {active.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </Column>
    </ScrollView>
  )
}

export default AchievementScreen
