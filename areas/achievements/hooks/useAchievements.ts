import { ApolloQueryResult, gql, useQuery } from '@apollo/client'

import {
  AchievementsCollectionQuery,
  AchievementsCollectionQueryVariables,
  OrderByDirection,
  UseAchievementsAchievementFragment,
} from '../../../generated/graphql'
import { AchievementFilter } from '../types'

const useAchievementsFragments = {
  achievement: gql`
    fragment useAchievementsAchievement on achievements {
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
    }
  `,
}

const GET_ACHIEVEMENTS = gql`
  query AchievementsCollection(
    $after: Cursor
    $orderBy: [achievementsOrderBy!]
    $filter: achievementsFilter
  ) {
    achievementsCollection(after: $after, orderBy: $orderBy, filter: $filter) {
      edges {
        node {
          ...useAchievementsAchievement
        }
      }
      pageInfo {
        startCursor
        hasNextPage
      }
    }
  }
  ${useAchievementsFragments.achievement}
`

type Refetch = (
  variables?: Partial<AchievementsCollectionQueryVariables>
) => Promise<ApolloQueryResult<AchievementsCollectionQuery>>

const useAchievements = ({
  filter,
}: {
  filter: AchievementFilter
}): {
  achievements: UseAchievementsAchievementFragment[]
  refetch: Refetch
} => {
  const { data, refetch } = useQuery<
    AchievementsCollectionQuery,
    AchievementsCollectionQueryVariables
  >(GET_ACHIEVEMENTS, {
    variables: {
      filter: {
        completed: { eq: false },
        ...(filter === 'active'
          ? {
              format_name: { eq: 'automatic' },
              circle_name: { eq: 'solo' },
            }
          : {}),
        ...(filter === 'passive'
          ? {
              format_name: { in: ['audio', 'video'] },
              circle_name: { eq: 'solo' },
            }
          : {}),
      },
      orderBy: [
        { percent_complete: OrderByDirection.DescNullsLast },
        { title: OrderByDirection.AscNullsLast },
      ],
    },
  })

  const achievements = data?.achievementsCollection
    ? data.achievementsCollection.edges.map((edge) => edge.node)
    : []

  return {
    achievements,
    refetch,
  }
}

export default useAchievements
