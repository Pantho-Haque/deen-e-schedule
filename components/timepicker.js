export default function TimePicker({ startTime, endTime, setStartTime, setEndTime }) {
  return (
    <form className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="start-time"
          className="block mb-2 text-sm font-medium text-white"
        >
          Start time:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="time"
            id="start-time"
            className="border leading-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            min="09:00"
            max="18:00"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="end-time"
          className="block mb-2 text-sm font-medium text-white"
        >
          End time:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="time"
            id="end-time"
            className="border leading-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            min="09:00"
            max="18:00"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
      </div>
    </form>
  );
}
