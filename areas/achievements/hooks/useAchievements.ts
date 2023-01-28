import { ApolloQueryResult, gql, useQuery } from '@apollo/client'

import {
  AchievementsCollectionQuery,
  AchievementsCollectionQueryVariables,
  OrderByDirection,
  UseAchievementsAchievementFragment,
} from '../../../generated/graphql'
import {
  AchievementCategoryFilter,
  AchievementCircleFilter,
  AchievementFormatFilter,
} from '../types'

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
  formatFilter,
  circleFilter,
  categoryFilter,
}: {
  formatFilter: AchievementFormatFilter
  circleFilter: AchievementCircleFilter
  categoryFilter: AchievementCategoryFilter
}): {
  achievements: UseAchievementsAchievementFragment[]
  refetch: Refetch
} => {
  const getFormatFilter = () => {
    if (formatFilter === 'passive')
      return { format_name: { in: ['audio', 'video'] } }
    if (formatFilter === 'automatic')
      return { format_name: { eq: 'automatic' } }
    if (formatFilter === 'focused') return { format_name: { eq: 'focused' } }
    return {}
  }

  const getCircleFilter = () => {
    if (circleFilter === 'solo') return { circle_name: { eq: 'solo' } }
    if (circleFilter === 'jenny') return { circle_name: { eq: 'with_jenny' } }
    if (circleFilter === 'group') return { circle_name: { eq: 'with_group' } }
    return {}
  }

  const getCategoryFilter = () => {
    if (categoryFilter) return { category_name: { eq: categoryFilter } }
    return {}
  }

  const getFilter = () => {
    return {
      completed: { eq: false },
      ...getFormatFilter(),
      ...getCircleFilter(),
      ...getCategoryFilter(),
    }
  }

  const filter = getFilter()

  const { data, refetch } = useQuery<
    AchievementsCollectionQuery,
    AchievementsCollectionQueryVariables
  >(GET_ACHIEVEMENTS, {
    variables: {
      filter,
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
