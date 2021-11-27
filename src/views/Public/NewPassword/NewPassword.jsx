import { useParams } from 'react-router-dom'

import { ErrorToken } from './components/ErrorToken'
import { SetPassword } from './components/SetPassword'

import { Token } from '../../../common/storage'

const NewPassword = () => {
  const { token } = useParams()

  return Token.CheckToken(token) ? (
    <SetPassword token={token} />
  ) : (
    <ErrorToken />
  )
}

export default NewPassword
