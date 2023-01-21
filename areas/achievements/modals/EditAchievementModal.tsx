import { gql, useMutation } from '@apollo/client'
import _ from 'lodash'
import { Button, FormControl, Input, Modal } from 'native-base'
import React, { useState } from 'react'

import {
  EditAchievementModalAchievementFragment,
  EditAchievementModalUpdateAchievementMutation,
  EditAchievementModalUpdateAchievementMutationVariables,
} from '../../../generated/graphql'
import SelectCategory from '../fields/SelectCategory'
import SelectParent from '../fields/SelectParent'
import SelectPoints from '../fields/SelectPoints'
import SelectType from '../fields/SelectType'
import { AchievementPoints, AchievementType, Category } from '../types'

export const EditAchievementModalFragments = {
  achievement: gql`
    fragment EditAchievementModalAchievement on achievements {
      id
      type
      points
      achievement_categories {
        id
        name
      }
      parent_achievement_id
      title
      description
      target
      progress
      completed_at
      link
    }
  `,
}

const UPDATE_ACHIEVEMENT = gql`
  mutation EditAchievementModalUpdateAchievement(
    $set: achievementsUpdateInput!
    $filter: achievementsFilter
  ) {
    updateachievementsCollection(set: $set, filter: $filter) {
      records {
        id
        user_id
        type
        title
        description
        link
        target
        progress
        percent_complete
        points
        progress_at
        completed_at
        created_at
        updated_at
        deleted_at
        parent_achievement_id
      }
    }
  }
`

function EditAchievementModal({
  isOpen,
  setIsOpen,
  achievement,
  targetAchievementId = undefined,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  achievement: EditAchievementModalAchievementFragment
  targetAchievementId?: string
}): JSX.Element {
  const [type, setType] = useState<AchievementType>(
    achievement.type as AchievementType
  )
  const [points, setPoints] = useState<AchievementPoints>(
    _.toString(achievement.points) as AchievementPoints
  )
  const [category, setCategory] = useState<Category>(
    (achievement.achievement_categories?.name as Category) ?? 'learn'
  )
  const [parent, setParent] = useState<string>(
    achievement.parent_achievement_id ?? ''
  )

  const [title, setTitle] = useState(achievement.title ?? '')
  const [description, setDescription] = useState(achievement.description ?? '')
  const [link, setLink] = useState(achievement.link ?? '')
  const [target, setTarget] = useState(_.toString(achievement.target))
  const [progress, setProgress] = useState(_.toString(achievement.progress))

  const [targetError, setTargetError] = useState('')
  const [progressError, setProgressError] = useState('')

  const [updateAchievementMutation] = useMutation<
    EditAchievementModalUpdateAchievementMutation,
    EditAchievementModalUpdateAchievementMutationVariables
  >(UPDATE_ACHIEVEMENT, {
    onCompleted: () => setIsOpen(false),
  })

  const updateAchievement = () => {
    if (!_.isNumber(_.toNumber(target))) {
      setTargetError('Target must be a number')
      return
    }
    if (!_.isNumber(_.toNumber(progress))) {
      setProgressError('Progress must be a number')
      return
    }
    void updateAchievementMutation({
      variables: {
        set: {
          type,
          points: _.toNumber(points),
          title,
          description,
          link,
          target: _.toNumber(target),
          progress,
          parent_achievement_id: parent || undefined,
          completed_at:
            _.toNumber(progress) >= _.toNumber(target)
              ? achievement.completed_at ?? new Date().toISOString()
              : undefined,
        },
        filter: {
          id: { eq: achievement.id },
        },
      },
    })

    if (_.toNumber(progress) > _.toNumber(achievement.progress))
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

  return (
    <Modal isOpen={isOpen}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton onPress={() => setIsOpen(false)} />
        <Modal.Header>Edit Achievement</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input selectTextOnFocus value={title} onChangeText={setTitle} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <Input
              selectTextOnFocus
              value={description}
              onChangeText={setDescription}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Link</FormControl.Label>
            <Input selectTextOnFocus value={link} onChangeText={setLink} />
          </FormControl>
          {type === 'integer' && (
            <FormControl isInvalid={!!targetError}>
              <FormControl.Label>Target</FormControl.Label>
              <Input
                selectTextOnFocus
                value={target}
                onChangeText={setTarget}
              />
              <FormControl.ErrorMessage>{targetError}</FormControl.ErrorMessage>
            </FormControl>
          )}
          {(type === 'integer' || type === 'boolean') && (
            <FormControl isInvalid={!!progressError}>
              <FormControl.Label>Progress</FormControl.Label>
              <Input
                selectTextOnFocus
                value={progress}
                onChangeText={setProgress}
              />
              <FormControl.ErrorMessage>
                {progressError}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
          <SelectType type={type} setType={setType} />
          <SelectPoints points={points} setPoints={setPoints} />
          <SelectCategory category={category} setCategory={setCategory} />
          <SelectParent parent={parent} setParent={setParent} />
        </Modal.Body>
        <Modal.Footer>
          <Button.Group>
            <Button variant="ghost" onPress={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onPress={updateAchievement}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default EditAchievementModal
