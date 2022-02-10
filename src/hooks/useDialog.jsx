import { useState } from 'react'
import { string } from 'prop-types'

export const useDialog = ({ nameFuncOpen, nameFuncClose, nameState }) => {
  const [visible, setVisible] = useState(false)

  const handleVisible = () => setVisible(true)
  const handleHidden = () => setVisible(false)

  return {
    [nameFuncOpen]: handleVisible,
    [nameFuncClose]: handleHidden,
    [nameState]: visible,
  }
}

useDialog.propTypes = {
  nameFuncOpen: string.isRequired,
  nameFuncClose: string.isRequired,
  nameState: string.isRequired,
}
