import { gql, useMutation } from '@apollo/client'
import _ from 'lodash'
import { Button, FormControl, Input, Modal } from 'native-base'
import React, { useState } from 'react'

import {
  AddAchievementModalCreateAchievementMutation,
  AddAchievementModalCreateAchievementMutationVariables,
} from '../../../generated/graphql'
import { useSession } from '../../contexts/SupabaseContext'
import SelectCategory from '../fields/SelectCategory'
import SelectParent from '../fields/SelectParent'
import SelectPoints from '../fields/SelectPoints'
import SelectType from '../fields/SelectType'
import { AchievementPoints, AchievementType, Category } from '../types'

const ADD_ACHIEVEMENT = gql`
  mutation AddAchievementModalCreateAchievement(
    $objects: [achievementsInsertInput!]!
  ) {
    insertIntoachievementsCollection(objects: $objects) {
      records {
        id
      }
    }
  }
`

function AddAchievementModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}): JSX.Element {
  const session = useSession()

  const [type, setType] = useState<AchievementType>('integer')
  const [points, setPoints] = useState<AchievementPoints>('10')
  const [category, setCategory] = useState<Category>('learn')
  const [parent, setParent] = useState<string>('')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [target, setTarget] = useState('1')
  const [progress, setProgress] = useState('0')

  const [targetError, setTargetError] = useState('')
  const [progressError, setProgressError] = useState('')

  const [addAchievementMutation] = useMutation<
    AddAchievementModalCreateAchievementMutation,
    AddAchievementModalCreateAchievementMutationVariables
  >(ADD_ACHIEVEMENT, { onCompleted: () => setIsOpen(false) })

  const addAchievement = () => {
    if (!_.isNumber(_.toNumber(target))) {
      setTargetError('Target must be a number')
      return
    }
    if (!_.isNumber(_.toNumber(progress))) {
      setProgressError('Progress must be a number')
      return
    }
    void addAchievementMutation({
      variables: {
        objects: [
          {
            user_id: session?.user.id,
            type,
            points: _.toNumber(points),
            title,
            description,
            link,
            target: _.toNumber(target),
            progress,
            parent_achievement_id: parent || undefined,
            category_name: category,
            completed_at:
              _.toNumber(progress) >= _.toNumber(target)
                ? new Date().toISOString()
                : undefined,
          },
        ],
      },
    })
  }

  return (
    <Modal isOpen={isOpen}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton onPress={() => setIsOpen(false)} />
        <Modal.Header>Add Achievement</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input value={title} onChangeText={setTitle} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <Input value={description} onChangeText={setDescription} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Link</FormControl.Label>
            <Input value={link} onChangeText={setLink} />
          </FormControl>
          {type === 'integer' && (
            <FormControl isInvalid={!!targetError}>
              <FormControl.Label>Target</FormControl.Label>
              <Input value={target} onChangeText={setTarget} />
              <FormControl.ErrorMessage>{targetError}</FormControl.ErrorMessage>
            </FormControl>
          )}
          {(type === 'integer' || type === 'boolean') && (
            <FormControl isInvalid={!!progressError}>
              <FormControl.Label>Progress</FormControl.Label>
              <Input value={progress} onChangeText={setProgress} />
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
            <Button onPress={addAchievement}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default AddAchievementModal
