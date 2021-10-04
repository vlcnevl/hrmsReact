import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthService from "../../services/AuthService";

export default function RegisterEmployer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    // console.log(data);

    let authService = new AuthService();
    authService.employerRegister(data).then((result) => {
      result.data.success
        ? toast.success(result.data.message)
        : toast.warning(result.data.message);
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
            Kayıt Ol
          </label>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 font-sans">
                Şirket İsmi
              </label>
              <input
                {...register("companyName", {
                  required: "Şirket ismi alanı boş bırakılamaz",
                })}
                name="companyName"
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.companyName && (
                <span className="text-red-600 font-sans">
                  {errors.companyName.message}
                </span>
              )}
            </div>
          </div>

          {/* email */}
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
                </span>
              )}
            </div>
          </div>

          {/* webadresi */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 font-sans">
                Web sitesi
              </label>
              <input
                name="webAddress"
                {...register("webAddress", {
                  required: "Geçerli bir web sitesi giriniz",
                })}
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            {errors.webAddress && (
              <span className="text-red-600 ml-3 font-sans">
                {errors.webAddress.message}
              </span>
            )}
          </div>

          {/* telefon numarası */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 font-sans">
                Telefon
              </label>
              <input
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: "Telefon numarası boş bırakılamaz",
                })}
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            {errors.phoneNumber && (
              <span className="text-red-600 ml-3 font-sans">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          {/* şifreler */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block   tracking-wide text-gray-700 text-xs font-bold mb-2 font-sans">
                Şifre
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: "Şifre boş bırakılamaz",
                  minLength: {
                    value: 8,
                    message: "Şifre en az 8 karakterli olmalı",
                  },
                })}
                className="appearance-none block w-full bg-gray-50 border border-gray-200  text-gray-700 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.password && (
                <span className="text-red-600 font-sans">
                  {errors.password.message}{" "}
                </span>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block   tracking-wide text-gray-700 text-xs font-bold mb-2   font-sans">
                Şifre Tekrar
              </label>
              <input
                type="password"
                name="rePassword"
                {...register("rePassword", {
                  required: "Şifreyi tekrar giriniz",
                  validate: (value) =>
                    value === password.current || "Şifreler aynı değil",
                })}
                className="mb-3 appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.rePassword && (
                <span className="text-red-600 font-sans">
                  {errors.rePassword.message}{" "}
                </span>
              )}
            </div>
          </div>

          <div className="items-center flex justify-center">
            <button
              type="submit"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center font-sans"
            >
              <span>Kayıt Ol</span>
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
