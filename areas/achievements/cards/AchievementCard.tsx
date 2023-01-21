import { gql } from '@apollo/client'
import { Box } from 'native-base'
import React from 'react'

import AchievementBox, { AchievementBoxFragments } from './AchievementBox'
import { AchievementCardAchievementFragment } from '../../../generated/graphql'

const AchievementCardFragments = {
  achievement: gql`
    fragment AchievementCardAchievement on achievements {
      id
      completed
      progress_at
      ...AchievementBoxAchievement
    }
    ${AchievementBoxFragments.achievement}
  `,
}

function AchievementCard({
  achievement,
}: {
  achievement: AchievementCardAchievementFragment
}): JSX.Element {
  const oneDayAgo = new Date()
  oneDayAgo.setDate(oneDayAgo.getDate() - 1)
  const muteCard =
    achievement.completed ||
    (achievement.progress_at && new Date(achievement.progress_at) > oneDayAgo)

  return (
    <Box
      width="80%"
      bg={
        muteCard
          ? 'muted.200'
          : `${achievement.achievement_categories?.color ?? 'primary'}.200`
      }
      mt="2"
      p="2"
      borderRadius="4"
    >
      <AchievementBox
        achievement={achievement}
        targetAchievementId={achievement.id}
      />
    </Box>
  )
}

AchievementCard.fragments = AchievementCardFragments

export default AchievementCard
