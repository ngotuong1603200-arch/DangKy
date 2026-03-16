import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 1. Tạo state để lưu dữ liệu nhập vào
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  // 2. Tạo state để lưu thông báo lỗi
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // Hàm cập nhật dữ liệu khi người dùng gõ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Tự động xóa lỗi khi người dùng bắt đầu nhập lại
    setErrors({ ...errors, [name]: '' });
  };

  // 3. Hàm xử lý khi bấm nút Đăng Ký
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang bị reload
    
    let newErrors = {};

    // Kiểm tra từng ô, nếu trống thì thêm câu thông báo lỗi
    if (!formData.fullName.trim()) newErrors.fullName = '* Cần nhập họ và tên';
    if (!formData.email.trim()) newErrors.email = '* Cần nhập email';
    if (!formData.gender) newErrors.gender = '* Cần chọn giới tính';
    if (!formData.password) newErrors.password = '* Cần nhập mật khẩu';
    if (!formData.confirmPassword) newErrors.confirmPassword = '* Cần nhập lại mật khẩu';
    else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = '* Mật khẩu nhập lại không khớp';
    }

    setErrors(newErrors);

    // Nếu không có lỗi nào thì mới đăng ký thành công
    if (Object.keys(newErrors).length === 0) {
      alert("Đăng ký thành công!");
      console.log("Dữ liệu gửi đi:", formData);
      // Thực hiện gọi API đăng ký ở đây
    }
  };

  return (
    <div className="register-wrapper">
      <h2 className="page-title">Đăng Ký</h2>

      <div className="register-container">
        <div className="register-left">
          <h2>Đặt Hàng Nhanh Chóng<br />Với 1 Nút Bấm !</h2>
          <div className="logo-circle">
            <div className="logo-inner">
               <span className="logo-text">KFT</span>
               <span className="logo-subtext">THỨC ĂN NHANH<br/>GIAO HÀNG</span>
            </div>
          </div>
        </div>

        <div className="register-right">
          <h2 className="form-title">ĐĂNG KÝ</h2>
          
          {/* Thêm hàm handleSubmit vào form */}
          <form className="register-form" onSubmit={handleSubmit}>
            
            <div className="input-group">
              <input 
                type="text" name="fullName" placeholder="Họ và tên" 
                value={formData.fullName} onChange={handleChange} 
              />
              {/* Hiển thị lỗi nếu có */}
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="input-group">
              <input 
                type="email" name="email" placeholder="Email" 
                value={formData.email} onChange={handleChange} 
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group gender-group" style={{marginBottom: errors.gender ? '5px' : '15px'}}>
              <label className="gender-label">Giới tính:</label>
              <div className="gender-options">
                <label><input type="radio" name="gender" value="nam" onChange={handleChange} /> Nam</label>
                <label><input type="radio" name="gender" value="nu" onChange={handleChange} /> Nữ</label>
                <label><input type="radio" name="gender" value="khac" onChange={handleChange} /> Khác</label>
              </div>
            </div>
            {errors.gender && <span className="error-text" style={{marginBottom: '15px'}}>{errors.gender}</span>}
            
            <div className="input-group password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" placeholder="Mật Khẩu :" 
                value={formData.password} onChange={handleChange}
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
            {errors.password && <span className="error-text" style={{marginTop: '-10px', marginBottom: '15px'}}>{errors.password}</span>}

            <div className="input-group password-wrapper">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                name="confirmPassword" placeholder="Nhập lại Mật Khẩu :" 
                value={formData.confirmPassword} onChange={handleChange}
              />
              <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
            {errors.confirmPassword && <span className="error-text" style={{marginTop: '-10px', marginBottom: '15px'}}>{errors.confirmPassword}</span>}

            <button type="submit" className="btn-main-register">Đăng Ký</button>
          </form>

          <div className="social-login-section">
            <p>Đăng Nhập Bằng</p>
            <button className="btn-facebook">Facebook <span className="icon-fb">f</span></button>
            <button className="btn-google">Google <span className="icon-gg">G</span></button>
          </div>

          <div className="login-hint">
            Bạn Đã Có Tài Khoản ? <a href="#">Đăng Nhập</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;