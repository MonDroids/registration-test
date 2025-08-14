import React from "react";
import { useBurtgel } from "./Burtgel";

export default function NerOruulah() {
    const { setNer } = useBurtgel();
    const {text, setText} = React.useState('');
    const [nuutsUg, setNuutsUg] = React.useState('');

    return (
        <div>
            
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='Нэр оруулна уу'/>
            <button onClick={() => {setNer(text); setNuutsUg(nuutsUg);}}>Нэр оруулах</button>
            <br />
            <input type="password" value={nuutsUg} onChange={(event) => setNuutsUg(event.target.value)} placeholder='Нууц үг оруулна уу'/>
            
            <button onClick={() => {setNuutsUg(nuutsUg);}}>Нууц үг оруулах</button>
        </div>
    );
}
