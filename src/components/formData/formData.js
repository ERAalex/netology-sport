
import { useState } from 'react';

import TableResultData from "../tableResults/tableResults";

let tableData = [];

export const SportData = () =>  {
    
    const [form, setForm] = useState({
        date: "",
        distance: 0,
        table: tableData,
      });
    

    const { date, distance, table } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const i = table.findIndex((el) => el.date === form.date);
        // if data already exists in table rewrite it
        if (i === -1) {
            tableData.push({ date: date, distance: distance });
        } else {
            tableData[i].distance = Number(tableData[i].distance) + Number(distance);
          setForm((prevForm) => ({
            ...prevForm,
            table: tableData,
          }));
        }
    
        setForm((prevForm) => ({
          ...prevForm,
          table: tableData,
        }));
      };
    
    //   on every change, update const form
      const changeData = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };


    return (
        <div>
            <form 
            className="modal-sport"
            onSubmit={handleSubmit}>

                <div className="input-fields">
                <label className="input-data-label">
                    Дата (ДД.ММ.ГГ)
                    <input
                        name="date"
                        type="date"
                        className="input-data"
                        onChange={changeData}
                        required
                    /></label>
                </div>

                <div className="input-fields">
                    <label className="input-km-label">
                Пройдено км
                    <input
                        className="input-km" 
                        type="number"
                        name="distance"
                        onChange={changeData}
                        required
                        />
                </label>
          
                </div>

                <button className="btn-sport" type="submit">Ок</button>
            </form>
            <TableResultData table={form.table} />
      
        </div>
    );

}
