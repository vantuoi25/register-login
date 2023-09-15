const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

// Middleware để hash mật khẩu trước khi lưu hoặc cập nhật tài khoản
accountSchema.pre(
  ['save', 'findOneAndUpdate', 'findByIdAndUpdate'],
  function (next) {
    const account = this;
    if (account.isModified('password')) {
      // Kiểm tra xem mật khẩu có được thay đổi không
      account.password = bcryptjs.hashSync(account.password, 10);
    }
    next();
  },
);

accountSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.password;
  },
});
/* 
    1) Chúng ta sử dụng một mảng pre để áp dụng middleware
    cho nhiều sự kiện (save, findOneAndUpdate, findByIdAndUpdate) cùng một lúc. Điều này giúp tối ưu hóa mã và giảm sự lặp lại
    2) Chúng ta sử dụng isModified('password') để kiểm tra xem mật khẩu có được thay đổi trong quá trình lưu hoặc cập nhật tài khoản không.
    Nếu mật khẩu đã thay đổi, chúng ta mới thực hiện hash lại mật khẩu. Điều này giúp tránh việc hash mật khẩu mỗi khi lưu hoặc cập nhật tài khoản, 
    ngay cả khi không có sự thay đổi nào.
    3) accountSchema.set('toJSON', ...) là để đảm bảo rằng mật khẩu sẽ bị xóa khỏi đối tượng trả về khi gọi .toJSON() trên đối tượng tài khoản. 
    Điều này giúp đảm bảo rằng mật khẩu không bao giờ được trả về trong các phản hồi API hoặc khi chuyển đổi đối tượng thành JSON.
    */

module.exports = mongoose.model('account', accountSchema);
