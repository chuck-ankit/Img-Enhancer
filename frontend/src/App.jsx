import { useState } from 'react'
import Home from './components/Home'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-perano-50 to-perano-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20" />
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-perano-900">Pixel Perfect</h1>
                <p className="text-sm sm:text-base font-medium text-perano-600">Advanced AI-powered image enhancer tool</p>
              </div>
            </div>
            <nav className="mt-4 sm:mt-0">
              <ul className="flex space-x-4">
                <li><a href="#features" className="text-perano-700 hover:text-perano-900">Features</a></li>
                <li><a href="#how-it-works" className="text-perano-700 hover:text-perano-900">How It Works</a></li>
                <li><a href="#pricing" className="text-perano-700 hover:text-perano-900">Pricing</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Home />
      </main>

      <footer className="bg-perano-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-perano-200">© 2024 Pixel Perfect. All rights reserved.</p>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              <a href="#" className="text-perano-200 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-perano-200 hover:text-white">Terms of Service</a>
              <a href="#" className="text-perano-200 hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
