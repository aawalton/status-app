import { CheckIcon, Row, Select } from 'native-base'
import React, { Dispatch, SetStateAction } from 'react'

import {
  AchievementCategoryFilter,
  AchievementCircleFilter,
  AchievementFormatFilter,
} from '../types'

function AchievementFilters({
  formatState,
  circleState,
  categoryState,
}: {
  formatState: [
    AchievementFormatFilter,
    Dispatch<SetStateAction<AchievementFormatFilter>>
  ]
  circleState: [
    AchievementCircleFilter,
    Dispatch<SetStateAction<AchievementCircleFilter>>
  ]
  categoryState: [
    AchievementCategoryFilter,
    Dispatch<SetStateAction<AchievementCategoryFilter>>
  ]
}): JSX.Element {
  const [formatFilter, setFormatFilter] = formatState
  const [circleFilter, setCircleFilter] = circleState
  const [categoryFilter, setCategoryFilter] = categoryState

  return (
    <Row flexDir={['column', 'row']}>
      {/* Select Format */}
      <Select
        selectedValue={formatFilter}
        placeholder="Choose Format"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(format) =>
          setFormatFilter(format as AchievementFormatFilter)
        }
      >
        <Select.Item label="Any Format" value="" />
        <Select.Item label="Audio" value="audio" />
        <Select.Item label="Video" value="video" />
        <Select.Item label="Auto" value="automatic" />
        <Select.Item label="Focused" value="focused" />
      </Select>

      {/* Select Circle */}
      <Select
        selectedValue={circleFilter}
        placeholder="Choose Circle"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(circle) =>
          setCircleFilter(circle as AchievementCircleFilter)
        }
        mt={[2, 0]}
        ml={[0, 2]}
      >
        <Select.Item label="Any Circle" value="" />
        <Select.Item label="Solo" value="solo" />
        <Select.Item label="Jenny" value="jenny" />
        <Select.Item label="Group" value="group" />
      </Select>

      {/* Select Category */}
      <Select
        selectedValue={categoryFilter}
        placeholder="Choose Category"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(category) =>
          setCategoryFilter(category as AchievementCategoryFilter)
        }
        mt={[2, 0]}
        ml={[0, 2]}
      >
        <Select.Item label="Any Category" value="" />
        <Select.Item label="Faith" value="faith" />
        <Select.Item label="Love" value="love" />
        <Select.Item label="Health" value="health" />
        <Select.Item label="Learn" value="learn" />
        <Select.Item label="Fun" value="fun" />
        <Select.Item label="Wealth" value="wealth" />
      </Select>
    </Row>
  )
}

export default AchievementFilters
