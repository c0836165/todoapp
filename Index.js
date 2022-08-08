window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_ele = document.querySelector("#tasks");

    // to prevent the page form refreshing 
    form.addEventListener('submit', (e) => {
        e.preventDefault();


        const task = input.value;
        if (!task) {
            alert(" PLEASE FILL THE TASK FIRST!!");
            return;
        }

        const task_ele = document.createElement("div");
        task_ele.classList.add("task");
        const task_content_ele = document.createElement("div");
        task_content_ele.classList.add("content");
        task_ele.appendChild(task_content_ele);

        const tasl_input_ele = document.createElement("input");
        tasl_input_ele.classList.add("text");
        tasl_input_ele.type = "text";
        tasl_input_ele.value = task;
        tasl_input_ele.setAttribute("readonly", "readonly");

        task_content_ele.appendChild(tasl_input_ele);

        const task_action_ele = document.createElement("div");
        task_action_ele.classList.add("actions");

        const task_check_ele = document.createElement("button");
        task_check_ele.classList.add("checkbox");
        task_check_ele.innerHTML = " ";


        const task_edit_ele = document.createElement("button");
        task_edit_ele.classList.add("edit");
        task_edit_ele.innerHTML = "Edit";

        const task_delete_ele = document.createElement("button");
        task_delete_ele.classList.add("delete");
        task_delete_ele.innerHTML = "Delete";

        task_action_ele.appendChild(task_check_ele);
        task_action_ele.appendChild(task_edit_ele);
        task_action_ele.appendChild(task_delete_ele);
        task_ele.appendChild(task_action_ele);
        list_ele.appendChild(task_ele);


        task_edit_ele.addEventListener('click', () => {
            if (task_edit_ele.innerText.toLowerCase() == "edit") {
                tasl_input_ele.removeAttribute("readonly");
                tasl_input_ele.focus();
                task_check_ele.innerHTML = " ";
                task_check_ele.style.opacity = 0.3;
                task_check_ele.disabled = true;
                task_delete_ele.disabled = true;
                task_delete_ele.style.opacity = 0.3;
                tasl_input_ele.style.textDecorationLine = "none";
                task_edit_ele.innerText = "save";
            } else {
                tasl_input_ele.setAttribute("readonly", "readonly");
                task_edit_ele.innerText = "Edit";
                task_check_ele.innerHTML = " ";
                task_check_ele.disabled = false;
                task_check_ele.style.opacity = 1;
                task_delete_ele.disabled = false;
                task_delete_ele.style.opacity = 1;

            }
        });

        task_check_ele.addEventListener('click', () => {
            tasl_input_ele.style.textDecorationLine = "line-through";
            task_check_ele.innerText = "✔";
            task_edit_ele.disabled = true;
            task_edit_ele.style.opacity = 0.3;


        });

        task_delete_ele.addEventListener('click', () => {
            list_ele.removeChild(task_ele);
        });

        // in order to clear the input field after submiting the task into main div

        input.value = "";
    })
})