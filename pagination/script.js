/*function create_tr(){
    var tr_ele = document.createElement("tr");
    return tr_ele;
}

function create_th(tagname,classname,value,content){
var th_ele = document.createElement(tagname);
th_ele.setAttribute(classname,value);
th_ele.innerHTML = content;
return th_ele; 
}

function create_td(tagname,content){
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele; 
}






//XML-HTTP REQUEST
var req = new XMLHttpRequest();

req.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");

req.send();

req.onload=function(){
    var arr=JSON.parse(req.response);


    var table = document.createElement("table");

    table.className = "table";

    var thead = document.createElement("thead");
    thead.className = "thead-dark";

    var tbody =  document.createElement("tbody");

    var thead_tr = create_tr();
    var th1 = create_th("th","scope","col","id");
    var th2 = create_th("th","scope","col","name");
    var th3 = create_th("th","scope","col","email");

    thead_tr.append(th1,th2,th3);
    thead.append(thead_tr);

    arr.forEach(ele => {
        var tbody_tr = create_tr();
        var td1 = create_td("td",ele.id);
        var td2 = create_td("td",ele.name);
        var td3 = create_td("td",ele.email);
        tbody_tr.append(td1,td2,td3);
        tbody.append(tbody_tr);
    });


    table.append(thead,tbody);
    document.body.append(table);

} */
   /* const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Page navigation example');

    // Create the ul element with class 'pagination'
    const ul = document.createElement('ul');
    ul.classList.add('pagination');

    // Function to create list items
    function createPageItem(text, href = '#') {
     const li = document.createElement('li');
     li.classList.add('page-item');
     const a = document.createElement('a');
     a.classList.add('page-link');
     a.setAttribute('href', href);
     a.textContent = text;
     li.appendChild(a);
     return li;
    }

    // Create the list items and append them to the ul
    ul.appendChild(createPageItem('Previous'));
    ul.appendChild(createPageItem('1'));
    ul.appendChild(createPageItem('2'));
    ul.appendChild(createPageItem('3'));
    ul.appendChild(createPageItem('Next'));

    // Append the ul to the nav
    nav.appendChild(ul);

    // Optionally, append the nav to the body or any other container
    document.body.appendChild(nav);*/


    function create_tr() {
        var tr_ele = document.createElement("tr");
        return tr_ele;
      }
      
      function create_th(tagname, classname, value, content) {
        var th_ele = document.createElement(tagname);
        th_ele.setAttribute(classname, value);
        th_ele.innerHTML = content;
        return th_ele;
      }
      
      function create_td(tagname, content) {
        var td_ele = document.createElement(tagname);
        td_ele.innerHTML = content;
        return td_ele;
      }
      
      // Number of rows per page
      const rowsPerPage = 10;
      let currentPage = 1;
      
      // Function to render the table with pagination
      function renderTable(arr, page) {
        const table = document.createElement("table");
        table.className = "table";
      
        const thead = document.createElement("thead");
        thead.className = "thead-dark";
      
        const tbody = document.createElement("tbody");
      
        const thead_tr = create_tr();
        const th1 = create_th("th", "scope", "col", "id");
        const th2 = create_th("th", "scope", "col", "name");
        const th3 = create_th("th", "scope", "col", "email");
      
        thead_tr.append(th1, th2, th3);
        thead.append(thead_tr);
      
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedItems = arr.slice(start, end);
      
        paginatedItems.forEach(ele => {
          const tbody_tr = create_tr();
          const td1 = create_td("td", ele.id);
          const td2 = create_td("td", ele.name);
          const td3 = create_td("td", ele.email);
          tbody_tr.append(td1, td2, td3);
          tbody.append(tbody_tr);
        });
      
        table.append(thead, tbody);
      
        const container = document.querySelector("#table-container");
        container.innerHTML = ""; // Clear the container
        container.append(table);
      }
      
      // Function to render pagination controls
      function renderPagination(arr) {
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = ""; // Clear previous pagination controls
      
        const pageCount = Math.ceil(arr.length / rowsPerPage);
      
        const createPageItem = (text, page) => {
          const li = document.createElement("li");
          li.classList.add("page-item");
          if (page === currentPage) li.classList.add("active");
          const a = document.createElement("a");
          a.classList.add("page-link");
          a.setAttribute("href", "#");
          a.textContent = text;
          a.addEventListener("click", () => {
            currentPage = page;
            renderTable(arr, page);
            renderPagination(arr);
          });
          li.appendChild(a);
          return li;
        };
      
        pagination.appendChild(createPageItem("<<Previous", currentPage - 1 > 0 ? currentPage - 1 : 1));
        for (let i = 1; i <= pageCount; i++) {
          pagination.appendChild(createPageItem(i, i));
        }
        pagination.appendChild(createPageItem("Next>>", currentPage + 1 <= pageCount ? currentPage + 1 : pageCount));
      }
      
      // XML-HTTP REQUEST
      var req = new XMLHttpRequest();
      req.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
      req.send();
      
      req.onload = function () {
        var arr = JSON.parse(req.response);
        renderTable(arr, currentPage);
        renderPagination(arr);
      };
      