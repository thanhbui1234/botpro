import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "antd";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  password: z.string().min(1, "Name is required"),
});

type FormValues = z.infer<typeof formSchema>;
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

  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (name && errors[name]) {
        clearErrors(name);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, clearErrors, errors]);

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };
  return (
    <>
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
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          {errors.name && (
            <p className="text-red-500 max-w-[200px]">{errors.name.message}</p>
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
