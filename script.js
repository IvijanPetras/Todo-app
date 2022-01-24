    (function addTodo(){
    "use strict";

    var btn = document.querySelector(".btn");
    var list = document.querySelector(".list");
    var inp = document.querySelector(".input");

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            var li = document.createElement('li');
            li.innerText = inp.value;
            addEraseBtn(li);
            addBtnFinished(li);
            list.append(li);
            inp.value = "";
            inp.focus();
        })

        function eraseTodo(e){
            var eraseTodo = e.target;
            eraseTodo.parentNode.remove()
           inp.focus()
        }

        function addEraseBtn(e){
            var eraseBtn = document.createElement('div');
            eraseBtn.className = "eraseBtn";
            eraseBtn.addEventListener('click', eraseTodo);
            e.appendChild(eraseBtn);
        }

        

        function addBtnFinished(e){
            var btnFinished = document.createElement('input');
            btnFinished.setAttribute("type", "checkbox");
            e.insertBefore(btnFinished, e.firstChild)
            btnFinished.addEventListener('click' , addCrossedTodo);
        }

        function addCrossedTodo(e){
            var cross = e.target;
           cross.parentNode.classList.toggle("liCross");
        }


    })()