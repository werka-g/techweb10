import './style.css'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cbouspjmailotmgxqlpt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib3VzcGptYWlsb3RtZ3hxbHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNTM5MjcsImV4cCI6MjA2MzkyOTkyN30.5a4Hv2iHxW-LvW91WffHyowJIezrVqv5g5mqBzs13r4'
export const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return
  }

  const container = document.getElementById('articlesList')
  container.innerHTML = ''
  data.forEach(article => {
    const el = document.createElement('article')
    el.className = 'p-4 bg-white shadow rounded'
    el.innerHTML = `
      <h2 class="text-xl font-bold">${article.title}</h2>
      <h3 class="text-md text-gray-600">${article.subtitle}</h3>
      <p class="text-sm text-gray-400">Autor: ${article.author} | ${new Date(article.created_at).toLocaleDateString()}</p>
      <div class="mt-2">${article.content}</div>
    `
    container.appendChild(el)
  })
}

fetchArticles()

document.getElementById('articleForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  const title = document.getElementById('title').value
  const subtitle = document.getElementById('subtitle').value
  const author = document.getElementById('author').value
  const content = document.getElementById('content').value

  const { error } = await supabase.from('articles').insert([
    { title, subtitle, author, content }
  ])

  if (error) {
    alert('Błąd przy dodawaniu artykułu')
    console.error(error)
  } else {
    alert('Artykuł dodany!')
    e.target.reset()
    fetchArticles()
  }
})
