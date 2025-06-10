import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <section className='App'>
      <TwitterFollowCard 
      userName="37t" 
      name="Felipe J." 
      isFollowing 
      formatUserName={formatUserName} 
      />

      <TwitterFollowCard 
      userName="midudev" 
      name="Miguel Angel Duran" 
      isFollowing={false} 
      formatUserName={formatUserName} 
      />
    </section>
  )
}

export default App