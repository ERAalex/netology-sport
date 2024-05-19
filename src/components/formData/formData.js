


function FormData() {

    return (
        <div>

            <form className="modal-sport">

                <div className="input-fields">
                    <label for="data-sport" className="input-data-label">Дата (дд.мм.гг)</label>
                        <input id="data-sport" className="input-data" type="text" name="data-sport" />
                </div>

                <div className="input-fields">
                    <label for="km-sport" className="input-km-label">Пройдено км</label>
                        <input id="km-sport" className="input-km" type="text" readonly="readOnly" name="km-sport" />
                </div>

                <div className="input-fields">
                    <button className="btn-sport" type="submit">Ок</button>
                </div>

            </form>
        </div>
    );

}


export default FormData
