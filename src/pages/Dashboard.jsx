import { Link } from 'react-router-dom'
import { Armchair, Clock, IndianRupee, ShoppingBag } from 'lucide-react'
import { Card, Hero, HeroStat, StatCard } from '../components/ui'
import { BarsChart, DonutChart } from '../components/Charts'
import { channels, hourly, topDishes } from '../data'

export default function Dashboard() {
  return (
    <>
      <Hero
        eyebrow="Spice Route · Dinner service"
        title="Full house tonight 🔥"
        subtitle="8 of 12 tables occupied, 5 orders in the kitchen and 2 reservations arriving in the next hour."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Today's sales" value="₹1.42L" /><HeroStat label="Covers" value="214" /></div>}
      >
        <Link to="/tables" className="btn bg-white text-brand-700 hover:bg-brand-50"><Armchair className="h-4 w-4" /> Floor plan</Link>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue (MTD)" value="₹24.8L" delta="14.3%" icon={IndianRupee} />
        <StatCard label="Online orders" value="1,926" delta="21.0%" icon={ShoppingBag} tone="amber" />
        <StatCard label="Avg. prep time" value="14 min" delta="-2 min" icon={Clock} tone="sky" />
        <StatCard label="Table turnover" value="3.2x" delta="0.4" icon={Armchair} tone="emerald" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Orders by hour" subtitle="Dine-in vs delivery" className="xl:col-span-2">
          <BarsChart data={hourly} series={[{ key: 'dine', name: 'Dine-in' }, { key: 'delivery', name: 'Delivery' }]} />
        </Card>
        <Card title="Sales channels"><DonutChart data={channels} centerValue="₹1.42L" centerLabel="Today" /></Card>
      </div>
      <Card title="Today's best sellers" className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {topDishes.map((d, i) => (
            <div key={d.name} className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-brand-50 to-white p-4 ring-1 ring-brand-100">
              <span className="text-4xl">{d.emoji}</span>
              <div><p className="text-xs font-bold text-brand-600">#{i + 1}</p><p className="font-semibold text-slate-800">{d.name}</p><p className="text-xs text-slate-500">{d.orders} orders</p></div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
