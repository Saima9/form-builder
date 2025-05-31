export const predefinedTemplates = {
  contactUs: [
    {
      id: 1,
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
    },
    {
      id: 2,
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      pattern: "^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
    },
    {
      id: 3,
      type: "textarea",
      label: "Message",
      placeholder: "Enter your message",
      required: true,
      minLength: 10,
    },
  ],
};
