import React from 'react';
import { useBurtgel } from './Burtgel';

export default function NerOruulah() {
  const { setNuutsUg, setNer, burtguuleh, user } = useBurtgel();
  const [nerText, setNerText] = React.useState('');
  const [nuutsText, setNuutsText] = React.useState('');

const nevtreh = () => {
  const olduser = user.find((u) => u.ner === nerText && u.nuutsUg === nuutsText);
  if (!olduser) {
    alert('Таны нэр эсвэл нууц үг буруу байна.');
    return; 
  }
    
    setNer(olduser.ner);
    setNuutsUg(olduser.nuutsUg);
    alert('Та амжилттай нэвтэрлээ.');
  };

  return (
    <div>
      <h1>Нэр оруулах</h1>
      <input
        type="text"
        value={nerText}
        onChange={(event) => setNerText(event.target.value)}
      />
      <br />
      <input
        type="password"
        value={nuutsText}
        onChange={(event) => setNuutsText(event.target.value)}
        placeholder="Нууц үг оруулах"/>
      
      <button
        onClick={() => burtguuleh(nerText, nuutsText)}>
        burtguuleh
        </button>
      <button onClick={nevtreh}>Нэвтрэх</button>

    </div>
  );  
}