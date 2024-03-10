import { COLUMN_CONFIG } from './Utils/Utils';
import Table from './features/counter/Table';

function App() {
  return (
    <div className="px-24 pb-16 overflow-x-auto min-w-max">
      <Table cols={COLUMN_CONFIG} />
    </div>
  );
}

export default App;
