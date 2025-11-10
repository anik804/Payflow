import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { supabase } from '@/integrations/supabase/client';
import { setAuth, setUserRole, clearAuth, setLoading } from '@/store/slices/authSlice';
import { RootState } from '@/store/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, session, userRole, isLoading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        dispatch(setAuth({ user: session?.user ?? null, session }));
        
        if (session?.user) {
          // Defer fetching user role to avoid recursion
          setTimeout(async () => {
            try {
              const { data: roleData } = await supabase
                .from('user_roles')
                .select('role')
                .eq('user_id', session.user.id)
                .single();
              
              if (roleData) {
                dispatch(setUserRole(roleData.role as 'user' | 'agent' | 'admin'));
              }
            } catch (error) {
              console.error('Error fetching user role:', error);
            }
          }, 0);
        } else {
          dispatch(setUserRole(null));
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setAuth({ user: session?.user ?? null, session }));
      
      if (session?.user) {
        setTimeout(async () => {
          try {
            const { data: roleData } = await supabase
              .from('user_roles')
              .select('role')
              .eq('user_id', session.user.id)
              .single();
            
            if (roleData) {
              dispatch(setUserRole(roleData.role as 'user' | 'agent' | 'admin'));
            }
          } catch (error) {
            console.error('Error fetching user role:', error);
          }
        }, 0);
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  const signOut = async () => {
    await supabase.auth.signOut();
    dispatch(clearAuth());
  };

  return { user, session, userRole, isLoading, signOut };
};
