import { AddIcon, Fab } from 'native-base'
import React, { useState } from 'react'

import AddAchievementModal from '../modals/AddAchievementModal'

function AddAchievementButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AddAchievementModal key="modal" isOpen={isOpen} setIsOpen={setIsOpen} />
      <Fab
        key="fab"
        placement="top-right"
        icon={<AddIcon />}
        onPress={() => setIsOpen(true)}
      />
    </>
  )
}

export default AddAchievementButton
