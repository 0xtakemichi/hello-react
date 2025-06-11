import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    userName: '37t',
    name: 'Jorge',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel',
    isFollowing: false
  }
]

function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
              >
                {name}
              </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App