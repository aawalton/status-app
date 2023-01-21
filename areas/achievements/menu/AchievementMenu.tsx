import { gql } from '@apollo/client'
import { IconButton, Menu, ThreeDotsIcon } from 'native-base'
import React, { useState } from 'react'

import { AchievementMenuAchievementFragment } from '../../../generated/graphql'
import EditAchievementModal, {
  EditAchievementModalFragments,
} from '../modals/EditAchievementModal'
import DoneMenuItem, { DoneMenuItemFragments } from './DoneMenuItem'

export const AchievementMenuFragments = {
  achievement: gql`
    fragment AchievementMenuAchievement on achievements {
      id
      ...DoneMenuItemAchievement
      ...EditAchievementModalAchievement
    }
    ${DoneMenuItemFragments.achievement}
    ${EditAchievementModalFragments.achievement}
  `,
}

export default function AchievementMenu({
  achievement,
  targetAchievementId = undefined,
}: {
  achievement: AchievementMenuAchievementFragment
  targetAchievementId?: string
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EditAchievementModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        achievement={achievement}
        targetAchievementId={targetAchievementId}
      />
      <Menu
        w="16"
        trigger={(triggerProps) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <IconButton icon={<ThreeDotsIcon />} {...triggerProps} />
        )}
      >
        <Menu.Item onPress={() => setIsOpen(true)}>Edit</Menu.Item>
        <DoneMenuItem
          achievement={achievement}
          targetAchievementId={targetAchievementId}
        />
      </Menu>
    </>
  )
}
