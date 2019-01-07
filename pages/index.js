/**
 * an example of a build-breaking dependency.
 * Unhandled Rejection (SyntaxError): Unexpected token {
 * */
import "wired-elements"

const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
)

export default Index
