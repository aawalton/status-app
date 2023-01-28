export type AchievementType = 'boolean' | 'integer' | 'collection' | 'sequence'

export type AchievementPoints = '5' | '10' | '15' | '50'

export type AchievementFormatFilter =
  | 'passive'
  | 'automatic'
  | 'focused'
  | undefined

export type AchievementCircleFilter = 'solo' | 'jenny' | 'group' | undefined

export type AchievementCategoryFilter =
  | 'faith'
  | 'love'
  | 'health'
  | 'learn'
  | 'fun'
  | 'wealth'
  | undefined

export type Category =
  | 'faith'
  | 'love'
  | 'health'
  | 'learn'
  | 'fun'
  | 'wealth'
  | ''
