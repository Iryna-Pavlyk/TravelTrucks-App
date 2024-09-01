import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import css from './BookForm.module.css';

const Schema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  email: Yup.string()
    .email('Email must be a valid!')
    .required('Required!'),
  bookingDate: Yup.date().required('Required!'),
  comment: Yup.string().max(150, 'Too Long!'),
});

const BookForm = () => {
  const values = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    ({
      name: values.name,
      email: values.email,
      bookingDate: values.bookingDate,
      comment: values.comment,
    });
    toast.success('Booking success!');
    actions.resetForm();
  };

  return (
    <>
      <div className={css.formContainer}>
        <h3 className={css.formTitle}>
          Book your campervan now
        </h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik
          initialValues={values}
          validationSchema={Schema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
              ></Field>
              <ErrorMessage
                className={css.err}
                name="name"
                component="span"
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="text"
                name="email"
                placeholder="Email*"
              ></Field>
              <ErrorMessage
                className={css.err}
                name="email"
                component="span"
              />
            </div>
            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
              />
              <ErrorMessage
                className={css.err}
                name="bookingDate"
                component="span"
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                className={css.textarea}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                className={css.err}
                name="comment"
                component="span"
              />
            </div>

            <div>
              <button type="submit" className={css.button}>
                Send
              </button>
              <Toaster position="top-center" />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default BookForm;
