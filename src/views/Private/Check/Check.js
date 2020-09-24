import React, { useState } from 'react'
import { ModalCheck } from './components/ModalCheck'

const Check = () => {
  const [open, setOpen] = useState(true);
  const [ok, setOk] = useState(false);

  const closeModal = () => setOpen(!open);

  const okModal = () => {
    setOpen(false);
    setOk(true);
  }

  const data = [{ name: 'julio', lastName: 'vasquez' }];

  return (
    <div>
      <ModalCheck
        data={data}
        open={open}
        title="example"
        ok={okModal}
        close={closeModal}
        accept={ok}
      />
      <p>checkeo</p>
    </div>
  )
}

export default Check
