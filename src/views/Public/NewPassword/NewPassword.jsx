import { useParams } from 'react-router-dom'

import { Token } from '../../../common/storage'
import { ErrorToken } from './components/ErrorToken'
import { SetPassword } from './components/SetPassword'

export default function NewPassword() {
  const { token } = useParams()

  return Token.CheckToken(token) ? (
    <SetPassword token={token} />
  ) : (
    <ErrorToken />
  )
}
