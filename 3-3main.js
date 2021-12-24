const newtask = document.getElementById('newtask');
const add = document.getElementById('add');
const tasklist = document.getElementById('list');

const taskarray = [];

//削除ボタンの作成
const createDeleteButton = (deletetask,row) => {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deletetask.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    const index = row.rowIndex -1;
    taskarray.splice(index,1);
    AddTasks();
  })
}
//作業中ボタンの作成
const createStatusButton = (status,taskstatus) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = taskstatus;
  status.appendChild(statusButton);
  statusButton.addEventListener('click', () => {
      if(statusButton.innerText === '作業中'){
        taskstatus = '完了';
        statusButton.innerText = taskstatus;
      }else{
        taskstatus = '作業中';
        statusButton.innerText = taskstatus;
      }
  });
}

//タスクを追加する
const AddTasks = () => {
  tasklist.innerText = '';
  taskarray.forEach((taskadd) => {
    const taskId = tasklist.rows.length;
    //最後の行に追加する
    const row = tasklist.insertRow(-1);
    row.classList.add('tasks');//claslist.add()は今回はidで要素を取得しているためid属性で追加になる

    //各項目の追加
    //insertCell(0)ここの数字は表示される順番
    const id = row.insertCell(0);
    const comment = row.insertCell(1);
    const status = row.insertCell(2);
    const deletetask = row.insertCell(3);
  
    id.innerText = taskId;
    comment.innerText = taskadd.task;
    createStatusButton(status,taskadd.status);
    createDeleteButton(deletetask, row);
  });
}

//タスク追加イベント開始
add.addEventListener('click', () => {
const newtask = document.getElementById('newtask')
const todo = { task: newtask.value, status: '作業中' }
taskarray.push(todo);
  AddTasks();
  newtask.value = '';
});

