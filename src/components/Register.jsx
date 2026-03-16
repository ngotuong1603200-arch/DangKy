import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register-wrapper">
      <h2 className="page-title">Đăng Ký</h2>

      <div className="register-container">
        {/* --- Cột bên trái: Banner & Logo --- */}
        <div className="register-left">
          <h2>Đặt Hàng Nhanh Chóng<br />Với 1 Nút Bấm !</h2>
          
          <div className="logo-circle">
            <div className="logo-inner">
               <span className="logo-text">KFT</span>
               <span className="logo-subtext">THỨC ĂN NHANH<br/>& GIAO HÀNG</span>
            </div>
          </div>
        </div>

        {/* --- Cột bên phải: Form đăng ký --- */}
        <div className="register-right">
          <h2 className="form-title">ĐĂNG KÝ</h2>
          
          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            {/* Thêm ô Họ và tên */}
            <div className="input-group">
              <input type="text" placeholder="Họ và tên" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>

            {/* Thêm ô chọn Giới tính */}
            <div className="input-group gender-group">
              <label className="gender-label">Giới tính:</label>
              <div className="gender-options">
                <label><input type="radio" name="gender" value="nam" /> Nam</label>
                <label><input type="radio" name="gender" value="nu" /> Nữ</label>
                <label><input type="radio" name="gender" value="khac" /> Khác</label>
              </div>
            </div>
            
            <div className="input-group password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Mật Khẩu :" 
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>

            <div className="input-group password-wrapper">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Nhập lại Mật Khẩu :" 
              />
              <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>

            <button type="submit" className="btn-main-register">Đăng Ký</button>
          </form>

          <div className="social-login-section">
            <p>Đăng Nhập Bằng</p>
            <button className="btn-facebook">
              Facebook <span className="icon-fb">f</span>
            </button>
            <button className="btn-google">
              Google <span className="icon-gg">G</span>
            </button>
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