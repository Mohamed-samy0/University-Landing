export interface ContactFormField {
  id?: string
  label: string
  placeholder: string
  type: 'text' | 'email' | 'tel'
  required: boolean
}

export interface ContactFormData {
  tag: string
  title: string
  description: string
  fields: ContactFormField[]
  submitButtonText: string
  successMessage: string
  errorMessage: string
  submitEndpoint: string
}

export interface ContactFormProps {
  data: ContactFormData
}
