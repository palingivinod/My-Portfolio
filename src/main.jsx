import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Publications from './components/Publications.jsx'
import Projects from './components/projects.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='/' element={<Home/>}/>
    <Route path='home' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='education' element={<Education />}/>
    <Route path='certifications' element={<Certifications />}/>
    <Route path='publications' element={<Publications />}/>
    <Route path='projects' element={<Projects />}

    />
  </Route>

))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
