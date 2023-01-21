import { AchievementFilter } from '../achievements/types'

export type RootStackParamList = {
  Achievements: { filter: AchievementFilter }
  Account: undefined
}
