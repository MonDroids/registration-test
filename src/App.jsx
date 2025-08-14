import { BurtgelProvider, useBurtgel } from './Burtgel';
import NerOruulah from './NerOruulah';

function NerHarah() {
  const { ner,garah,nuutsUg } = useBurtgel();
  if (!ner) return null;

  return (
    <div>
      <h2>Таны нэр: {ner}</h2>
      <p>Nuuts ug {nuutsUg}</p>
      <button onClick={garah}>Гарах</button>
    </div>
  );
}


export default function App() {

  return (
    <BurtgelProvider>
      <h1>Ner oruulah</h1>
      <NerOruulah />
      <NerHarah />
      </BurtgelProvider>
  );
}