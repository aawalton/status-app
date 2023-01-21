import { FormControl, Select } from 'native-base'
import React from 'react'

import { AchievementType } from '../types'

export default function SelectType({
  type,
  setType,
}: {
  type: AchievementType
  setType: React.Dispatch<React.SetStateAction<AchievementType>>
}): JSX.Element {
  return (
    <FormControl>
      <FormControl.Label>Type</FormControl.Label>
      <Select
        placeholder="Choose achievement type"
        selectedValue={type}
        onValueChange={(value) => setType(value as AchievementType)}
      >
        <Select.Item label="Boolean" value="boolean" />
        <Select.Item label="Integer" value="integer" />
        <Select.Item label="Collection" value="collection" />
        <Select.Item label="Sequence" value="sequence" />
      </Select>
    </FormControl>
  )
}
