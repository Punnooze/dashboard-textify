export default function Colours() {
  return (
    <>
      <div className="min-h-screen bg-darkBlue text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-highlightBlue">
          Dashboard Color Test
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {/* Display each color */}
          <div className="w-48 h-48 bg-darkBlue flex items-center justify-center">
            darkBlue
          </div>
          <div className="w-48 h-48 bg-darkerBlue flex items-center justify-center">
            darkerBlue
          </div>
          <div className="w-48 h-48 bg-highlightBlue flex items-center justify-center text-black">
            highlightBlue
          </div>
          <div className="w-48 h-48 bg-accentPurple flex items-center justify-center">
            accentPurple
          </div>
          <div className="w-48 h-48 bg-lightBlue flex items-center justify-center text-black">
            lightBlue
          </div>
          <div className="w-48 h-48 bg-cyan flex items-center justify-center text-black">
            cyan
          </div>
          <div className="w-48 h-48 bg-lightGray flex items-center justify-center text-black">
            lightGray
          </div>
          <div className="w-48 h-48 bg-green flex items-center justify-center">
            green
          </div>
          <div className="w-48 h-48 bg-red flex items-center justify-center">
            red
          </div>
        </div>
      </div>
    </>
  );
}
