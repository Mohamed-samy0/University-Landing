'use client'

import React, { useState } from 'react'
import { ContactFormProps } from './ContactForm.types'

export const ContactFormSection = ({ data }: ContactFormProps) => {
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (label: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [label]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      console.log(`Submitting to: ${data.submitEndpoint}`, formValues)

      setTimeout(() => {
        setStatus('success')
        setFormValues({})
      }, 1000)
    } catch (error) {
      setStatus('error')
    }
  }

  if (!data || !data.fields) return null

  return (
    <section className="py-24 bg-gradient-to-r from-[#eef1f6] via-[#fbf8f5] to-[#fdeee7] w-full font-futura">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        <div className="lg:col-span-4 flex flex-col items-start lg:pr-8 pt-2">
          <span className="bg-[#273480] text-white text-[13px] font-bold tracking-wide px-4 py-2 mb-6 rounded-md shadow-sm">
            {data.tag || 'Take Action'}
          </span>

          <h2 className="text-4xl lg:text-[48px] font-extrabold text-[#101828] leading-[1.1] mb-5 tracking-tight">
            {data.title}
          </h2>

          <p className="text-[#667085] text-[17px] leading-relaxed max-w-sm">{data.description}</p>

          {status === 'success' && (
            <p className="mt-6 text-[#348141] font-bold">{data.successMessage}</p>
          )}
          {status === 'error' && (
            <p className="mt-6 text-[#e84925] font-bold">{data.errorMessage}</p>
          )}
        </div>

        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="flex flex-col">
            {data.fields.map((field, index) => (
              <div
                key={field.id || index}
                className="flex items-center justify-between gap-25 py-6 border-b border-gray-200 focus-within:border-[#273480] transition-colors group"
              >
                <label className="shrink-0 w-[140px] sm:w-[200px] text-[#667085] text-[16px] sm:text-[18px]">
                  {field.label} {field.required && <span className="text-[#e84925]">*</span>}
                </label>

                <input
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={formValues[field.label] || ''}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  disabled={status === 'submitting'}
                  className="contact-input-placeholder flex-1 min-w-0 bg-transparent text-[#101828] font-extrabold text-[16px] sm:text-[18px] focus:outline-none"
                />
              </div>
            ))}

            <div className="flex justify-end mt-10">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`text-white rounded-full pl-8 pr-2 py-2 w-fit font-bold transition-colors flex items-center gap-4 group shadow-md focus:outline-none ${
                  status === 'submitting'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#e84925] hover:bg-[#d03d1c]'
                }`}
              >
                {status === 'submitting' ? 'Sending...' : data.submitButtonText}
                <span className="bg-white text-[#e84925] rounded-full p-2.5 transition-transform group-hover:translate-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
