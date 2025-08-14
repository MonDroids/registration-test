import { createContext, useContext, useEffect, useState } from "react";

const Burtgel = createContext();

export const useBurtgel = () => useContext(Burtgel);

export const BurtgelProvider = ({children}) => {
    const [ner, setNer] = useState('');
    const [nuutsUg, setNuutsUg] = useState('');
    const [user, setUser] = useState([]);

useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || [];
    const storedNer = localStorage.getItem('ner');
    const storedNuutsUg = localStorage.getItem('nuutsUg');

    setUser(storedUser);

    if (storedNer) {
        setNer(storedNer);
    }
    if (storedNuutsUg) {
        setNuutsUg(storedNuutsUg);
    }                                                                    
    }, []);

useEffect(() => {
    localStorage.setItem('ner', ner);
    localStorage.setItem('nuutsUg', nuutsUg);
}, [ner, nuutsUg]);


  const garah = () => {
    setNer('');
    setNuutsUg('');};

const burtguuleh = (nerText, nuutsText) => {
  const oldson = user.some(u => u.ner === nerText);
  if (oldson) {
    alert('Таны нэр бүртгэгдсэн байна. Та өөр нэр оруулна уу.');
    return false;
  }

    const shineUser = {
    ner: nerText,
    nuutsUg: nuutsText,
    date: new Date().toLocaleString()
}
    setUser([...user, shineUser]);
    localStorage.setItem('user', JSON.stringify([...user, shineUser]));
    alert('Таны нэр амжилттай бүртгэгдлээ.');
    return true;
};




    return (
        <Burtgel.Provider value={{ner, setNer, garah, nuutsUg, setNuutsUg, burtguuleh, user, setUser}}>
            {children}
        </Burtgel.Provider>
    );
};