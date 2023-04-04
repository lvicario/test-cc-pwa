import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

const LoginForm = () => {
    const fields = [
        {
            name: "userName",
            value: "",
        },
        {
            name: "password",
            value: "",
        },
    ];

    const loginFormSchema = yup.object().shape({
        userName: yup.string()
            .required(),
        password: yup.string()
            .required()
    });

    const initialValues = {
        userName: "",
        password: ""
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={loginFormSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log("values:", values);

                    const response = await axios.get(`http://local-titanfx-clientcabinet.tartarus-tfx.com/auth`);
                    console.log("response:", response);
                    // Inertia.post(`/${instance}/withdraw/process`, payload, {
                    //     onFinish: () => {
                    //         setSubmitting(false);
                    //     }
                    // });
                }}
            >
                {({ setStatus, setFieldValue, resetForm, isValid, touched, isSubmitting }) => (
                    <>
                        <Form>
                            {fields.map(({ name }) => {
                                return (
                                    <div key={name}>
                                        <label>{name}</label>
                                        <Field
                                            name={name}
                                            id={name}
                                        />
                                    </div>
                                )
                            })}

                            <button type="submit">Login</button>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;
