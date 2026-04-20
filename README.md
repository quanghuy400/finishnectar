Nguyễn Quang Huy - 23810310172
Link video : 
https://drive.google.com/file/d/19z0CcrS-2pWGbpTwEaB8od9yB7PA-R0P/view?usp=drivesdk

## Ảnh 1
![Login](assets/23810310172_01_login.jpg)
![Login 2](assets/23810310172_01_login(1).jpg)

## Ảnh 2
![Out App](assets/23810310172_02_outapp.jpg)
![Auto Login](assets/23810310172_02_autologin.jpg)

## Ảnh 3
![Logout 1](assets/23810310172_03_logout1.jpg)
![Logout 2](assets/23810310172_03_logout2.jpg)

## Ảnh 4
![Thêm SP](assets/23810310172_04_ThemSP.jpg)
![Thêm SP 2](assets/23810310172_04_ThemSP(2).jpg)

## Ảnh 5
![Tắt App](assets/23810310172_05_TatApp.jpg)
![Giỏ hàng](assets/23810310172_05_Cartconnguyen.jpg)

## Ảnh 6
![Số lượng](assets/23810310172_06_SoLuong.jpg)
![Số lượng 2](assets/23810310172_06_SoLuong2.jpg)

## Ảnh 7
![Đặt hàng](assets/23810310172_07_DatHangThanhCong.jpg)
![Đặt hàng 2](assets/23810310172_07_DatHangThanhCong2.jpg)

## Ảnh 8
![Danh sách](assets/23810310172_08_DanhSach.jpg)

## Ảnh 9
![Reload](assets/23810310172_09_Reload.jpg)
![Reload 2](assets/23810310172_09_Reload2.jpg)

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
## Ảnh Demo

![Login](assets/23810310172_01_login.jpg)
![Auto Login](assets/23810310172_02_autologin.jpg)
![Logout](assets/23810310172_03_logout1.jpg)
![Thêm sản phẩm](assets/23810310172_04_ThemSP.jpg)
![Giỏ hàng](assets/23810310172_05_Cartconnguyen.jpg)
![Tắt app](assets/23810310172_05_TatApp.jpg)
![Số lượng](assets/23810310172_06_SoLuong.jpg)
![Đặt hàng](assets/23810310172_07_DatHangThanhCong.jpg)
![Danh sách](assets/23810310172_08_DanhSach.jpg)
![Reload](assets/23810310172_09_Reload.jpg)



/// TRẢ LỜI CÂU HỎI /// 

1. AsyncStorage hoạt động như thế nào?
AsyncStorage là hệ thống lưu trữ key-value bất đồng bộ trên thiết bị. Data được lưu dạng string vào bộ nhớ cục bộ của điện thoại, tồn tại ngay cả khi tắt app. Mọi thao tác đọc/ghi đều trả về Promise nên phải dùng

2. Vì sao dùng AsyncStorage thay vì biến state?
State (useState) chỉ tồn tại trong RAM — tắt app là mất sạch. AsyncStorage lưu xuống bộ nhớ điện thoại nên data vẫn còn sau khi tắt/mở lại app. Ví dụ: giỏ hàng và đơn hàng vẫn còn sau khi reload, nếu dùng state thuần thì tắt app là mất hết.

3. So sánh với Context API
Context API giống như bảng trắng trong phòng — ai trong phòng cũng nhìn thấy và dùng được, nhưng hễ ra khỏi phòng là bảng bị xóa sạch. Tương tự, khi tắt app thì mọi state trong Context đều biến mất.
AsyncStorage thì giống như ghi vào sổ tay — dù có đi đâu, tắt app, khởi động lại điện thoại thì data vẫn còn đó, chỉ cần mở ra đọc lại là được.