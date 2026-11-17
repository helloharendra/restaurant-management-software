import { useState } from 'react'
import { Clock, Plus, Receipt, Users } from 'lucide-react'
import { Badge, Card, PageHeader, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { tables } from '../data'

const styles = {
  Free: { ring: 'ring-emerald-200 bg-emerald-50/60', dot: 'bg-emerald-500', tone: 'green' },
  Occupied: { ring: 'ring-brand-200 bg-brand-50/70', dot: 'bg-brand-500', tone: 'brand' },
  Ordering: { ring: 'ring-sky-200 bg-sky-50/70', dot: 'bg-sky-500', tone: 'blue' },
  'Bill requested': { ring: 'ring-amber-300 bg-amber-50', dot: 'bg-amber-500', tone: 'amber' },
  Reserved: { ring: 'ring-violet-200 bg-violet-50/60', dot: 'bg-violet-500', tone: 'violet' },
}

export default function Tables() {
  const { openContact } = useContact()
  const [sel, setSel] = useState(tables[0])

  return (
    <>
      <PageHeader title="Tables" subtitle="Ground floor · tap a table to see its running order." actions={<button onClick={() => openContact('Take Order / KOT')} className="btn-primary"><Plus className="h-4 w-4" /> New order</button>} />
      <div className="mb-5 flex flex-wrap gap-3">
        {Object.entries(styles).map(([k, s]) => (
          <span key={k} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
            <span className={`h-2 w-2 rounded-full ${s.dot}`} />{k} · {tables.filter((t) => t.status === k).length}
          </span>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tables.map((t) => {
            const s = styles[t.status]
            return (
              <button key={t.id} onClick={() => setSel(t)} className={`relative flex aspect-[4/3] flex-col justify-between rounded-2xl p-4 text-left ring-1 transition hover:-translate-y-0.5 hover:shadow-lg animate-fade-up ${s.ring} ${sel.id === t.id ? 'outline outline-2 outline-offset-2 outline-slate-900' : ''}`}>
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-extrabold text-slate-800">{t.id}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${s.dot} ${t.status === 'Bill requested' ? 'animate-ping' : ''}`} />
                </div>
                <div className="flex gap-1">{Array.from({ length: t.seats }).map((_, i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${i < (t.guests || 0) ? s.dot : 'bg-slate-200'}`} />)}</div>
                <div className="text-xs text-slate-500">
                  {t.status === 'Reserved' ? <>{t.name} · {t.time}</> : t.status === 'Free' ? <>{t.seats} seats</> : <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{t.since} min · {t.bill ? inr(t.bill) : 'ordering'}</span>}
                </div>
              </button>
            )
          })}
        </div>
        <Card title={`Table ${sel.id}`} subtitle={sel.waiter ? `Served by ${sel.waiter}` : `${sel.seats} seats`} action={<Badge tone={styles[sel.status].tone}>{sel.status}</Badge>} className="h-fit xl:sticky xl:top-24">
          {sel.items?.length ? (
            <>
              <div className="mb-4 flex gap-4 text-sm text-slate-500"><span className="flex items-center gap-1"><Users className="h-4 w-4" />{sel.guests} guests</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" />{sel.since} min</span></div>
              <ul className="space-y-2 border-y border-dashed border-slate-200 py-4 text-sm">
                {sel.items.map((i) => <li key={i} className="flex items-center gap-2 text-slate-700"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" />{i}</li>)}
              </ul>
              <div className="flex items-end justify-between py-4"><span className="text-sm text-slate-500">Running total</span><span className="text-2xl font-extrabold text-slate-900">{inr(sel.bill)}</span></div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => openContact('Add Items / KOT')} className="btn-ghost">Add items</button>
                <button onClick={() => openContact('Split Bill & Payments')} className="btn-primary"><Receipt className="h-4 w-4" /> Bill</button>
              </div>
            </>
          ) : (
            <div className="py-8 text-center">
              <p className="text-sm text-slate-500">{sel.status === 'Reserved' ? `Reserved for ${sel.name} at ${sel.time}` : sel.status === 'Ordering' ? 'Guests are browsing the QR menu…' : 'Table is free and ready.'}</p>
              <button onClick={() => openContact('Seat Guests & Take Order')} className="btn-primary mt-4">Seat guests</button>
            </div>
          )}
        </Card>
      </div>
    </>
  )
}
