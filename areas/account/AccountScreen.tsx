import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'

import { supabase } from '../../lib/supabase'
import { useSession } from '../contexts/SupabaseContext'

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})

export default function AccountScreen(): JSX.Element {
  const session = useSession()

  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website`)
        .eq('user_id', session?.user.id)
        .single()
      if (error && status !== 406) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw error
      }

      if (data) {
        setUsername(data.username as string)
        setWebsite(data.website as string)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }, [session?.user])

  const updateProfile = useCallback(
    async ({
      // eslint-disable-next-line @typescript-eslint/no-shadow
      username,
      // eslint-disable-next-line @typescript-eslint/no-shadow
      website,
    }: {
      username: string
      website: string
    }) => {
      try {
        setLoading(true)
        if (!session?.user) throw new Error('No user on the session!')

        const updates = {
          user_id: session?.user.id,
          username,
          website,
          updated_at: new Date(),
        }

        const { error } = await supabase.from('profiles').upsert(updates)

        if (error) {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw error
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message)
        }
      } finally {
        setLoading(false)
      }
    },
    [session?.user]
  )

  useEffect(() => {
    if (session) void getProfile()
  }, [getProfile, session])

  return (
    <View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input label="Email" value={session?.user?.email} disabled />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Username"
          value={username || ''}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Website"
          value={website || ''}
          onChangeText={(text) => setWebsite(text)}
        />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? 'Loading ...' : 'Update'}
          onPress={() => {
            void updateProfile({ username, website })
          }}
          disabled={loading}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button
          title="Sign Out"
          onPress={() => {
            void supabase.auth.signOut()
          }}
        />
      </View>
    </View>
  )
}
