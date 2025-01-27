import { YStack } from '@t4/ui'
import { useRouter } from 'solito/router'
import { PasswordResetComponent } from '@t4/ui/src/PasswordReset'
import { updatePassword } from 'app/utils/supabase/auth'

export function UpdatePasswordScreen() {
  const { push } = useRouter()

  const handlePasswordWithPress = async (emailOrPassword) => {
    // Update the password
    const { error } = await updatePassword(emailOrPassword)
    if (error) {
      console.log('Password change failed', error)
      return
    }

    push('/')
  }

  return (
    <YStack f={1} jc="center" ai="center" space>
      <PasswordResetComponent type="password" handleWithPress={handlePasswordWithPress} />
    </YStack>
  )
}
