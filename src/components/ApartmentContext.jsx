import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultApartmentId, getApartment } from '../data/content';
const ApartmentContext=createContext(null);
export function ApartmentProvider({children}){ const [id,setId]=useState(()=>localStorage.getItem('tolus-space-apartment')||defaultApartmentId); useEffect(()=>localStorage.setItem('tolus-space-apartment',id),[id]); const apartment=useMemo(()=>getApartment(id),[id]); return <ApartmentContext.Provider value={{apartment,id,setId}}>{children}</ApartmentContext.Provider>; }
export function useApartment(){ return useContext(ApartmentContext); }
