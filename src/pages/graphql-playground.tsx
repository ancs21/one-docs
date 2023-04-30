import { ApolloSandbox } from '@apollo/sandbox/react'

function EmbeddedSandbox() {
  return (
    <ApolloSandbox
      initialEndpoint="http://localhost:1234/api/graphql"
      className="w-screen h-screen"
    />
  )
}

export default EmbeddedSandbox
