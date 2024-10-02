import React, { useState } from 'react'

{
  /* PROPS TYPE VALUES FOR ACCOUNT TYPE DISPLAY COMPONENT */
}
interface AccountTypeDisplayProps {
  status: string
  setStatus: (status: string) => void
  setIsUserBroke: (isBroke: boolean) => void
}

const AccountTypeDisplay: React.FC<AccountTypeDisplayProps> = ({
  status,
  setStatus,
  setIsUserBroke,
}) => {
  let accountTypeDisplayBackgroundColor =
    status === 'premium' ? 'gold' : status === 'freemium' ? 'grey' : 'purple'
  let accountTypeDisplayTextColor = status === 'premium' ? 'black' : 'white'

  return (
    <div
      style={{
        fontSize: '0.5rem',
        marginBottom: '5px',
        marginTop: '5px',
        backgroundColor: accountTypeDisplayBackgroundColor,
        color: accountTypeDisplayTextColor,
        cursor: 'pointer',
        padding: '3px 5px',
        borderRadius: '5px',
        width: 'max-content',
        marginLeft: '20px',
        userSelect: 'none',
      }}
    >
      {status.toUpperCase()}
    </div>
  )
}

export default AccountTypeDisplay
