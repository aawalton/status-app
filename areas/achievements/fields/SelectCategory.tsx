import { FormControl, Select } from 'native-base'
import React from 'react'

import { Category } from '../types'

export default function SelectCategory({
  category,
  setCategory,
}: {
  category: Category
  setCategory: React.Dispatch<React.SetStateAction<Category>>
}): JSX.Element {
  const categoryError = category === '' ? 'Please choose a category' : ''

  return (
    <FormControl isInvalid={!!categoryError}>
      <FormControl.Label>Category</FormControl.Label>
      <Select
        placeholder="Choose achievement category"
        selectedValue={category as string}
        onValueChange={(value) => setCategory(value as Category)}
      >
        <Select.Item label="Faith" value="faith" />
        <Select.Item label="Love" value="love" />
        <Select.Item label="Health" value="health" />
        <Select.Item label="Learn" value="learn" />
        <Select.Item label="Fun" value="fun" />
        <Select.Item label="Wealth" value="wealth" />
      </Select>
      <FormControl.ErrorMessage>{categoryError}</FormControl.ErrorMessage>
    </FormControl>
  )
}
