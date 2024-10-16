import Image from 'next/image'
import Link from 'next/link'
import { Trophy, ArrowUp, ArrowDown, Minus, Plus, Dumbbell, Clock, Check, X, Moon, Smartphone } from 'lucide-react'

export default function Home() {
  const leaderboardData = [
    { name: 'Simon', points: 56, change: 'none' },
    { name: 'Nikola', points: 55, change: 'up' },
    { name: 'Daniel', points: 46, change: 'down' },
    { name: 'Yixin', points: 20, change: 'none', active: true },
  ];

  const activityData = [
    { name: 'SC GYM!!!', points: 3, icon: Dumbbell },
  ];

  const statsData = {
    screenTime: [2, 3, 1],
    workout: [true, false, true],
    sleep: [3, 6, 7],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <header className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Fantasy Life</h1>
          </div>
          <div className="space-x-4">
            <Link href="#" className="hover:underline">Features</Link>
            <Link href="#" className="hover:underline">Pricing</Link>
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section className="text-center py-20">
          <h2 className="text-5xl font-bold mb-4">Welcome to Fantasy Life</h2>
          <p className="text-xl mb-8">Start your fantasy life with just one click! Stay motivated.</p>
          <p className="mb-8 max-w-2xl mx-auto">
            Fantasy Life turns your personal growth into a fun, social experience. Set goals, track progress, and compete with friends to level up your real life.
          </p>
          <div className="mb-8 max-w-2xl mx-auto bg-white text-purple-600 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">
              Self-discipline is hard.<br/>
              Social accountability is a huge motivator.<br/>
              Self-improvement can be fun.
            </p>
          </div>
          <button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 text-lg mr-4">
            Download Now
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-purple-600 transition duration-300 text-lg">
            Learn More
          </button>
        </section>

        <div className="flex justify-center mb-20">
          <div className="bg-gray-800 p-8 rounded-[3rem] shadow-2xl" style={{maxWidth: '375px'}}>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">Fantasy Life</h3>
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-purple-600">Leaderboard</h4>
                <ul className="space-y-2 mb-4">
                  {leaderboardData.map((user, index) => (
                    <li key={user.name} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span className="font-medium text-gray-800">{index + 1}. {user.name}</span>
                      <div className="flex items-center">
                        <span className="mr-2 text-gray-800">{user.points} pts</span>
                        {user.change === 'up' && <ArrowUp className="text-green-500 w-4 h-4" />}
                        {user.change === 'down' && <ArrowDown className="text-red-500 w-4 h-4" />}
                        {user.change === 'none' && <Minus className="text-gray-500 w-4 h-4" />}
                      </div>
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-bold mb-2 text-purple-600">Recent Activity</h4>
                <div className="bg-gray-100 p-2 rounded mb-4 flex justify-between items-center">
                  <span className="flex items-center text-gray-800">
                    <Dumbbell className="w-4 h-4 mr-2 text-purple-600" />
                    SC GYM!!!
                  </span>
                  <span className="font-bold text-green-500">+3 pts</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-purple-600">Simon's Stats</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="font-bold text-gray-800">Screen Time</p>
                    <div className="flex space-x-1">
                      {statsData.screenTime.map((hours, index) => (
                        <div key={index} className="w-4 h-12 bg-purple-200 relative">
                          <div className="absolute bottom-0 left-0 right-0 bg-purple-600" style={{height: `${hours/8*100}%`}}></div>
                          <span className="absolute top-0 left-0 right-0 text-[10px] text-center text-gray-800">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Workout</p>
                    <div className="flex space-x-1">
                      {statsData.workout.map((done, index) => (
                        <div key={index} className="w-4 h-4 bg-purple-200 flex items-center justify-center">
                          {done ? <Check className="text-green-500 w-3 h-3" /> : <X className="text-red-500 w-3 h-3" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Sleep</p>
                    <div className="flex space-x-1">
                      {statsData.sleep.map((hours, index) => (
                        <div key={index} className="w-4 h-12 bg-purple-200 relative">
                          <div className="absolute bottom-0 left-0 right-0 bg-purple-600" style={{height: `${hours/8*100}%`}}></div>
                          <span className="absolute top-0 left-0 right-0 text-[10px] text-center text-gray-800">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto p-4 text-center mt-20">
        <p>&copy; 2024 Fantasy Life. All rights reserved.</p>
      </footer>
    </div>
  )
}