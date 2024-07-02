//내가 넣어야 할 기능들
//1 유저는 할일을 추가할 수 있다.
//2 삭제벝ㄴ을 클릭하면 할일이 리스텡서 삭제된다.
//3 체크버튼을 클릭하면 할일이 리스테에서 삭제된다.
//4 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
//5 탭을 이용해서 아이템들을 상태별로 나누어서 볼 수 있다.
//6 모바일 버전에서도 확인할 수 있는 반응형 웹이다.

//코드를 짤때 console.log를 작성해서 수시로 확인하는게 제일 중요하다.
//내가 만든 코드에 너무 맹신하지마라
//유저가 값을 입력한다.
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
addButton.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
                <div>${taskList[i]}</div>
                <div>
                  <button>Check</button>
                  <button>Delete</button>
            </div>
          </div>`;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}
