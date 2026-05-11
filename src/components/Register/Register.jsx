import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/Usercontext';
export default function Register() {
let navigate = useNavigate();

  const [messageError, setmessageError] = useState("");


  //send api to back end AbdoOmar11@code.com //AbdoOmar112@code.com //Abdrrrr@gmail.com
async function handleRegister(values) {

  setmessageError("");

  try {
    // محاكاة تأخير بسيط للواقعية (500ms)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 1. جلب المستخدمين الحاليين
    const users = JSON.parse(localStorage.getItem("maskany_users")) || [];

    // 2. التحقق من تكرار الإيميل
    if (users.find((u) => u.email === values.email)) {
      setmessageError("This email is already registered!");

      return;
    }

    // 3. إنشاء التوكن والمستخدم الجديد
    const newToken = `token_${Math.random().toString(36).substr(2)}`;
    const newUser = { ...values, token: newToken, id: Date.now() };

    // 4. الحفظ في المصفوفة
    users.push(newUser);
    localStorage.setItem("maskany_users", JSON.stringify(users));

    // 5. تسجيل الدخول التلقائي (حفظ التوكن في State و LocalStorage)
    localStorage.setItem("userToken", newToken);


    navigate("/home");
  } catch (error) {
    setmessageError("Registration failed. Please try again.");

  }
}
  //validtion input
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "name minlengh in 3")
      .max(20, "name maxlengh in 20"),
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string()
      .required("password is required")
      .min(5, "password minlengh in 5")
      .max(30, "password maxlengh in 30"),
    rePassword: Yup.string()
      .required("rePassword is required")
      .oneOf([Yup.ref("password")], "password and repassword doesnt match"),
    phone: Yup.string().required("phone is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
   validationSchema,
    onSubmit: handleRegister,
  });

  return <>
<div className="container mt-5 d-flex justify-content-center w-100 align-items-center  bg-light">
      <div className="card shadow-lg p-4 border-0 w-75" >
        
        <div className="text-center mb-4">
          <h2 className="fw-bold text-maskany mb-1">Maskany</h2>
          <p className="text-muted small">Create an account to find your dream home</p>
        </div>
        {messageError.length > 0 ? (
          <div className="alert alert-danger">{messageError}</div>
        ) : null}

        <form onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label small fw-bold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="AbdulRahman "
               onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
              className={`form-control custom-input ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="invalid-feedback">{formik.errors.name}</div>
            )}
          </div>

          {/* Email Address */}
          <div className="mb-3">
            <label className="form-label small fw-bold">Email Address</label>
            <input
              type="email"
              name="email"
              onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
              placeholder="name@example.com"
              className={`form-control custom-input ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>
           {/* Phone  */}
          <div className="mb-3">
            <label className="form-label small fw-bold">Phone </label>
            <input
              type="text"
              name="phone"
              onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
              placeholder="01xxxxx"
              className={`form-control custom-input ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="invalid-feedback">{formik.errors.phone}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label small fw-bold">Password</label>
            <input
              type="password"
              name="password"
              onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
              placeholder="••••••••"
              className={`form-control custom-input ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="form-label small fw-bold">Confirm Password</label>
            <input
              type="password"
              name="rePassword"
              placeholder="••••••••"
              className={`form-control custom-input ${formik.touched.rePassword && formik.errors.rePassword ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('rePassword')}
            />
            {formik.touched.rePassword && formik.errors.rePassword && (
              <div className="invalid-feedback">{formik.errors.rePassword}</div>
            )}
          </div>

          <button type="submit" className="btn btn-maskany w-100 py-2 fw-bold shadow-sm">
            Register Now
          </button>

          <div className="text-center mt-4">
            <small className="text-muted">
              Already have an account? <NavLink to="/login" className="text-maskany fw-bold text-decoration-none">Login</NavLink>
            </small>
          </div>
        </form>
      </div>
    </div>
 
    




  </>
}
