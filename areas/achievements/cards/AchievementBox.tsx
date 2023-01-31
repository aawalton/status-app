import { gql, useLazyQuery } from '@apollo/client'
import _ from 'lodash'
import { Box, Column, Link, Row, Text } from 'native-base'
import React, { useEffect } from 'react'

import {
  AchievementBoxAchievementFragment,
  NextChildAchievementQuery,
  NextChildAchievementQueryVariables,
  OrderByDirection,
} from '../../../generated/graphql'
import PlusOneButton, { PlusOneButtonFragments } from '../buttons/PlusOneButton'
import AchievementMenu, {
  AchievementMenuFragments,
} from '../menu/AchievementMenu'

export const AchievementBoxFragments = {
  achievement: gql`
    fragment AchievementBoxAchievement on achievements {
      id
      user_id
      type
      is_collection
      level
      parent_achievement_id
      category_name
      title
      description
      link
      points
      progress
      target
      progress_at
      percent_complete
      completed
      completed_at
      created_at
      updated_at
      deleted_at
      achievement_categories {
        id
        name
        color
        created_at
        updated_at
        deleted_at
      }
      ...PlusOneButtonAchievement
      ...AchievementMenuAchievement
    }
    ${PlusOneButtonFragments.achievement}
    ${AchievementMenuFragments.achievement}
  `,
}

const GET_NEXT_CHILD = gql`
  query NextChildAchievement(
    $first: Int
    $orderBy: [achievementsOrderBy!]
    $filter: achievementsFilter
  ) {
    achievementsCollection(first: $first, orderBy: $orderBy, filter: $filter) {
      edges {
        node {
          ...AchievementBoxAchievement
        }
      }
    }
  }
  ${AchievementBoxFragments.achievement}
`

function AchievementBox({
  achievement,
  targetAchievementId = undefined,
}: {
  achievement: AchievementBoxAchievementFragment
  targetAchievementId?: string
}): JSX.Element {
  const progress = _.toNumber(achievement.percent_complete).toFixed(2)

  const [getNextChild, { data }] = useLazyQuery<
    NextChildAchievementQuery,
    NextChildAchievementQueryVariables
  >(GET_NEXT_CHILD)
  const nextChild = data?.achievementsCollection?.edges[0]?.node

  useEffect(() => {
    if (achievement.type === 'collection')
      void getNextChild({
        variables: {
          first: 1,
          filter: {
            parent_achievement_id: { eq: achievement.id },
            percent_complete: { lte: achievement.percent_complete },
          },
          orderBy: [
            { percent_complete: OrderByDirection.DescNullsLast },
            { title: OrderByDirection.AscNullsLast },
          ],
        },
      })
    if (achievement.type === 'sequence')
      void getNextChild({
        variables: {
          first: 1,
          filter: {
            parent_achievement_id: { eq: achievement.id },
            completed: { eq: false },
          },
          orderBy: [{ level: OrderByDirection.AscNullsLast }],
        },
      })
  }, [achievement, getNextChild])

  return (
    <Box w="100%">
      <Row justifyContent="space-between">
        <Column flex="1">
          <Link
            href={achievement.link ?? ''}
            isUnderlined={false}
            isExternal
            _text={{ fontSize: 'lg', fontWeight: 'bold' }}
          >
            {achievement.title}
          </Link>
          {achievement.type !== 'boolean' && (
            <Row>
              <Text>Progress: </Text>
              <Text fontWeight="bold">{progress}% </Text>
              <Text>
                ({Math.round(_.toNumber(achievement.progress) * 100) / 100} /{' '}
                {achievement.target})
              </Text>
            </Row>
          )}
        </Column>
        <Row>
          <PlusOneButton
            achievement={achievement}
            targetAchievementId={targetAchievementId}
          />
          <AchievementMenu
            achievement={achievement}
            targetAchievementId={targetAchievementId}
          />
        </Row>
      </Row>
      {nextChild && (
        <Row mt="2" ml="4">
          <AchievementBox
            achievement={nextChild}
            targetAchievementId={targetAchievementId}
          />
        </Row>
      )}
    </Box>
  )
}

export default AchievementBox
