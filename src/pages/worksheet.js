import React from 'react';
import { Route } from 'react-router-dom';
import Steps from './step'
import Nav from '../components/nav'

const Worksheet = () => {
  return (
    <div className="flex bg-teal-500">
      <div className="w-1/4 bg-teal-800 h-screen fixed py-4" style={{ minWidth: 300}}>
        <Nav/>
      </div>
      <div className="w-1/4" style={{ minWidth: 300}}/>
      <main className="min-h-screen w-full p-4 flex justify-center">
        <div className="w-2/3">
          <h1 className="text-3xl">BDG's Kojima-Name Generator</h1>
          <Route path={`/worksheet/:step`} component={Steps} />
        </div>
      </main>
    </div>
  )
}

export default Worksheet;