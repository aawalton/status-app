import {
  AchievementCategoryFilter,
  AchievementCircleFilter,
  AchievementFormatFilter,
} from '../achievements/types'

export type RootStackParamList = {
  Achievements: {
    format?: AchievementFormatFilter
    circle?: AchievementCircleFilter
    category?: AchievementCategoryFilter
  }
  Account: undefined
}
