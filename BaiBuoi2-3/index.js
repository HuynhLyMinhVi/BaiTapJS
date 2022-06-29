// Bai 1
document.getElementById("btnSalary").onclick = function () {
    let ee = document.getElementById("inputNum1").value;
    let eee = document.getElementById("inputNum2").value;
    let e = ee * eee;
    document.getElementById("txtSalary").innerHTML = e;
};

// Bai 2
    document.getElementById("btnTB").onclick = function () {
        let e = document.querySelectorAll(".bai2 .form-control");
        t = 0;
        for (let i = 0; i < e.length; i++){
            t += Number(e[i].value);
        }
        document.getElementById("txtTB").innerHTML = t / e.length;
    };

// Bai 3
    document.getElementById("btnCurrency").onclick = function () {
        let e = document.getElementById("usd").value;
            t = new Intl.NumberFormat("vn-VN").format(23500 * e);
        document.getElementById("txtCurrency").innerHTML = t;
    };

//  Bai 4
    document.getElementById("btnCal").onclick = function () {
        let e = document.getElementById("width").value;
            t = document.getElementById("height").value; 
            n = e * t;
            u = 2 * (Number(e) + Number(t));
        document.getElementById("txtCal").innerHTML =`Diện tích: ${n}; Chu vi: ${u}`;
    };

// Bai 5
    document.getElementById("btnSum").onclick = function () {
        let e = document.getElementById("number").value;
            t = Math.floor(e / 10);
            n = e % 10;
        document.getElementById("txtSum").innerHTML = t + n;
    };