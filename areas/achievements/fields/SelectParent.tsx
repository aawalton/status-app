import { gql, useQuery } from '@apollo/client'
import { FormControl, Input, Select } from 'native-base'
import React, { useState } from 'react'

import {
  SelectParentAchievementsCollectionQuery,
  SelectParentAchievementsCollectionQueryVariables,
} from '../../../generated/graphql'

const GET_ACHIEVEMENTS = gql`
  query SelectParentAchievementsCollection(
    $after: Cursor
    $orderBy: [achievementsOrderBy!]
    $filter: achievementsFilter
  ) {
    achievementsCollection(after: $after, orderBy: $orderBy, filter: $filter) {
      edges {
        node {
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
      }
    }
  }
`

export default function SelectParent({
  parent,
  setParent,
}: {
  parent: string
  setParent: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element {
  const [search, setSearch] = useState('')

  const { data } = useQuery<
    SelectParentAchievementsCollectionQuery,
    SelectParentAchievementsCollectionQueryVariables
  >(GET_ACHIEVEMENTS, { variables: { filter: { title: { eq: search } } } })

  const achievements = data?.achievementsCollection?.edges.map(
    (edge) => edge.node
  )

  return (
    <FormControl>
      <FormControl.Label>Parent</FormControl.Label>
      <Input
        value={search}
        onChangeText={setSearch}
        mb="1"
        placeholder="Search"
      />
      <Select
        placeholder="Choose parent"
        selectedValue={parent}
        onValueChange={setParent}
      >
        {achievements?.map((achievement) => (
          <Select.Item
            key={achievement.id}
            label={achievement.title ?? ''}
            value={achievement.id}
          />
        ))}
      </Select>
    </FormControl>
  )
}
