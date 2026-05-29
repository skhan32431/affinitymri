"use client";

import { useState } from "react";

export default function RxUploadPage() {
  const [files, setFiles] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const names = Array.from(e.dataTransfer.files).map((f) => f.name);
    setFiles((prev) => [...prev, ...names]);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const names = Array.from(e.target.files).map((f) => f.name);
    setFiles((prev) => [...prev, ...names]);
  }

  function removeFile(name: string) {
    setFiles((prev) => prev.filter((f) => f !== name));
  }

  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Prescription Upload
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Upload Your RX
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-md mx-auto">
              Securely upload your prescription to expedite your appointment scheduling. Accepted formats: PDF, JPG, PNG.
            </p>
          </div>

          <div className="hero-enter-delayed space-y-6">
            {/* Patient info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Patient Name *</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Phone *</label>
                <input type="tel" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Referring Physician</label>
              <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
            </div>

            {/* Drop zone */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Prescription File *</label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer ${
                  dragOver
                    ? "border-primary bg-primary/5"
                    : "border-outline-variant hover:border-primary/40 hover:bg-surface-low"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-on-surface mb-1">
                  Drag & drop your prescription here
                </p>
                <p className="text-xs text-on-surface-variant">
                  or click to browse — PDF, JPG, PNG (max 10MB)
                </p>
              </div>
            </div>

            {/* File list */}
            {files.length > 0 && (
              <div className="space-y-2">
                {files.map((name) => (
                  <div key={name} className="flex items-center gap-3 bg-surface-low rounded-xl px-4 py-3 ring-1 ring-black/[0.04]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                    </svg>
                    <span className="text-sm text-on-surface flex-1 truncate">{name}</span>
                    <button
                      onClick={() => removeFile(name)}
                      className="text-on-surface-variant hover:text-error transition-colors p-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Additional Notes</label>
              <textarea rows={3} className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white resize-none" placeholder="Any special instructions or notes for our staff..." />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,61,155,0.18)] hover:bg-primary-container btn-press transition-all duration-200"
            >
              Submit Prescription
            </button>

            <div className="bg-surface-low rounded-2xl p-5 ring-1 ring-black/[0.04]">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0 mt-0.5">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Secure & HIPAA Compliant</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    All uploads are encrypted and transmitted securely. Your medical information is protected in accordance with HIPAA regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
