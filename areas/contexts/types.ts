import {
  AchievementCircleFilter,
  AchievementFormatFilter,
} from '../achievements/types'

export type RootStackParamList = {
  Achievements: {
    format?: AchievementFormatFilter
    circle?: AchievementCircleFilter
  }
  Account: undefined
}
