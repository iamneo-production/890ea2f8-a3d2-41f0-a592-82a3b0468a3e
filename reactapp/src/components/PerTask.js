 import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Task() {
  const [taskCreated, setTaskCreated] = useState(false);

  const handleCreateTask = (e) => {
    e.preventDefault();

    const taskData = {
      id: e.target.elements.taskId.value,
      task_type: e.target.elements.taskType.value,
      task_name: e.target.elements.taskName.value,
      description: e.target.elements.description.value,
      category: e.target.elements.category.value,
      startdate: e.target.elements.startDate.value,
      enddate: e.target.elements.endDate.value,
      priority: e.target.elements.priority.value,
      notification: e.target.elements.notification.value,
    };

    axios
      .post('http://localhost:8080/add', taskData)
      .then((response) => {
        setTaskCreated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div class="row">
<div class="main">
<div class="navbar">
    <div class="icon">
        <h2 class="logo">Scheduler</h2>
           
    </div>

    <div class="menu">
        <ul>
            <li><a href="#"><Link to='/Navbar'>HOME</Link></a></li>
            <li><a href="#"><Link to='/Dash' target="_blank">DASHBOARD</Link></a></li>
            <div class="dropdownn">
    <button class="dropbtn">TASKS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdownn-content">
      <Link to='/Task'>Create Task</Link>
      <Link to='/TeamTask'>Create Team task</Link>
    </div>
  </div>
            <li><Link to=''>CALENDAR</Link></li>
        </ul>
    </div>
    <div class="navigationn">
  <div className="good">
  <img  className="noti" src="data:image/jpeg;base64,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"/>
  <img className="hu" src="data:image/jpeg;base64,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"/>
  </div>
  <a class="buttonn" href="">


<div class="logout">LOGOUT</div>

  </a>

</div>
    </div>
    
      <div className="col-md-12">
        <div className="container1">
          <form onSubmit={handleCreateTask} className='sx'>
            <div className="task-details-box">
              <div className="task-input-box">
               
                <input type="number" className="bt" id="taskId" name="taskId" placeholder="Enter Task ID" required />
              </div>
              <div className="task-input-box">
           
                <select id="taskType" className="bt" name="taskType" required>
                  <option value="">Select Type</option>
                  <option value="individual">Individual</option>
                  <option value="team">Team</option>
                </select>
              </div>
              <div className="task-input-box">
               
                <input type="text" className="bt" id="taskName" name="taskName" placeholder="Enter Task Name" required />
              </div>
              <div className="task-input-box">
                
                <textarea id="description" className="bt" name="description" placeholder="Enter Description" required></textarea>
              </div>
              <div className="task-input-box">
                
                <select id="category" className="bt" name="category" required>
                  <option value="">Select Category</option>
                  <option value="study plan">Study Plan</option>
                  <option value="fitness">Fitness</option>
                  <option value="health">Health</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" className="bt" id="startDate" name="startDate" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="endDate">End Date:</label>
                <input type="date" className="bt" id="endDate" name="endDate" required />
              </div>
              <div className="task-input-box">
              
                <select id="priority" className="bt" name="priority" required>
                  <option value="">Select Priority</option>
                  <option value="urgent">Urgent</option>
                  <option value="anytimesoon">Anytime Soon</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              <div className="task-input-box">
               
                <select id="notification" className="bt" name="notification" required>
                  <option value="">Select Notification</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
            </div>
            <div className="form-submit-btn">
              <button type="submit" class="mm" value="Create" >Create Task</button>
            </div>
          </form>
            {taskCreated && (
              <div className="success-message">
                <span className="tick-symbol">&#10004;</span>
                <h5 className="success">Task Created Successfully!</h5>
              </div>
            )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Task;