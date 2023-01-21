export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: string;
  JSON: any;
  Time: any;
  UUID: string;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename: 'Mutation';
  /** Deletes zero or more records from the `achievement_categories` collection */
  deleteFromachievement_categoriesCollection: Achievement_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `achievement_colors` collection */
  deleteFromachievement_colorsCollection: Achievement_ColorsDeleteResponse;
  /** Deletes zero or more records from the `achievement_formats` collection */
  deleteFromachievement_formatsCollection: Achievement_FormatsDeleteResponse;
  /** Deletes zero or more records from the `achievement_points` collection */
  deleteFromachievement_pointsCollection: Achievement_PointsDeleteResponse;
  /** Deletes zero or more records from the `achievement_types` collection */
  deleteFromachievement_typesCollection: Achievement_TypesDeleteResponse;
  /** Deletes zero or more records from the `achievements` collection */
  deleteFromachievementsCollection: AchievementsDeleteResponse;
  /** Deletes zero or more records from the `eso_characters` collection */
  deleteFromeso_charactersCollection: Eso_CharactersDeleteResponse;
  /** Deletes zero or more records from the `eso_skills` collection */
  deleteFromeso_skillsCollection: Eso_SkillsDeleteResponse;
  /** Deletes zero or more records from the `eso_zones` collection */
  deleteFromeso_zonesCollection: Eso_ZonesDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the `wondrium_categories` collection */
  deleteFromwondrium_categoriesCollection: Wondrium_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `wondrium_course_categories` collection */
  deleteFromwondrium_course_categoriesCollection: Wondrium_Course_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `wondrium_courses` collection */
  deleteFromwondrium_coursesCollection: Wondrium_CoursesDeleteResponse;
  /** Adds one or more `achievement_categories` records to the collection */
  insertIntoachievement_categoriesCollection?: Maybe<Achievement_CategoriesInsertResponse>;
  /** Adds one or more `achievement_colors` records to the collection */
  insertIntoachievement_colorsCollection?: Maybe<Achievement_ColorsInsertResponse>;
  /** Adds one or more `achievement_formats` records to the collection */
  insertIntoachievement_formatsCollection?: Maybe<Achievement_FormatsInsertResponse>;
  /** Adds one or more `achievement_points` records to the collection */
  insertIntoachievement_pointsCollection?: Maybe<Achievement_PointsInsertResponse>;
  /** Adds one or more `achievement_types` records to the collection */
  insertIntoachievement_typesCollection?: Maybe<Achievement_TypesInsertResponse>;
  /** Adds one or more `achievements` records to the collection */
  insertIntoachievementsCollection?: Maybe<AchievementsInsertResponse>;
  /** Adds one or more `eso_characters` records to the collection */
  insertIntoeso_charactersCollection?: Maybe<Eso_CharactersInsertResponse>;
  /** Adds one or more `eso_skills` records to the collection */
  insertIntoeso_skillsCollection?: Maybe<Eso_SkillsInsertResponse>;
  /** Adds one or more `eso_zones` records to the collection */
  insertIntoeso_zonesCollection?: Maybe<Eso_ZonesInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `wondrium_categories` records to the collection */
  insertIntowondrium_categoriesCollection?: Maybe<Wondrium_CategoriesInsertResponse>;
  /** Adds one or more `wondrium_course_categories` records to the collection */
  insertIntowondrium_course_categoriesCollection?: Maybe<Wondrium_Course_CategoriesInsertResponse>;
  /** Adds one or more `wondrium_courses` records to the collection */
  insertIntowondrium_coursesCollection?: Maybe<Wondrium_CoursesInsertResponse>;
  /** Updates zero or more records in the `achievement_categories` collection */
  updateachievement_categoriesCollection: Achievement_CategoriesUpdateResponse;
  /** Updates zero or more records in the `achievement_colors` collection */
  updateachievement_colorsCollection: Achievement_ColorsUpdateResponse;
  /** Updates zero or more records in the `achievement_formats` collection */
  updateachievement_formatsCollection: Achievement_FormatsUpdateResponse;
  /** Updates zero or more records in the `achievement_points` collection */
  updateachievement_pointsCollection: Achievement_PointsUpdateResponse;
  /** Updates zero or more records in the `achievement_types` collection */
  updateachievement_typesCollection: Achievement_TypesUpdateResponse;
  /** Updates zero or more records in the `achievements` collection */
  updateachievementsCollection: AchievementsUpdateResponse;
  /** Updates zero or more records in the `eso_characters` collection */
  updateeso_charactersCollection: Eso_CharactersUpdateResponse;
  /** Updates zero or more records in the `eso_skills` collection */
  updateeso_skillsCollection: Eso_SkillsUpdateResponse;
  /** Updates zero or more records in the `eso_zones` collection */
  updateeso_zonesCollection: Eso_ZonesUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the `wondrium_categories` collection */
  updatewondrium_categoriesCollection: Wondrium_CategoriesUpdateResponse;
  /** Updates zero or more records in the `wondrium_course_categories` collection */
  updatewondrium_course_categoriesCollection: Wondrium_Course_CategoriesUpdateResponse;
  /** Updates zero or more records in the `wondrium_courses` collection */
  updatewondrium_coursesCollection: Wondrium_CoursesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromachievement_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromachievement_ColorsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_ColorsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromachievement_FormatsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_FormatsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromachievement_PointsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_PointsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromachievement_TypesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_TypesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromachievementsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<AchievementsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromeso_CharactersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Eso_CharactersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromeso_SkillsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Eso_SkillsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromeso_ZonesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Eso_ZonesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromwondrium_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Wondrium_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromwondrium_Course_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Wondrium_Course_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromwondrium_CoursesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Wondrium_CoursesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoachievement_CategoriesCollectionArgs = {
  objects: Array<Achievement_CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoachievement_ColorsCollectionArgs = {
  objects: Array<Achievement_ColorsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoachievement_FormatsCollectionArgs = {
  objects: Array<Achievement_FormatsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoachievement_PointsCollectionArgs = {
  objects: Array<Achievement_PointsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoachievement_TypesCollectionArgs = {
  objects: Array<Achievement_TypesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoachievementsCollectionArgs = {
  objects: Array<AchievementsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoeso_CharactersCollectionArgs = {
  objects: Array<Eso_CharactersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoeso_SkillsCollectionArgs = {
  objects: Array<Eso_SkillsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoeso_ZonesCollectionArgs = {
  objects: Array<Eso_ZonesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntowondrium_CategoriesCollectionArgs = {
  objects: Array<Wondrium_CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntowondrium_Course_CategoriesCollectionArgs = {
  objects: Array<Wondrium_Course_CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntowondrium_CoursesCollectionArgs = {
  objects: Array<Wondrium_CoursesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateachievement_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_CategoriesFilter>;
  set: Achievement_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateachievement_ColorsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_ColorsFilter>;
  set: Achievement_ColorsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateachievement_FormatsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_FormatsFilter>;
  set: Achievement_FormatsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateachievement_PointsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_PointsFilter>;
  set: Achievement_PointsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateachievement_TypesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Achievement_TypesFilter>;
  set: Achievement_TypesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateachievementsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<AchievementsFilter>;
  set: AchievementsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateeso_CharactersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Eso_CharactersFilter>;
  set: Eso_CharactersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateeso_SkillsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Eso_SkillsFilter>;
  set: Eso_SkillsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateeso_ZonesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Eso_ZonesFilter>;
  set: Eso_ZonesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatewondrium_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Wondrium_CategoriesFilter>;
  set: Wondrium_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatewondrium_Course_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Wondrium_Course_CategoriesFilter>;
  set: Wondrium_Course_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatewondrium_CoursesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Wondrium_CoursesFilter>;
  set: Wondrium_CoursesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename: 'Query';
  /** A pagable collection of type `achievement_categories` */
  achievement_categoriesCollection?: Maybe<Achievement_CategoriesConnection>;
  /** A pagable collection of type `achievement_colors` */
  achievement_colorsCollection?: Maybe<Achievement_ColorsConnection>;
  /** A pagable collection of type `achievement_formats` */
  achievement_formatsCollection?: Maybe<Achievement_FormatsConnection>;
  /** A pagable collection of type `achievement_points` */
  achievement_pointsCollection?: Maybe<Achievement_PointsConnection>;
  /** A pagable collection of type `achievement_types` */
  achievement_typesCollection?: Maybe<Achievement_TypesConnection>;
  /** A pagable collection of type `achievements` */
  achievementsCollection?: Maybe<AchievementsConnection>;
  /** A pagable collection of type `eso_characters` */
  eso_charactersCollection?: Maybe<Eso_CharactersConnection>;
  /** A pagable collection of type `eso_skills` */
  eso_skillsCollection?: Maybe<Eso_SkillsConnection>;
  /** A pagable collection of type `eso_zones` */
  eso_zonesCollection?: Maybe<Eso_ZonesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  /** A pagable collection of type `wondrium_categories` */
  wondrium_categoriesCollection?: Maybe<Wondrium_CategoriesConnection>;
  /** A pagable collection of type `wondrium_course_categories` */
  wondrium_course_categoriesCollection?: Maybe<Wondrium_Course_CategoriesConnection>;
  /** A pagable collection of type `wondrium_courses` */
  wondrium_coursesCollection?: Maybe<Wondrium_CoursesConnection>;
};


/** The root type for querying data */
export type QueryAchievement_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Achievement_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Achievement_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryAchievement_ColorsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Achievement_ColorsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Achievement_ColorsOrderBy>>;
};


/** The root type for querying data */
export type QueryAchievement_FormatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Achievement_FormatsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Achievement_FormatsOrderBy>>;
};


/** The root type for querying data */
export type QueryAchievement_PointsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Achievement_PointsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Achievement_PointsOrderBy>>;
};


/** The root type for querying data */
export type QueryAchievement_TypesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Achievement_TypesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Achievement_TypesOrderBy>>;
};


/** The root type for querying data */
export type QueryAchievementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AchievementsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>;
};


/** The root type for querying data */
export type QueryEso_CharactersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Eso_CharactersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Eso_CharactersOrderBy>>;
};


/** The root type for querying data */
export type QueryEso_SkillsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Eso_SkillsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Eso_SkillsOrderBy>>;
};


/** The root type for querying data */
export type QueryEso_ZonesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Eso_ZonesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Eso_ZonesOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};


/** The root type for querying data */
export type QueryWondrium_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Wondrium_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Wondrium_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryWondrium_Course_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Wondrium_Course_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Wondrium_Course_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryWondrium_CoursesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Wondrium_CoursesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Wondrium_CoursesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Achievement_Categories = Node & {
  __typename: 'achievement_categories';
  achievement_colors?: Maybe<Achievement_Colors>;
  achievementsCollection?: Maybe<AchievementsConnection>;
  color: Scalars['String'];
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
};


export type Achievement_CategoriesAchievementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AchievementsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>;
};

export type Achievement_CategoriesConnection = {
  __typename: 'achievement_categoriesConnection';
  edges: Array<Achievement_CategoriesEdge>;
  pageInfo: PageInfo;
};

export type Achievement_CategoriesDeleteResponse = {
  __typename: 'achievement_categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Categories>;
};

export type Achievement_CategoriesEdge = {
  __typename: 'achievement_categoriesEdge';
  cursor: Scalars['String'];
  node: Achievement_Categories;
};

export type Achievement_CategoriesFilter = {
  color?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Achievement_CategoriesInsertInput = {
  color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_CategoriesInsertResponse = {
  __typename: 'achievement_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Categories>;
};

export type Achievement_CategoriesOrderBy = {
  color?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Achievement_CategoriesUpdateInput = {
  color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_CategoriesUpdateResponse = {
  __typename: 'achievement_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Categories>;
};

export type Achievement_Colors = Node & {
  __typename: 'achievement_colors';
  achievement_categoriesCollection?: Maybe<Achievement_CategoriesConnection>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
};


export type Achievement_ColorsAchievement_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Achievement_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Achievement_CategoriesOrderBy>>;
};

export type Achievement_ColorsConnection = {
  __typename: 'achievement_colorsConnection';
  edges: Array<Achievement_ColorsEdge>;
  pageInfo: PageInfo;
};

export type Achievement_ColorsDeleteResponse = {
  __typename: 'achievement_colorsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Colors>;
};

export type Achievement_ColorsEdge = {
  __typename: 'achievement_colorsEdge';
  cursor: Scalars['String'];
  node: Achievement_Colors;
};

export type Achievement_ColorsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Achievement_ColorsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_ColorsInsertResponse = {
  __typename: 'achievement_colorsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Colors>;
};

export type Achievement_ColorsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Achievement_ColorsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_ColorsUpdateResponse = {
  __typename: 'achievement_colorsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Colors>;
};

export type Achievement_Formats = Node & {
  __typename: 'achievement_formats';
  achievementsCollection?: Maybe<AchievementsConnection>;
  created_at?: Maybe<Scalars['Datetime']>;
  deleted_at?: Maybe<Scalars['Datetime']>;
  format_name: Scalars['String'];
  id: Scalars['UUID'];
  is_passive: Scalars['Boolean'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at?: Maybe<Scalars['Datetime']>;
};


export type Achievement_FormatsAchievementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AchievementsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>;
};

export type Achievement_FormatsConnection = {
  __typename: 'achievement_formatsConnection';
  edges: Array<Achievement_FormatsEdge>;
  pageInfo: PageInfo;
};

export type Achievement_FormatsDeleteResponse = {
  __typename: 'achievement_formatsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Formats>;
};

export type Achievement_FormatsEdge = {
  __typename: 'achievement_formatsEdge';
  cursor: Scalars['String'];
  node: Achievement_Formats;
};

export type Achievement_FormatsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  format_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_passive?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Achievement_FormatsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  is_passive?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_FormatsInsertResponse = {
  __typename: 'achievement_formatsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Formats>;
};

export type Achievement_FormatsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  format_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_passive?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Achievement_FormatsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  is_passive?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_FormatsUpdateResponse = {
  __typename: 'achievement_formatsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Formats>;
};

export type Achievement_Points = Node & {
  __typename: 'achievement_points';
  achievementsCollection?: Maybe<AchievementsConnection>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  points: Scalars['Int'];
  updated_at: Scalars['Datetime'];
};


export type Achievement_PointsAchievementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AchievementsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>;
};

export type Achievement_PointsConnection = {
  __typename: 'achievement_pointsConnection';
  edges: Array<Achievement_PointsEdge>;
  pageInfo: PageInfo;
};

export type Achievement_PointsDeleteResponse = {
  __typename: 'achievement_pointsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Points>;
};

export type Achievement_PointsEdge = {
  __typename: 'achievement_pointsEdge';
  cursor: Scalars['String'];
  node: Achievement_Points;
};

export type Achievement_PointsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  points?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Achievement_PointsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  points?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_PointsInsertResponse = {
  __typename: 'achievement_pointsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Points>;
};

export type Achievement_PointsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  points?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Achievement_PointsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  points?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_PointsUpdateResponse = {
  __typename: 'achievement_pointsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Points>;
};

export type Achievement_Types = Node & {
  __typename: 'achievement_types';
  achievementsCollection?: Maybe<AchievementsConnection>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
};


export type Achievement_TypesAchievementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AchievementsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>;
};

export type Achievement_TypesConnection = {
  __typename: 'achievement_typesConnection';
  edges: Array<Achievement_TypesEdge>;
  pageInfo: PageInfo;
};

export type Achievement_TypesDeleteResponse = {
  __typename: 'achievement_typesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Types>;
};

export type Achievement_TypesEdge = {
  __typename: 'achievement_typesEdge';
  cursor: Scalars['String'];
  node: Achievement_Types;
};

export type Achievement_TypesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Achievement_TypesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_TypesInsertResponse = {
  __typename: 'achievement_typesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Types>;
};

export type Achievement_TypesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Achievement_TypesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Achievement_TypesUpdateResponse = {
  __typename: 'achievement_typesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievement_Types>;
};

export type Achievements = Node & {
  __typename: 'achievements';
  achievement_categories?: Maybe<Achievement_Categories>;
  achievement_formats?: Maybe<Achievement_Formats>;
  achievement_points?: Maybe<Achievement_Points>;
  achievement_types?: Maybe<Achievement_Types>;
  achievements?: Maybe<Achievements>;
  achievementsCollection?: Maybe<AchievementsConnection>;
  category_name: Scalars['String'];
  completed?: Maybe<Scalars['Boolean']>;
  completed_at?: Maybe<Scalars['Datetime']>;
  context?: Maybe<Scalars['String']>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  imported_at?: Maybe<Scalars['Datetime']>;
  is_collection?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  parent_achievement_id?: Maybe<Scalars['UUID']>;
  people: Array<Maybe<Scalars['String']>>;
  percent_complete?: Maybe<Scalars['String']>;
  points: Scalars['Int'];
  progress: Scalars['String'];
  progress_at?: Maybe<Scalars['Datetime']>;
  target: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at: Scalars['Datetime'];
  user_id: Scalars['UUID'];
};


export type AchievementsAchievementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AchievementsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>;
};

export type AchievementsConnection = {
  __typename: 'achievementsConnection';
  edges: Array<AchievementsEdge>;
  pageInfo: PageInfo;
};

export type AchievementsDeleteResponse = {
  __typename: 'achievementsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievements>;
};

export type AchievementsEdge = {
  __typename: 'achievementsEdge';
  cursor: Scalars['String'];
  node: Achievements;
};

export type AchievementsFilter = {
  category_name?: InputMaybe<StringFilter>;
  completed?: InputMaybe<BooleanFilter>;
  completed_at?: InputMaybe<DatetimeFilter>;
  context?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  format_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  imported_at?: InputMaybe<DatetimeFilter>;
  is_collection?: InputMaybe<BooleanFilter>;
  level?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  parent_achievement_id?: InputMaybe<UuidFilter>;
  percent_complete?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  progress?: InputMaybe<StringFilter>;
  progress_at?: InputMaybe<DatetimeFilter>;
  target?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type AchievementsInsertInput = {
  category_name?: InputMaybe<Scalars['String']>;
  completed_at?: InputMaybe<Scalars['Datetime']>;
  context?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  imported_at?: InputMaybe<Scalars['Datetime']>;
  level?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  parent_achievement_id?: InputMaybe<Scalars['UUID']>;
  people?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['String']>;
  progress_at?: InputMaybe<Scalars['Datetime']>;
  target?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type AchievementsInsertResponse = {
  __typename: 'achievementsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievements>;
};

export type AchievementsOrderBy = {
  category_name?: InputMaybe<OrderByDirection>;
  completed?: InputMaybe<OrderByDirection>;
  completed_at?: InputMaybe<OrderByDirection>;
  context?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  format_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  imported_at?: InputMaybe<OrderByDirection>;
  is_collection?: InputMaybe<OrderByDirection>;
  level?: InputMaybe<OrderByDirection>;
  link?: InputMaybe<OrderByDirection>;
  parent_achievement_id?: InputMaybe<OrderByDirection>;
  percent_complete?: InputMaybe<OrderByDirection>;
  points?: InputMaybe<OrderByDirection>;
  progress?: InputMaybe<OrderByDirection>;
  progress_at?: InputMaybe<OrderByDirection>;
  target?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type AchievementsUpdateInput = {
  category_name?: InputMaybe<Scalars['String']>;
  completed_at?: InputMaybe<Scalars['Datetime']>;
  context?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  imported_at?: InputMaybe<Scalars['Datetime']>;
  level?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  parent_achievement_id?: InputMaybe<Scalars['UUID']>;
  people?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['String']>;
  progress_at?: InputMaybe<Scalars['Datetime']>;
  target?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type AchievementsUpdateResponse = {
  __typename: 'achievementsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Achievements>;
};

export type Eso_Characters = Node & {
  __typename: 'eso_characters';
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
};

export type Eso_CharactersConnection = {
  __typename: 'eso_charactersConnection';
  edges: Array<Eso_CharactersEdge>;
  pageInfo: PageInfo;
};

export type Eso_CharactersDeleteResponse = {
  __typename: 'eso_charactersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Characters>;
};

export type Eso_CharactersEdge = {
  __typename: 'eso_charactersEdge';
  cursor: Scalars['String'];
  node: Eso_Characters;
};

export type Eso_CharactersFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Eso_CharactersInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Eso_CharactersInsertResponse = {
  __typename: 'eso_charactersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Characters>;
};

export type Eso_CharactersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Eso_CharactersUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Eso_CharactersUpdateResponse = {
  __typename: 'eso_charactersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Characters>;
};

export type Eso_Skills = Node & {
  __typename: 'eso_skills';
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  level: Scalars['Int'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  skill_line: Scalars['String'];
  target: Scalars['Int'];
  updated_at: Scalars['Datetime'];
};

export type Eso_SkillsConnection = {
  __typename: 'eso_skillsConnection';
  edges: Array<Eso_SkillsEdge>;
  pageInfo: PageInfo;
};

export type Eso_SkillsDeleteResponse = {
  __typename: 'eso_skillsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Skills>;
};

export type Eso_SkillsEdge = {
  __typename: 'eso_skillsEdge';
  cursor: Scalars['String'];
  node: Eso_Skills;
};

export type Eso_SkillsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  level?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  skill_line?: InputMaybe<StringFilter>;
  target?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Eso_SkillsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  level?: InputMaybe<Scalars['Int']>;
  skill_line?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Eso_SkillsInsertResponse = {
  __typename: 'eso_skillsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Skills>;
};

export type Eso_SkillsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  level?: InputMaybe<OrderByDirection>;
  skill_line?: InputMaybe<OrderByDirection>;
  target?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Eso_SkillsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  level?: InputMaybe<Scalars['Int']>;
  skill_line?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Eso_SkillsUpdateResponse = {
  __typename: 'eso_skillsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Skills>;
};

export type Eso_Zones = Node & {
  __typename: 'eso_zones';
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
};

export type Eso_ZonesConnection = {
  __typename: 'eso_zonesConnection';
  edges: Array<Eso_ZonesEdge>;
  pageInfo: PageInfo;
};

export type Eso_ZonesDeleteResponse = {
  __typename: 'eso_zonesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Zones>;
};

export type Eso_ZonesEdge = {
  __typename: 'eso_zonesEdge';
  cursor: Scalars['String'];
  node: Eso_Zones;
};

export type Eso_ZonesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Eso_ZonesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Eso_ZonesInsertResponse = {
  __typename: 'eso_zonesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Zones>;
};

export type Eso_ZonesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Eso_ZonesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Eso_ZonesUpdateResponse = {
  __typename: 'eso_zonesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Eso_Zones>;
};

export type Profiles = Node & {
  __typename: 'profiles';
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
  user_id: Scalars['UUID'];
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type ProfilesConnection = {
  __typename: 'profilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename: 'profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename: 'profilesEdge';
  cursor: Scalars['String'];
  node: Profiles;
};

export type ProfilesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
  username?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ProfilesInsertResponse = {
  __typename: 'profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
  website?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ProfilesUpdateResponse = {
  __typename: 'profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type Wondrium_Categories = Node & {
  __typename: 'wondrium_categories';
  achievement_id?: Maybe<Scalars['UUID']>;
  created_at?: Maybe<Scalars['Datetime']>;
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  indexed_at?: Maybe<Scalars['Datetime']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  parent_category_id?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Datetime']>;
  url: Scalars['String'];
  wondrium_categories?: Maybe<Wondrium_Categories>;
  wondrium_categoriesCollection?: Maybe<Wondrium_CategoriesConnection>;
  wondrium_course_categoriesCollection?: Maybe<Wondrium_Course_CategoriesConnection>;
};


export type Wondrium_CategoriesWondrium_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Wondrium_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Wondrium_CategoriesOrderBy>>;
};


export type Wondrium_CategoriesWondrium_Course_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Wondrium_Course_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Wondrium_Course_CategoriesOrderBy>>;
};

export type Wondrium_CategoriesConnection = {
  __typename: 'wondrium_categoriesConnection';
  edges: Array<Wondrium_CategoriesEdge>;
  pageInfo: PageInfo;
};

export type Wondrium_CategoriesDeleteResponse = {
  __typename: 'wondrium_categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Categories>;
};

export type Wondrium_CategoriesEdge = {
  __typename: 'wondrium_categoriesEdge';
  cursor: Scalars['String'];
  node: Wondrium_Categories;
};

export type Wondrium_CategoriesFilter = {
  achievement_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  indexed_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  parent_category_id?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type Wondrium_CategoriesInsertInput = {
  achievement_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  indexed_at?: InputMaybe<Scalars['Datetime']>;
  parent_category_id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Wondrium_CategoriesInsertResponse = {
  __typename: 'wondrium_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Categories>;
};

export type Wondrium_CategoriesOrderBy = {
  achievement_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  indexed_at?: InputMaybe<OrderByDirection>;
  parent_category_id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type Wondrium_CategoriesUpdateInput = {
  achievement_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  indexed_at?: InputMaybe<Scalars['Datetime']>;
  parent_category_id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Wondrium_CategoriesUpdateResponse = {
  __typename: 'wondrium_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Categories>;
};

export type Wondrium_Course_Categories = Node & {
  __typename: 'wondrium_course_categories';
  achievement_id?: Maybe<Scalars['UUID']>;
  category_id: Scalars['UUID'];
  course_id: Scalars['UUID'];
  created_at?: Maybe<Scalars['Datetime']>;
  deleted_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  indexed_at?: Maybe<Scalars['Datetime']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at?: Maybe<Scalars['Datetime']>;
  wondrium_categories?: Maybe<Wondrium_Categories>;
  wondrium_courses?: Maybe<Wondrium_Courses>;
};

export type Wondrium_Course_CategoriesConnection = {
  __typename: 'wondrium_course_categoriesConnection';
  edges: Array<Wondrium_Course_CategoriesEdge>;
  pageInfo: PageInfo;
};

export type Wondrium_Course_CategoriesDeleteResponse = {
  __typename: 'wondrium_course_categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Course_Categories>;
};

export type Wondrium_Course_CategoriesEdge = {
  __typename: 'wondrium_course_categoriesEdge';
  cursor: Scalars['String'];
  node: Wondrium_Course_Categories;
};

export type Wondrium_Course_CategoriesFilter = {
  achievement_id?: InputMaybe<UuidFilter>;
  category_id?: InputMaybe<UuidFilter>;
  course_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  indexed_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Wondrium_Course_CategoriesInsertInput = {
  achievement_id?: InputMaybe<Scalars['UUID']>;
  category_id?: InputMaybe<Scalars['UUID']>;
  course_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  indexed_at?: InputMaybe<Scalars['Datetime']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Wondrium_Course_CategoriesInsertResponse = {
  __typename: 'wondrium_course_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Course_Categories>;
};

export type Wondrium_Course_CategoriesOrderBy = {
  achievement_id?: InputMaybe<OrderByDirection>;
  category_id?: InputMaybe<OrderByDirection>;
  course_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  indexed_at?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Wondrium_Course_CategoriesUpdateInput = {
  achievement_id?: InputMaybe<Scalars['UUID']>;
  category_id?: InputMaybe<Scalars['UUID']>;
  course_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  indexed_at?: InputMaybe<Scalars['Datetime']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Wondrium_Course_CategoriesUpdateResponse = {
  __typename: 'wondrium_course_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Course_Categories>;
};

export type Wondrium_Courses = Node & {
  __typename: 'wondrium_courses';
  created_at?: Maybe<Scalars['Datetime']>;
  deleted_at?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['String']>;
  episodes?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  indexed_at?: Maybe<Scalars['Datetime']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Datetime']>;
  url: Scalars['String'];
  wondrium_course_categoriesCollection?: Maybe<Wondrium_Course_CategoriesConnection>;
};


export type Wondrium_CoursesWondrium_Course_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Wondrium_Course_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Wondrium_Course_CategoriesOrderBy>>;
};

export type Wondrium_CoursesConnection = {
  __typename: 'wondrium_coursesConnection';
  edges: Array<Wondrium_CoursesEdge>;
  pageInfo: PageInfo;
};

export type Wondrium_CoursesDeleteResponse = {
  __typename: 'wondrium_coursesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Courses>;
};

export type Wondrium_CoursesEdge = {
  __typename: 'wondrium_coursesEdge';
  cursor: Scalars['String'];
  node: Wondrium_Courses;
};

export type Wondrium_CoursesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  episodes?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  indexed_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type Wondrium_CoursesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  episodes?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['UUID']>;
  indexed_at?: InputMaybe<Scalars['Datetime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Wondrium_CoursesInsertResponse = {
  __typename: 'wondrium_coursesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Courses>;
};

export type Wondrium_CoursesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  episodes?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  indexed_at?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type Wondrium_CoursesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  episodes?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['UUID']>;
  indexed_at?: InputMaybe<Scalars['Datetime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Wondrium_CoursesUpdateResponse = {
  __typename: 'wondrium_coursesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wondrium_Courses>;
};

export type PlusOneButtonAchievementFragment = { __typename: 'achievements', id: string, is_collection?: boolean | null, progress: string, target: number, completed_at?: string | null };

export type PlusOneButtonUpdateAchievementMutationVariables = Exact<{
  set: AchievementsUpdateInput;
  filter?: InputMaybe<AchievementsFilter>;
}>;


export type PlusOneButtonUpdateAchievementMutation = { __typename: 'Mutation', updateachievementsCollection: { __typename: 'achievementsUpdateResponse', records: Array<{ __typename: 'achievements', id: string, progress: string, percent_complete?: string | null, progress_at?: string | null, completed_at?: string | null, updated_at: string }> } };

export type ResetProgressButtonResetProgressMutationVariables = Exact<{
  set: AchievementsUpdateInput;
  filter?: InputMaybe<AchievementsFilter>;
  atMost: Scalars['Int'];
}>;


export type ResetProgressButtonResetProgressMutation = { __typename: 'Mutation', updateachievementsCollection: { __typename: 'achievementsUpdateResponse', records: Array<{ __typename: 'achievements', id: string, progress_at?: string | null, updated_at: string }> } };

export type AchievementBoxAchievementFragment = { __typename: 'achievements', id: string, user_id: string, type: string, is_collection?: boolean | null, level?: number | null, parent_achievement_id?: string | null, category_name: string, title?: string | null, description?: string | null, link?: string | null, points: number, progress: string, target: number, progress_at?: string | null, percent_complete?: string | null, completed?: boolean | null, completed_at?: string | null, created_at: string, updated_at: string, deleted_at?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string, color: string, created_at: string, updated_at: string, deleted_at?: string | null } | null };

export type NextChildAchievementQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy> | AchievementsOrderBy>;
  filter?: InputMaybe<AchievementsFilter>;
}>;


export type NextChildAchievementQuery = { __typename: 'Query', achievementsCollection?: { __typename: 'achievementsConnection', edges: Array<{ __typename: 'achievementsEdge', node: { __typename: 'achievements', id: string, user_id: string, type: string, is_collection?: boolean | null, level?: number | null, parent_achievement_id?: string | null, category_name: string, title?: string | null, description?: string | null, link?: string | null, points: number, progress: string, target: number, progress_at?: string | null, percent_complete?: string | null, completed?: boolean | null, completed_at?: string | null, created_at: string, updated_at: string, deleted_at?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string, color: string, created_at: string, updated_at: string, deleted_at?: string | null } | null } }> } | null };

export type AchievementCardAchievementFragment = { __typename: 'achievements', id: string, completed?: boolean | null, progress_at?: string | null, user_id: string, type: string, is_collection?: boolean | null, level?: number | null, parent_achievement_id?: string | null, category_name: string, title?: string | null, description?: string | null, link?: string | null, points: number, progress: string, target: number, percent_complete?: string | null, completed_at?: string | null, created_at: string, updated_at: string, deleted_at?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string, color: string, created_at: string, updated_at: string, deleted_at?: string | null } | null };

export type SelectParentAchievementsCollectionQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy> | AchievementsOrderBy>;
  filter?: InputMaybe<AchievementsFilter>;
}>;


export type SelectParentAchievementsCollectionQuery = { __typename: 'Query', achievementsCollection?: { __typename: 'achievementsConnection', edges: Array<{ __typename: 'achievementsEdge', node: { __typename: 'achievements', id: string, user_id: string, type: string, is_collection?: boolean | null, level?: number | null, parent_achievement_id?: string | null, category_name: string, title?: string | null, description?: string | null, link?: string | null, points: number, progress: string, target: number, progress_at?: string | null, percent_complete?: string | null, completed?: boolean | null, completed_at?: string | null, created_at: string, updated_at: string, deleted_at?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string, color: string, created_at: string, updated_at: string, deleted_at?: string | null } | null } }> } | null };

export type UseAchievementsAchievementFragment = { __typename: 'achievements', id: string, user_id: string, type: string, is_collection?: boolean | null, level?: number | null, parent_achievement_id?: string | null, category_name: string, title?: string | null, description?: string | null, link?: string | null, points: number, progress: string, target: number, progress_at?: string | null, percent_complete?: string | null, completed?: boolean | null, completed_at?: string | null, created_at: string, updated_at: string, deleted_at?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string, color: string, created_at: string, updated_at: string, deleted_at?: string | null } | null };

export type AchievementsCollectionQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<AchievementsOrderBy> | AchievementsOrderBy>;
  filter?: InputMaybe<AchievementsFilter>;
}>;


export type AchievementsCollectionQuery = { __typename: 'Query', achievementsCollection?: { __typename: 'achievementsConnection', edges: Array<{ __typename: 'achievementsEdge', node: { __typename: 'achievements', id: string, user_id: string, type: string, is_collection?: boolean | null, level?: number | null, parent_achievement_id?: string | null, category_name: string, title?: string | null, description?: string | null, link?: string | null, points: number, progress: string, target: number, progress_at?: string | null, percent_complete?: string | null, completed?: boolean | null, completed_at?: string | null, created_at: string, updated_at: string, deleted_at?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string, color: string, created_at: string, updated_at: string, deleted_at?: string | null } | null } }>, pageInfo: { __typename: 'PageInfo', startCursor?: string | null, hasNextPage: boolean } } | null };

export type AchievementMenuAchievementFragment = { __typename: 'achievements', id: string, is_collection?: boolean | null, target: number, completed_at?: string | null, type: string, points: number, parent_achievement_id?: string | null, title?: string | null, description?: string | null, progress: string, link?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string } | null };

export type DoneMenuItemAchievementFragment = { __typename: 'achievements', id: string, is_collection?: boolean | null, target: number, completed_at?: string | null };

export type DoneMenuItemUpdateAchievementMutationVariables = Exact<{
  set: AchievementsUpdateInput;
  filter?: InputMaybe<AchievementsFilter>;
}>;


export type DoneMenuItemUpdateAchievementMutation = { __typename: 'Mutation', updateachievementsCollection: { __typename: 'achievementsUpdateResponse', records: Array<{ __typename: 'achievements', id: string, progress: string, percent_complete?: string | null, progress_at?: string | null, completed_at?: string | null, updated_at: string }> } };

export type AddAchievementModalCreateAchievementMutationVariables = Exact<{
  objects: Array<AchievementsInsertInput> | AchievementsInsertInput;
}>;


export type AddAchievementModalCreateAchievementMutation = { __typename: 'Mutation', insertIntoachievementsCollection?: { __typename: 'achievementsInsertResponse', records: Array<{ __typename: 'achievements', id: string }> } | null };

export type EditAchievementModalAchievementFragment = { __typename: 'achievements', id: string, type: string, points: number, parent_achievement_id?: string | null, title?: string | null, description?: string | null, target: number, progress: string, completed_at?: string | null, link?: string | null, achievement_categories?: { __typename: 'achievement_categories', id: string, name: string } | null };

export type EditAchievementModalUpdateAchievementMutationVariables = Exact<{
  set: AchievementsUpdateInput;
  filter?: InputMaybe<AchievementsFilter>;
}>;


export type EditAchievementModalUpdateAchievementMutation = { __typename: 'Mutation', updateachievementsCollection: { __typename: 'achievementsUpdateResponse', records: Array<{ __typename: 'achievements', id: string, user_id: string, type: string, title?: string | null, description?: string | null, link?: string | null, target: number, progress: string, percent_complete?: string | null, points: number, progress_at?: string | null, completed_at?: string | null, created_at: string, updated_at: string, deleted_at?: string | null, parent_achievement_id?: string | null }> } };
