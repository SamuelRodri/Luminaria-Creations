import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const profileUrl = 'https://luminariacreations.itch.io/'
const outputPath = resolve('public/data/itch-projects.json')
const decodeHtml = (value = '') => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>')
const getAttribute = (html, name) => decodeHtml(html?.match(new RegExp(`${name}=["']([^"']*)["']`, 'i'))?.[1]?.trim())

const response = await fetch(profileUrl, { headers: { 'user-agent': 'Luminaria-Creations-site-sync/1.0' } })
if (!response.ok) throw new Error(`itch.io returned HTTP ${response.status}`)
const html = await response.text()
const projects = [...html.matchAll(/<div[^>]+class="[^"]*game_cell\b[^"]*"[^>]*>[\s\S]*?(?=<div[^>]+class="[^"]*game_cell\b|<\/div><\/div><\/div>)/gi)]
  .map(([card]) => {
    const titleLink = card.match(/<a[^>]+class="[^"]*\btitle\b[^"]*"[^>]*>([\s\S]*?)<\/a>/i)
    const image = card.match(/<img\b[^>]*>/i)?.[0] ?? ''
    const description = card.match(/<div[^>]+class="[^"]*\bgame_text\b[^"]*"[^>]*>([\s\S]*?)<\/div>/i)
    return { id: getAttribute(card, 'data-game_id'), title: decodeHtml(titleLink?.[1]?.replace(/<[^>]+>/g, '').trim()), description: decodeHtml(description?.[1]?.replace(/<[^>]+>/g, '').trim()), url: getAttribute(titleLink?.[0], 'href'), coverUrl: getAttribute(image, 'data-lazy_src') || getAttribute(image, 'src') }
  })
  .filter(({ id, title, url }) => id && title && url)

if (projects.length === 0 && /\bgame_cell\b/i.test(html)) throw new Error('itch.io projects were present but could not be parsed')
await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify({ profileUrl, projects }, null, 2)}\n`, 'utf8')
console.log(`Synced ${projects.length} itch.io project(s).`)
