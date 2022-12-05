import React from 'react'

type ErrorSpanProps = {
  errorMsg: string,
}

const ErrorSpan: React.FC<ErrorSpanProps> = ({ errorMsg }) => {
  return (
    <span className="w-full h-12 mb-2 flexJIC">
      <p className="w-full text-xl text-justify text-red-500">{errorMsg}</p>
    </span>
  )
}

export default ErrorSpan