import { useState } from 'react';
import Calendar from 'react-calendar';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export function MyApp() {
  const [value, onChange] = useState("2017-01-01");

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}