Nguyễn Quang Huy - 23810310172

/// ẢNH 1 /// 
![alt text](23810310172_01_login.jpg)
![alt text](23810310172_01_login-1.jpg)

/// ẢNH 2 /// 
![alt text](23810310172_02_outapp.jpg)
![alt text](23810310172_02_autologin.jpg)

/// ẢNH 3 /// 
![alt text](23810310172_03_logout1.jpg) 
![alt text](23810310172_03_logout2.jpg)

/// ẢNH 4 ///
![alt text](23810310172_04_ThemSP.jpg) 
![alt text](23810310172_04_ThemSP-1.jpg)

/// ẢNH 5 /// 
![alt text](23810310172_05_TatApp.jpg)
![alt text](23810310172_05_Cartconnguyen.jpg)

/// ẢNH 6 /// 
![alt text](23810310172_06_SoLuong.jpg)
![alt text](23810310172_06_SoLuong2.jpg)

/// ẢNH 7 ///
![alt text](23810310172_07_DatHangThanhCong.jpg)
![alt text](23810310172_07_DatHangThanhCong2.jpg)

/// ẢNH 8 /// 
![alt text](23810310172_08_DanhSach.jpg)

/// ẢNH 9 /// 
![alt text](23810310172_09_Reload.jpg)
![alt text](23810310172_09_Reload2.jpg) 


/// MÔ TẢ CHỨC NĂNG /// 
Mô tả chức năng:
Nectar là ứng dụng mua sắm thực phẩm online gồm các chức năng chính:

Xác thực: Đăng ký, đăng nhập, tự động hết hạn phiên sau 7 ngày
Trang chủ: Hiển thị sản phẩm theo danh mục, banner khuyến mãi
Khám phá: Tìm kiếm sản phẩm theo tên, lọc theo danh mục và thương hiệu
Giỏ hàng: Thêm, xóa, thay đổi số lượng sản phẩm, thanh toán
Đơn hàng: Xem lịch sử đơn hàng, xóa đơn hàng
Yêu thích: Xem danh sách yêu thích, thêm tất cả vào giỏ, xóa sản phẩm
Đồ uống: Danh sách đồ uống, thêm vào giỏ hàng
Tài khoản: Xem đơn hàng, đăng xuất

Data được lưu trữ cục bộ bằng AsyncStorage, mã hóa base64 trước khi lưu.

/// HƯỚNG DẪN CHẠY APP /// 

Node.js >= 18
Expo Go app trên điện thoại (Android/iOS)
# 1. Clone project
git clone <link-repo>
cd nectar
# 2. Cài dependencies
npm install
# 3. Chạy app
npx expo start

Sau đó mở Expo Go trên điện thoại rồi quét QR code hiển thị trên terminal.
Tài khoản test:
Email: test@gmail.com
Password: 123456

/// ẢNH DEMO /// 
![alt text](1.jpg)
![alt text](2.jpg)
![alt text](3.jpg)
![alt text](4.jpg)
![alt text](5.jpg)
![alt text](6.jpg)
![alt text](7.jpg)
![alt text](Home1.jpg)
![alt text](Explore.jpg)
![alt text](Search.jpg)
![alt text](Filter.jpg)
![alt text](Favourite.jpg)
![alt text](ProductDetail.jpg)
![alt text](23810310172_05_Cartconnguyen-1.jpg)
![alt text](23810310172_08_DanhSach-1.jpg)



/// TRẢ LỜI CÂU HỎI /// 

1. AsyncStorage hoạt động như thế nào?
AsyncStorage là hệ thống lưu trữ key-value bất đồng bộ trên thiết bị. Data được lưu dạng string vào bộ nhớ cục bộ của điện thoại, tồn tại ngay cả khi tắt app. Mọi thao tác đọc/ghi đều trả về Promise nên phải dùng

2. Vì sao dùng AsyncStorage thay vì biến state?
State (useState) chỉ tồn tại trong RAM — tắt app là mất sạch. AsyncStorage lưu xuống bộ nhớ điện thoại nên data vẫn còn sau khi tắt/mở lại app. Ví dụ: giỏ hàng và đơn hàng vẫn còn sau khi reload, nếu dùng state thuần thì tắt app là mất hết.

3. So sánh với Context API
Context API giống như bảng trắng trong phòng — ai trong phòng cũng nhìn thấy và dùng được, nhưng hễ ra khỏi phòng là bảng bị xóa sạch. Tương tự, khi tắt app thì mọi state trong Context đều biến mất.
AsyncStorage thì giống như ghi vào sổ tay — dù có đi đâu, tắt app, khởi động lại điện thoại thì data vẫn còn đó, chỉ cần mở ra đọc lại là được.