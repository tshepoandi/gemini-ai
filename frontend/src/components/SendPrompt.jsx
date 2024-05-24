const SendPrompt = () => {
  return (
    <div className="col-span-full mx-12 max-w-auto">
    <label htmlFor="lyrics" className="block text-sm font-medium leading-6 text-gray-900">
      Paste Lyrics Here
    </label>
    <div className="mt-2">
      <textarea
        id="lyrics"
        name="lyrics"
        rows={3}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={''}
      />
    </div>
    <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"> Read Lyrics </button>
  </div>
  )
}

export default SendPrompt