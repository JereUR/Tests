import React, { useState } from "react";

const initialData = {
  firstName: "",
  email: "",
  issue: "",
  message: "",
};

export const FormCustom = () => {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});

  const onValidate = (form) => {
    let errorsForm = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.firstName.trim()) {
      errorsForm.name = `El campo "Nombre" no debe ser vacío.`;
    } else if (!regexName.test(form.firstName)) {
      errorsForm.name = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.email.trim()) {
      errorsForm.email = `El campo "Email" no debe ser vacío.`;
    } else if (!regexEmail.test(form.email)) {
      errorsForm.email = 'El campo "Email" contine un correo no válido.';
    }

    if (!form.issue.trim()) {
      errorsForm.issue = `El campo "Asunto" no debe ser vacío.`;
    } else if (!regexName.test(form.issue)) {
      errorsForm.issue = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.message.trim()) {
      errorsForm.message = `El campo "Mensaje" no debe ser vacío.`;
    }

    return errorsForm;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = onValidate(form);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      console.log("Envio formulario");
      setForm(initialData);
      console.log(form);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="firstName"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="alert">{errors.name}</div>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="alert">{errors.email}</div>}

        <input
          type="text"
          placeholder="Asunto"
          name="issue"
          value={form.issue}
          onChange={handleChange}
        />
        {errors.issue && <div className="alert">{errors.issue}</div>}

        <input
          type="text"
          placeholder="Mensaje"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <div className="alert">{errors.message}</div>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
