import { ThemeProvider } from 'styled-components'
import { GlobalStyled }  from './Styled/Global.styled'
import { theme }         from './Styled/Theme.styled'

import { Home } from './Pages/Home'
import { Explore } from './Pages/Explore'
import { Messages } from './Pages/Messages'
import { Profile } from './Pages/Profile'

import { GlobalContext, bbdd } from './Global.context.jsx'

import { useFetch } from './Hooks/usefetch'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Header  from './Components/Header'
import { Settings } from './Pages/Settings'
import { Template } from './Pages/Template'
import { PostView } from './Components/PostView'


const App = () => {

  const { data, users, suggested, loading, error } = useFetch(bbdd)


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <GlobalContext.Provider value={{data, users, suggested, loading}}>
        <div className="App">
         
           <Router>
            <Routes>

              {/* <Redirect from='/' to='/home'></Redirect> */}
              <Route path='/*' element={<Template/>}>
                <Route path=''         element={<Home/>}/>
                <Route path='home'      element={<Home/>}/>
                <Route path='messages'  element={<Messages/>}/>
                <Route path='explore'   element={<Explore/>}/>
                <Route path='profile'   element={<Profile/>}/>
                <Route path='profile/posts'  exact element={<Profile saved={0}/>}/>
                <Route path='profile/videos' exact  element={<Profile saved={1}/>}/>
                <Route path='profile/saved' exact  element={<Profile saved={2}/>}/>
                <Route path='profile/tags' exact  element={<Profile saved={3}/>}/>
                <Route path='profile/:id'   element={<Profile/>}/>
                <Route path='settings'  element={<Settings/>}/>
                <Route path='postview'  element={<PostView />}/>
              </Route>
            </Routes>
          </Router>

        </div>

      </GlobalContext.Provider>
    </ThemeProvider>
  )
}

export default App
