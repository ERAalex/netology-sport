
import './table-res.css'

export default function TableResultData(props) {
  const { table, deleteBut } = props;

  // if no data yet
  if (table.length === 0) {
    return (
      <div className="table-results">
        <div className="table-results-block">
          <span className='table-span-el'>Дата (ДД.ММ.ГГ)</span>
          <span className='table-span-el'>Пройдено км</span>
          <span className='table-span-el'>Действия.</span>
        </div>
        <div className="no-data">
          <span>Нет записей</span>
        </div>
      </div>
    );
  }

  return (
    <div className="table-results">
      <div className="table-results-block">
        <span className="table-span-el">Дата (ДД.ММ.ГГ)</span>
        <span className="table-span-el">Пройдено км</span>
        <span className="table-span-el">Действия.</span>
      </div>

      <div className="table-body">
        {table.map((el) => (
          <div
            key={el.date}
            id={el.date}
            className="table-body-el"
          >
            <span>{el.date}</span>
            <span>{el.distance}</span>
            <span>
              <a className="material-icons" onClick={deleteBut}>
                delete
              </a>
              <a className="material-icons">edit</a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
