import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingupPage2() {
  const [role, setRole] = useState(1);
  const [showStoreFields, setShowStoreFields] = useState(false);

  useEffect(() => {
    setShowStoreFields(role === 2);
    console.log(role);
  }, [role]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const storeName = watch("storeName") || "";
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      formData.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxID,
        bank_account: data.storeBankAccount,
      };
    }
    console.log(data.role_id);
    try {
      const response = await api.post("/signup", formData);
      console.log("Başarılı:", response.data);
      console.log(formData);
      toast.success("Başarıyla kayıt oldunuz.");

      setIsSubmitting(false);
    } catch (error) {
      console.error("Hata:", error);
      toast.error("Kayıt sırasında bir hata oluştu.");

      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-purple-600">HepsiOrada</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center justify-center">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                    className="block w-full mt-1 border border-black rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <p style={{ color: errors.name ? "red" : "inherit" }}>
                  {errors.name && errors.name.message}
                </p>
              </div>
              <div className="mt-4 text-center justify-center">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address",
                      },
                    })}
                    className="block w-full mt-1 border border-black rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <p style={{ color: errors.email ? "red" : "inherit" }}>
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className="mt-4 text-center justify-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start ">
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="block w-full mt-1 border border-black rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <p style={{ color: errors.password ? "red" : "inherit" }}>
                  {errors.password && errors.password.message}
                </p>
              </div>
              <div className="mt-8 text-center justify-center ">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    id="passwordConfirmation"
                    {...register("passwordConfirmation", {
                      required: "Password confirmation is required",
                      className: "",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    className="block border border-black w-full mt-1  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <p
                  style={{
                    color: errors.passwordConfirmation ? "red" : "inherit",
                  }}
                >
                  {errors.passwordConfirmation &&
                    errors.passwordConfirmation.message}
                </p>
              </div>
              <div className="flex w-full mt-8 items-center justify-center rounded-lg border border-black">
                <select
                  onChange={(e) => setRole(parseInt(e.target.value))}
                  {...register("role_id")}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">Customer</option>
                  <option value="2">Store</option>
                  <option value="3">Admin</option>
                </select>
              </div>
              {showStoreFields && (
                <div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2"
                        htmlFor="storeName"
                      >
                        Store Name
                      </label>
                      <input
                        className={`appearance-none block w-full bg-gray-200 text-blue-900 border ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="storeName"
                        type="text"
                        placeholder="Store Name"
                        {...register("storeName", {
                          required: "Store name is required",
                          minLength: {
                            value: 3,
                            message:
                              "Store name should be at least 3 characters",
                          },
                        })}
                      />
                      {storeName.length < 3 && (
                        <p className="text-red-500 text-xs italic">
                          {errors.storeName ? errors.storeName.message : ""}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2"
                        htmlFor="storeTaxId"
                      >
                        Store Tax ID
                      </label>
                      <input
                        className={`appearance-none block w-full bg-gray-200 text-blue-900 border ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="storeTaxId"
                        type="text"
                        placeholder="TXXXXVXXXXXX"
                        {...register("storeTaxId", {
                          required: "Store Tax Id is required",
                          pattern: {
                            value: /^T\d{4}V\d{6}$/,
                            message:
                              "Store Tax Id should start with 'T' and be followed by 4 digits and then 'V' followed by 6 digits.",
                          },
                        })}
                      />
                      {errors.storeTaxId && (
                        <p className="text-red-500 text-xs italic">
                          {errors.storeTaxId.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2"
                        htmlFor="storeBankAccount"
                      >
                        Store Bank Account (IBAN)
                      </label>
                      <input
                        className={`appearance-none block w-full bg-gray-200 text-blue-900 border ${
                          errors.storeBankAccount
                            ? "border-red-500"
                            : "border-gray-200"
                        } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="storeBankAccount"
                        type="text"
                        placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXXXX"
                        {...register("storeBankAccount", {
                          required: "Store Bank Account is required",
                          minLength: {
                            value: 26,
                            message: "IBAN must be at least 26 characters long",
                          },
                          pattern: {
                            value: /^TR\d{24}$/,
                            message:
                              "Invalid IBAN format. It should start with 'TR' followed by 24 digits.",
                          },
                        })}
                      />
                      {errors.storeBankAccount && (
                        <p className="text-red-500 text-xs italic">
                          {errors.storeBankAccount.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <a
                href="www.google.com"
                className="text-xs text-purple-600 hover:underline"
              >
                Forget Password?
              </a>

              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </div>
            </form>
            <ToastContainer />

            <div className="mt-4 text-grey-600">
              Already have an account?{" "}
              <span>
                <a
                  className="text-purple-600 hover:underline"
                  href="http://localhost:3000/signup"
                >
                  Log in
                </a>
              </span>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full" />
              <p className="px-3 ">OR</p>
              <hr className="w-full" />
            </div>
            <div className="my-6 space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
              <button
                aria-label="Login with GitHub"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <svg
                  xmlns="http://w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
                <p>Login with GitHub</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingupPage2;
