import { useEffect, useState } from 'react'
import { Bike, Check, ShoppingBag, Timer, UtensilsCrossed } from 'lucide-react'
import { PageHeader } from '../components/ui'
import { tickets as initial } from '../data'

const typeIcon = { 'Dine-in': UtensilsCrossed, Delivery: Bike, Takeaway: ShoppingBag }

export default function Kitchen() {
  const [tickets, setTickets] = useState(initial.map((t) => ({ ...t, secs: t.mins * 60 })))
  const [doneItems, setDoneItems] = useState({})

  // Live timers, like a real kitchen display screen
  useEffect(() => {
    const id = setInterval(() => setTickets((ts) => ts.map((t) => ({ ...t, secs: t.secs + 1 }))), 1000)
    return () => clearInterval(id)
  }, [])

  const bump = (id) => setTickets((ts) => ts.filter((t) => t.id !== id))
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  return (
    <>
      <PageHeader title="Kitchen display" subtitle="Tap an item when it's ready. Bump the ticket when the order is complete." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {tickets.map((t) => {
          const late = t.secs > 15 * 60
          const warn = t.secs > 10 * 60
          const Icon = typeIcon[t.type]
          return (
            <div key={t.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 animate-scale-in">
              <div className={`flex items-center justify-between px-4 py-3 text-white ${late ? 'bg-gradient-to-r from-rose-600 to-rose-500' : warn ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-slate-800 to-slate-700'}`}>
                <div><p className="text-xs opacity-80">{t.id}</p><p className="flex items-center gap-1.5 font-bold"><Icon className="h-4 w-4" />{t.table}</p></div>
                <span className="flex items-center gap-1 rounded-lg bg-white/15 px-2 py-1 font-mono text-sm font-bold"><Timer className="h-4 w-4" />{fmt(t.secs)}</span>
              </div>
              <ul className="flex-1 divide-y divide-slate-100 px-4">
                {t.items.map((it) => {
                  const k = `${t.id}-${it.n}`
                  return (
                    <li key={k}>
                      <button onClick={() => setDoneItems((d) => ({ ...d, [k]: !d[k] }))} className="flex w-full items-start gap-3 py-3 text-left">
                        <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md ring-1 ${doneItems[k] ? 'bg-emerald-500 text-white ring-emerald-500' : 'ring-slate-300'}`}>{doneItems[k] && <Check className="h-3.5 w-3.5" />}</span>
                        <div className={doneItems[k] ? 'text-slate-400 line-through' : 'text-slate-800'}>
                          <p className="font-semibold"><span className="text-brand-600">{it.q}×</span> {it.n}</p>
                          {it.note && <p className="text-xs font-medium text-amber-600">⚠ {it.note}</p>}
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>
              <button onClick={() => bump(t.id)} className="m-3 rounded-xl bg-emerald-500 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-600">Bump · Ready</button>
            </div>
          )
        })}
        {!tickets.length && <p className="col-span-full py-20 text-center text-slate-400">All caught up! 👨‍🍳</p>}
      </div>
    </>
  )
}
