// src/components/Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 animate-slide-in">Contact Us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white p-8 rounded shadow-md max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <Field type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <Field type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <Field as="textarea" id="message" name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" rows="4" />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>
              <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition" disabled={isSubmitting}>
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
