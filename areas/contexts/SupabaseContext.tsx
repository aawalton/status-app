import { Session } from '@supabase/supabase-js'
import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { supabase } from '../../lib/supabase'

type ContextType = Session | null

const Context = createContext<ContextType>(null)

export const useSession = (): ContextType => React.useContext(Context)

function SupabaseContext({ children }: { children: ReactNode }): JSX.Element {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    void supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // eslint-disable-next-line @typescript-eslint/no-shadow
    void supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const publicInterface = useMemo(() => session, [session])

  return <Context.Provider value={publicInterface}>{children}</Context.Provider>
}

export default SupabaseContext
