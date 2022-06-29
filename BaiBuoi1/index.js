




// Bài 1: Tính tiền lương nhân viên------------------------------------
var ngayLam = Number(prompt("Nhập số ngày làm: "));

var tinhLuong = 100 * ngayLam;
console.log("Vậy số tiền lương là: " +tinhLuong);

// Bài 2: Tính giá trị trung bình-----------------------------
var num = [1, 2, 3, 4, 5];
var sum = 0;
num.forEach(function(e){
sum += e;
});
var tinhTrungBinh=sum/5;
console.log("Vậy giá trị TB là: " +tinhTrungBinh);

// Bài 3: Quy đổi tiền-------------------------------------
var a = Number(prompt("Nhập số tiền: "));
var tinhTien= a * 23.500;
console.log("Vậy số tiền quy đổi là: " +tinhTien);

// Bài 4: Tính Chu Vi, Diện Tích Hình Chữ Nhật----------------------------
var chieuDai=Number(prompt("Nhập Chiều Dài Hình Chữ Nhật: "));
var chieuRong=Number(prompt("Nhập Chiều Rộng Hình Chữ Nhật: "));

var dienTich= chieuDai * chieuRong;
var chuVi =(chieuDai + chieuRong) * 2;

console.log("Vậy diện tích HCN là: " +dienTich);
console.log("Vậy chu vi HCN là: " +chuVi);


// Bài 5: Tính tổng 2 ký số---------------------------------
var value = prompt("Nhập vào 1 số có 2 chữ số: ");
var sum1 = 0;
while (value){
    sum1 += value % 10;
    value = Math.floor(value / 10);
}
console.log("Vậy tổng ký số là: " + sum1);

