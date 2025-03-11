import React from 'react';

const Contact = () => (
  <div className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-gray-700">Connect with me:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/eaglepython"
            className="text-blue-500 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:aiglevision35@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
