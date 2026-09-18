import type { ReactNode } from 'react';
export default function Illustration({ kind = 'compass', className = '' }: { kind?: string; className?: string }) {
  const drawings: Record<string, ReactNode> = {
    compass: <><circle cx="40" cy="42" r="28"/><circle cx="40" cy="42" r="23"/><path d="m50 30-6 16-16 9 7-18 15-7Z M35 37l9 9 M40 14v7m0 42v7M12 42h7m42 0h7M40 9V5m-4 0h8"/><circle cx="40" cy="42" r="2"/><path d="m22 24 4 4m28 28 4 4m-36 0 4-4m28-28 4-4"/></>,
    identity: <><circle cx="40" cy="40" r="27"/><circle cx="40" cy="40" r="22"/><path d="M13 12 40 69 67 12 40 24 13 12Zm9 8 18 38 18-38-18 10-18-10Z M40 30v28 M7 8l5 2m56 0 5-2"/></>,
    voice: <><path d="m13 35 35-14 13 31-35 9-13-26Zm35-14 4-7 15 37-6-1M19 47l-8 3-5-12 8-3m16 24 7 15 9-4-7-15M22 32l11 26m-6-28 10 26M60 15l5-8m1 18 10-4m-6 16 8 2"/><path d="m41 26 7 16m-6-11 8 16"/></>,
    network: <><circle cx="39" cy="38" r="13"/><circle cx="39" cy="38" r="8"/><circle cx="61" cy="13" r="7"/><circle cx="15" cy="63" r="7"/><circle cx="65" cy="65" r="5"/><path d="m47 28 9-10m-26 30-10 10m29-10 13 14M15 51V28l13-9m23 22 14-6M35 55l3 16M10 20l7-5 6 3"/><circle cx="15" cy="63" r="2"/><circle cx="61" cy="13" r="2"/></>,
    chart: <><rect x="9" y="14" width="61" height="44" rx="3"/><path d="M14 19h51v33H14V19Zm18 39-2 9m19-9 2 9M25 68h32M20 45l12-13 10 7 17-15m-8 0h8v8"/><circle cx="32" cy="32" r="2"/><circle cx="42" cy="39" r="2"/><path d="M19 62h4m37 0h4M74 10l-7 7"/></>,
    document: <><path d="M23 8h32l12 13-8 48H15L23 8Zm32 0-2 14h14M27 18h16M26 25h16M24 50h26M23 56h30M22 62h19"/><circle cx="33" cy="36" r="6"/><path d="M22 47q1-10 10-5 10-5 11 5m6-15h9m-10 6h8m-9 6h7M11 16 5 73h49"/></>,
    bot: <><rect x="14" y="21" width="52" height="36" rx="14"/><rect x="20" y="27" width="40" height="22" rx="10"/><circle cx="30" cy="37" r="2"/><circle cx="50" cy="37" r="2"/><path d="M35 42q5 4 10 0M40 21V12M8 32v15m64-15v15M25 57l-4 15m34-15 4 15M31 58v10h18V58"/><circle cx="40" cy="9" r="3"/><path d="m3 19 5 3m64-6 5-4M4 60l7-3"/></>,
    shop: <><path d="M13 30h54v40H13V30ZM8 30l8-17h48l8 17M8 30q6 12 13 0 6 12 13 0 6 12 13 0 6 12 13 0 6 12 12 0M23 13l-2 17m14-17-1 17m12-17 1 17m11-17 2 17M19 7h42M24 45h5l4 14h18l5-10H31"/><circle cx="35" cy="64" r="2"/><circle cx="49" cy="64" r="2"/></>,
    pin: <><path d="M40 73S15 47 15 30a25 25 0 0 1 50 0c0 17-25 43-25 43Z"/><circle cx="40" cy="30" r="18"/><path d="M29 30h22a11 11 0 1 0-2 7M25 68l-8 5m38-5 8 5"/></>,
    phone: <><rect x="20" y="5" width="40" height="69" rx="7"/><path d="M25 15h30v46H25V15Zm9-5h12"/><circle cx="40" cy="67" r="2"/><path d="m32 25-4 5q1 16 18 23l6-5-7-7-5 4q-7-4-7-10l4-4-5-6Z"/></>,
  };
  const aliases: Record<string, string> = { Bot: 'bot', TrendingUp: 'chart', ShoppingBag: 'shop', ShieldCheck: 'identity', Megaphone: 'voice', Sparkles: 'identity', Printer: 'document', CalendarDays: 'document', HeartHandshake: 'network', Briefcase: 'compass' };
  return <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[aliases[kind] || kind] || drawings.compass}</svg>;
}
