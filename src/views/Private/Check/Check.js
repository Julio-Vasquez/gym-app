import React, { useState } from 'react'
import { ModalCheck } from './components/ModalCheck'

const Check = () => {
  const [open, setOpen] = useState(true);
  const [ok, setOk] = useState(false);

  const openModal = () => setOpen(!open);
  const okModal = () => {
    setOpen(false);
    setOk(true);
  }
  return (
    <div>
      <ModalCheck
        open={open}
        title="example"
        ok={okModal}
        close={openModal}
        accept={ok}
      />
    </div>
  )
}

export default Check
