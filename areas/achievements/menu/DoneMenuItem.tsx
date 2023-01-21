import { gql, useMutation } from '@apollo/client'
import _ from 'lodash'
import { Menu } from 'native-base'
import React from 'react'

import {
  DoneMenuItemAchievementFragment,
  DoneMenuItemUpdateAchievementMutation,
  DoneMenuItemUpdateAchievementMutationVariables,
} from '../../../generated/graphql'

export const DoneMenuItemFragments = {
  achievement: gql`
    fragment DoneMenuItemAchievement on achievements {
      id
      is_collection
      target
      completed_at
    }
  `,
}

const UPDATE_ACHIEVEMENT = gql`
  mutation DoneMenuItemUpdateAchievement(
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
`

function DoneMenuItem({
  achievement,
  targetAchievementId = undefined,
}: {
  achievement: DoneMenuItemAchievementFragment
  targetAchievementId?: string
}): JSX.Element {
  const [updateAchievementMutation] = useMutation<
    DoneMenuItemUpdateAchievementMutation,
    DoneMenuItemUpdateAchievementMutationVariables
  >(UPDATE_ACHIEVEMENT)

  const complete = () => {
    // Don't allow complete on collection types
    if (achievement.is_collection) return
    void updateAchievementMutation({
      variables: {
        set: {
          progress: _.toString(achievement.target),
          completed_at: achievement.completed_at ?? new Date().toISOString(),
        },
        filter: {
          id: { eq: achievement.id },
        },
      },
    })
    void updateAchievementMutation({
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

  // Don't show complete on collection types
  if (achievement.is_collection) return <>{null}</>
  return <Menu.Item onPress={complete}>Done</Menu.Item>
}

export default DoneMenuItem
