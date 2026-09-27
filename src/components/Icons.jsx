const paths = {
  wifi: <><path d="M2.5 8.8a16 16 0 0 1 19 0"/><path d="M5.8 12.2a10.5 10.5 0 0 1 12.4 0"/><path d="M9.3 15.7a5.2 5.2 0 0 1 5.4 0"/><circle cx="12" cy="19" r=".8" fill="currentColor" stroke="none"/></>,
  kitchen: <><path d="M7 3v8"/><path d="M4.5 3v5a2.5 2.5 0 0 0 5 0V3"/><path d="M7 10v11"/><path d="M17 3v18"/><path d="M17 3c-2.2 2-2.7 4.2-2.7 6.1H19.7C19.7 7.2 19.2 5 17 3Z"/></>,
  ac: <><rect x="3" y="5" width="18" height="6" rx="1"/><path d="M6 15h12M7 19h10"/><path d="M7 11v2M12 11v2M17 11v2"/></>,
  tv: <><rect x="3" y="4" width="18" height="14" rx="1.5"/><path d="M8 21h8M12 18v3"/></>,
  parking: <><path d="M6 21V4h6.5a4.5 4.5 0 0 1 0 9H6"/><path d="M6 13h6"/></>,
  security: <><path d="M12 3 20 6v6c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  workspace: <><path d="M4 7h16v13H4z"/><path d="M8 7V4h8v3M2 20h20M9 13h6"/></>,
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  phone: <><path d="M6.5 3.5 9 6l-1.6 2.5a14 14 0 0 0 4.1 4.1L14 11l2.5 2.5-1.5 3.5c-.4.9-1.4 1.4-2.3 1.1A17 17 0 0 1 5.9 10 17 17 0 0 1 3.9 6c-.3-.9.2-1.9 1.1-2.3l1.5-.2Z"/></>,
  external: <><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></>
};

export default function Icon({ name, size = 22, strokeWidth = 1.6 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
