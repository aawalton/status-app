import { gql, useMutation } from '@apollo/client'
import _ from 'lodash'
import { CheckIcon, IconButton } from 'native-base'
import React from 'react'

import {
  PlusOneButtonAchievementFragment,
  PlusOneButtonUpdateAchievementMutation,
  PlusOneButtonUpdateAchievementMutationVariables,
} from '../../../generated/graphql'

export const PlusOneButtonFragments = {
  achievement: gql`
    fragment PlusOneButtonAchievement on achievements {
      id
      is_collection
      progress
      target
      completed_at
    }
  `,
}

const UPDATE_ACHIEVEMENT = gql`
  mutation PlusOneButtonUpdateAchievement(
    $set: achievementsUpdateInput!
    $filter: achievementsFilter
  ) {
    updateachievementsCollection(set: $set, filter: $filter) {
      records {
        id
        progress
        percent_complete
        progress_at
        completed_at
        updated_at
      }
    }
  }
  ${PlusOneButtonFragments.achievement}
`

function PlusOneButton({
  achievement,
  targetAchievementId = undefined,
}: {
  achievement: PlusOneButtonAchievementFragment
  targetAchievementId?: string
}): JSX.Element {
  const [updateUserAchievementMutation] = useMutation<
    PlusOneButtonUpdateAchievementMutation,
    PlusOneButtonUpdateAchievementMutationVariables
  >(UPDATE_ACHIEVEMENT)

  const plusOne = () => {
    // Don't allow +1 on collection types
    if (achievement.is_collection) return
    const progress = Math.min(
      _.toNumber(achievement.progress) + 1,
      achievement.target
    )
    void updateUserAchievementMutation({
      variables: {
        set: {
          progress: _.toString(progress),
          completed_at:
            _.toNumber(progress) >= _.toNumber(achievement.target)
              ? achievement.completed_at ?? new Date().toISOString()
              : undefined,
        },
        filter: {
          id: { eq: achievement.id },
        },
      },
    })
    void updateUserAchievementMutation({
      variables: {
        set: {
          progress_at: new Date().toISOString(),
        },
        filter: {
          id: { eq: targetAchievementId ?? achievement.id },
        },
      },
    })
  }

  // Don't show +1 on collection types
  if (achievement.is_collection) return <>{null}</>
  return <IconButton icon={<CheckIcon />} onPress={plusOne} />
}

export default PlusOneButton
