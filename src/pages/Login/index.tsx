import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "antd";
import { formSchema, FormValues } from "../../interface/form";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../utils/toats";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const { toast, contextHolder } = useToast();
  console.log("hi");

  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (name && errors[name]) {
        clearErrors(name);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, clearErrors, errors]);

  const onSubmit = async ({ username, password }: FormValues) => {
    try {
      const { token } = await login(username, password);
      console.log(token);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast("error", "Oops! Something went wrong");
    }
  };
  return (
    <>
      {contextHolder}
      <span className="text-[#333] text-3xl pb-6 ">Welcome</span>
      <img
        className="rounded-xl"
        src="/public/459032556_4652162325009674_2150175736681819297_n.jpg"
        alt="Logo"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm mx-auto mt-10"
      >
        <div className="w-[300px]">
          <label className="block text-[14px] ">
            <span className="text-red-500">*</span> Name
          </label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.username && (
            <p className="text-red-500 max-w-[200px]">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="w-[300px]">
          <label className="block text-[14px] ">
            <span className="text-red-500">*</span> Password
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input.Password {...field} />}
          />
          {errors.password && (
            <p className="text-red-500 max-w-[200px]">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="primary" htmlType="submit" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Login;
