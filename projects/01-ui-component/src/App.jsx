import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName="37t">
        37t
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        midudev
      </TwitterFollowCard>
    </section>
  )
}

export default App