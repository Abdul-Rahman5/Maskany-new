import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/Usercontext';
export default function Login() {
  let navigate = useNavigate();

  const [messageError, setmessageError] = useState("");
  const { setUserLogin } = useContext(UserContext);


async function handleLogin(values) {
  setmessageError("");
console.log(localStorage.getItem("maskany_users"));

  try {
    // 1. استخدام Promise بدلاً من التايمر التقليدي لضمان أن الدالة تنتظر التنفيذ
    await new Promise((resolve) => setTimeout(resolve, 600));

    // 2. قراءة البيانات
    const users = JSON.parse(localStorage.getItem("maskany_users")) || [];

    // 3. البحث عن المستخدم
    const user = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
      // 4. حالة النجاح: تحديث التخزين أولاً
      localStorage.setItem("userToken", user.token);
      
      // 5. تحديث الـ Context
      setUserLogin(user.token);

 
      navigate("/home");
    } else {
      // 7. حالة الفشل
      setmessageError("Invalid email or password. Please try again.");
    }
  } catch (error) {
    setmessageError("An error occurred. Please try creating a new account.");
  }
}
  //validtion input
  let validationSchema = Yup.object({

    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string()
      .required("password is required")
      .min(5, "password minlengh in 5")
      .max(30, "password maxlengh in 30"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return <>
    <div className="container mt-5 d-flex justify-content-center w-100 align-items-center  bg-light">
      <div className="card shadow-lg p-4 border-0 w-75" >

        <div className="text-center mb-4">
          <h2 className="fw-bold text-maskany mb-1">Maskany</h2>
        </div>
        {messageError.length > 0 ? (
          <div className="alert alert-danger">{messageError}</div>
        ) : null}

        <form onSubmit={formik.handleSubmit}>


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


          <button type="submit" className="btn btn-maskany w-100 py-2 fw-bold shadow-sm">
            Login Now
          </button>

          <div className="text-center mt-4">

          </div>
        </form>
      </div>
    </div>






  </>
}
