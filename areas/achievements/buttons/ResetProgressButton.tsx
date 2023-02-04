import { gql, useMutation } from '@apollo/client'
import { Button } from 'native-base'
import React from 'react'

import {
  ResetProgressButtonResetProgressMutation,
  ResetProgressButtonResetProgressMutationVariables,
} from '../../../generated/graphql'
import { useSession } from '../../contexts/SupabaseContext'

const RESET_PROGRESS = gql`
  mutation ResetProgressButtonResetProgress(
    $set: achievementsUpdateInput!
    $filter: achievementsFilter
    $atMost: Int!
  ) {
    updateachievementsCollection(set: $set, filter: $filter, atMost: $atMost) {
      records {
        id
        progress_at
        updated_at
      }
    }
  }
`

export default function ResetProgressButton(): JSX.Element {
  const session = useSession()

  const oneDayAgo = new Date()
  oneDayAgo.setDate(oneDayAgo.getDate() - 1)

  const [resetProgressMutation] = useMutation<
    ResetProgressButtonResetProgressMutation,
    ResetProgressButtonResetProgressMutationVariables
  >(RESET_PROGRESS, {
    variables: {
      set: { progress_at: oneDayAgo.toISOString() },
      filter: {
        user_id: { eq: session?.user.id },
        progress_at: { gt: oneDayAgo.toISOString() },
      },
      atMost: 10000,
    },
  })

  return (
    <Button
      variant="ghost"
      onPress={() => {
        void resetProgressMutation()
      }}
      alignSelf="flex-start"
    >
      Reset
    </Button>
  )
}
