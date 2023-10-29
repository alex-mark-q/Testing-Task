import React from 'react';

import { Input } from "../../components";
import "./task.scss";

const ListTask = ({ name, data }) => {
	return (
		<div className="task">
			<div className="task__wrapper">
				<div className="task__wrapper--left">
					<div className="task__text">
						<p>
							{name}
						</p>
						<p>
							Начало: {new Date().toLocaleString() + ''}
						</p>
					</div>
					
				</div>
				<div className="task__wrapper--right">
					<div className="task__text">
						<p>
							Время окончания
						</p>
						<p>
							{data}
						</p>
					</div>
				</div>
			</div>
			
		</div>
	)
};
export default ListTask;