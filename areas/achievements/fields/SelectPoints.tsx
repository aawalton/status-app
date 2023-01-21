import { FormControl, Select } from 'native-base'
import React from 'react'

import { AchievementPoints } from '../types'

export default function SelectPoints({
  points,
  setPoints,
}: {
  points: AchievementPoints
  setPoints: React.Dispatch<React.SetStateAction<AchievementPoints>>
}): JSX.Element {
  return (
    <FormControl>
      <FormControl.Label>Points</FormControl.Label>
      <Select
        placeholder="Choose achievement points"
        selectedValue={points}
        onValueChange={(value) => setPoints(value as AchievementPoints)}
      >
        <Select.Item label="5 points" value="5" />
        <Select.Item label="10 points" value="10" />
        <Select.Item label="15 points" value="15" />
        <Select.Item label="50 points" value="50" />
      </Select>
    </FormControl>
  )
}
