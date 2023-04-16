var tinhLuong = document.getElementById('tinhLuong').onclick = function () {
    //dom tới các thể input để lấy dữ liệu
    var luongMotNgay = document.getElementById('luongMotNgay').value * 1;
    var soNgayLam = document.getElementById('soNgayLam').value * 1;

    //xử lý
    var tongThuNhap = luongMotNgay * soNgayLam;

    //dom tới thẻ #ketQuaLuong hiển thị nội dung kết quả
    document.getElementById('ketQuaLuong').innerHTML = tongThuNhap;
};

var tinhTrungBinh = document.getElementById('tinhTrungBinh').onclick = function () {
    //dom tới các thẻ input để lấy dữ liệu
    var no1 = document.getElementById('no1').value * 1;
    var no2 = document.getElementById('no2').value * 1;
    var no3 = document.getElementById('no3').value * 1;
    var no4 = document.getElementById('no4').value * 1;
    var no5 = document.getElementById('no5').value * 1;

    //xử lý
    var giaTriTrungBinh = (no1 + no2 + no3 + no4 + no5) / 5;

    //dom tới thẻ #ketQuaTrungBinh hiển thị nội dung kết quả
    document.getElementById('ketQuaTrungBinh').innerHTML = giaTriTrungBinh;
};

var btnQuyDoi = document.getElementById('btnQuyDoi').onclick = function () {
    //dom tới thẻ input để lấy giá trị
    var soTien = document.getElementById('soTien').value * 1;

    //xử lý
    tienVND = soTien * 23500;

    //format VND
    var currentFormat = new Intl.NumberFormat('vn-VN');

    //dom tới thẻ #ketQuaQuyDoi hiển thị nội dung kết quả
    document.getElementById('ketQuaQuyDoi').innerHTML = currentFormat.format(tienVND);
};

var btnKetQua = document.getElementById('btnKetQua').onclick = function () {
    //dom tới thẻ input để lấy giá trị
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;

    //xử lý
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;

    //dom tới thẻ #ketQuaQuyDoi hiển thị nội dung kết quả
    var ketQua = 'Chu vi = ' + chuVi + ' & ' + 'Diện tích = ' + dienTich;
    document.getElementById('ketQua').innerHTML = ketQua;
};

var btnTinhTong = document.getElementById('btnTinhTong').onclick = function () {
    //dom tới thẻ input để lấy giá trị
    var so2ChuSo = document.getElementById('so2ChuSo').value;

    //Xử lý
    num1 = Math.floor(so2ChuSo / 10);
    num2 = so2ChuSo % 10;
    num12  = num1 + num2;

    //show kết quả
    document.getElementById('tong2KySo').innerHTML = num12;
};