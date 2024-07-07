import { useState } from 'react'
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import './App.css'
import OutlinedCard from './OutlineCard';

function App() {

  return (
    <>
      <h2>
        Integrating React UIs (Materia UI)
      </h2>

      <h3>
        Fetching real data and displaying it in a Material-UI table.
      </h3>
      <Button variant="contained">Testing Testing...</Button>
      <OutlinedCard/>
    </>
  )
}

export default App
