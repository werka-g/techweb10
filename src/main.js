import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cbouspjmailotmgxqlpt.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib3VzcGptYWlsb3RtZ3hxbHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNTM5MjcsImV4cCI6MjA2MzkyOTkyN30.5a4Hv2iHxW-LvW91WffHyowJIezrVqv5g5mqBzs13r4';
export const supabase = createClient(supabaseUrl, supabaseKey);


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
