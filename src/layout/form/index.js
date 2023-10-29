import React from 'react';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { Input } from "../../components";
import "./form.scss";
import "react-datepicker/dist/react-datepicker.css";

const AddTaskForm = ({ id, onChangeInput }) => {

	const [date, setDate] = useState(new Date());

	console.log(onChangeInput);
	return (
		<div className="tasks__form">
			<Input setAutoFocus placeholder="Название задачи" onChange={onChangeInput} />
			{/*<Input placeholder="Время окончания задачи" onChange={onChange} />*/}
			<label htmlFor="input-id">Время окончания задачи</label>
			<DatePicker className="data" placeholder="Время окончания задачи" selected={date} onChange={(date) => setDate(date)} />
		</div>
	)
};
export default AddTaskForm;