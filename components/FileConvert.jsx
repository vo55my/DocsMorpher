import Image from "next/image";

export default function FileConvert({ title, imageSrc, fileHelpText, }) {

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 rounded-lg max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              {title}
            </h1>
            <div className="flex justify-center">
              <Image
                src={imageSrc}
                alt={title}
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <form
              action="#"
              method="post"
              encType="multipart/form-data"
              className="w-full"
            >
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <label
                  htmlFor="file_input"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Upload your file
                </label>
                <p
                  className="mb-3 text-sm text-gray-500"
                  id="file_input_help"
                >
                  {fileHelpText}
                </p>
                <input
                  className="file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  name="document"
                  accept=".xls, .xlsx"
                />
              </div>
              <div className="pt-6 text-center">
                <button
                  type="submit"
                  value="Upload"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Convert to PDF
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
