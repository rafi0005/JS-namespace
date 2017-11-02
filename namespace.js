var RAFI0005 = {
    init: function () {
        console.log("script in RAFI0005 called");
        var div = document.createElement("div");
      

        div.className = "box";
        div.textContent = "RAFI0005";

        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", click);
        div.addEventListener("mouseover", hover);
        div.addEventListener("mouseout", hover);

        function hover(ev) {
            this.classList.toggle("highlight");
        }

        function click(ev) {

                this.style.backgroundColor = "#F3F781";
                this.style.borderColor = "#ACFA58";
            }

        }

    }