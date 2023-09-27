import MainNavigation from "./navigation/MainNavigation"
import { Provider } from "./context/GuestContext"

const App = () => {
  return (
    <Provider>
      <MainNavigation />
    </Provider>
  )
}

export default App