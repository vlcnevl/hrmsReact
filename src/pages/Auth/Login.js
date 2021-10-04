import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthService from "../../services/AuthService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userActions";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const history = useHistory();
  const route = () => {
    history.push("/");
  };

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let authService = new AuthService();
    authService.login(data).then((result) => {
      if (result.data.success) {
        toast.success(result.data.message);
        route();

        dispatch(login());
      } else toast.warning(result.data.message);
    });
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div className="w-full max-w-lg">
        <form
          className="bg-gray-200 shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-black-300 flex items-center justify-center font-bold text-xl mb-3 font-sans ">
            Giriş Yap
          </label>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 font-sans">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                name="email"
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.email && (
                <span className="text-red-600 font-sans">
                  Geçerli bir email giriniz
                </span> //do code refactoring
              )}
            </div>
            <div className="w-full px-3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 font-sans">
                Şifre
              </label>
              <input
                {...register("password", {
                  required: "Şifre boş bırakılamaz",
                  minLength: {
                    value: 8,
                    message: "Şifre en az 8 karakterli olmalı",
                  },
                })}
                name="password"
                type="password"
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.password && (
                <span className="text-red-600 font-sans">
                  {errors.password.message}
                </span>
              )}
              <div>
                <label className="inline-flex items-center space-x-2 ml-1">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Beni hatırla</span>
                </label>
              </div>
            </div>
          </div>

          <div className="items-center flex justify-center">
            <button
              type="submit"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center font-sans"
            >
              <span>Giriş Yap</span>
            </button>
          </div>
        </form>

        <p className="text-center text-white text-xs">
          &copy;2021 VCE Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
